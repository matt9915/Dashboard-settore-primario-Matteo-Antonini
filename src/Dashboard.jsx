import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from "recharts";
import axios from "axios";
import datiAgricoli from "./datiCREA";
import generaDatiSimulati from "./datiRandom";
import { traduciCondizioneMeteo } from "./datiMeteo";

const API_KEY = "d37f8cb3bb3b48fb3cd39c0b5701bf3e";

const regionToCity = {
  Abruzzo: "L'Aquila", Basilicata: "Potenza", Calabria: "Catanzaro", Campania: "Napoli", EmiliaRomagna: "Bologna",
  FriuliVeneziaGiulia: "Trieste", Lazio: "Roma", Liguria: "Genova", Lombardia: "Milano", Marche: "Ancona",
  Molise: "Campobasso", Piemonte: "Torino", Puglia: "Bari", Sardegna: "Cagliari", Sicilia: "Palermo",
  Toscana: "Firenze", TrentinoAltoAdige: "Trento", Umbria: "Perugia", ValleDAosta: "Aosta", Veneto: "Venezia"
};

const Dashboard = () => {
  const [regioneSelezionata, setRegioneSelezionata] = useState("Abruzzo");
  const [weather, setWeather] = useState(null);
  const [datiSimulati, setDatiSimulati] = useState([]);

  const valoreUnitario = 1.2;

  const datiPerformance = datiAgricoli.filter(d => d.regione === regioneSelezionata).map(d => ({
    anno: d.anno,
    ricavi: d.produzione * valoreUnitario,
    costi: d.consumi * valoreUnitario,
    utile: d.produzione * valoreUnitario - d.consumi * valoreUnitario
  }));

  const performanceSimulata = datiSimulati.map(d => {
    const ricavi = d.produzione * valoreUnitario;
    const costi = ricavi * (1 - d.efficienza / 100);
    return {
      anno: d.anno,
      ricavi,
      costi,
      utile: ricavi - costi
    };
  });
  const ricavoTotaleSimulato = performanceSimulata.reduce((acc, d) => acc + d.ricavi, 0).toFixed(2);
  const ricavoMedioSimulato = (ricavoTotaleSimulato / performanceSimulata.length).toFixed(2);
  useEffect(() => {
    setDatiSimulati(generaDatiSimulati(regioneSelezionata));

    const fetchWeather = async () => {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${regionToCity[regioneSelezionata]}&appid=${API_KEY}&units=metric`);
        setWeather(res.data);
      } catch (err) {
        console.error("Errore nel recupero del meteo:", err);
      }
    };

    fetchWeather();
  }, [regioneSelezionata]);

  const datiFiltrati = datiAgricoli.filter(d => d.regione === regioneSelezionata);
  const efficienzaMedia = (
    datiSimulati.reduce((acc, d) => acc + d.efficienza, 0) / datiSimulati.length
  ).toFixed(1);
  
  return (
    <div className="relative min-h-screen w-full">
      {/* 🧾 Contenuto */}
      <div className="relative z-10 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg m-4">
        <h2 className="text-3xl font-bold mb-8 text-green-800 text-center font-serif">
          🌾 Dashboard Settore Primario
        </h2>

        <div className="mb-4">
          <label className="mr-2 font-semibold">Seleziona Regione:</label>
          <select
            value={regioneSelezionata}
            onChange={(e) => setRegioneSelezionata(e.target.value)}
            className="p-2 border rounded-md"
          >
            {Object.keys(regionToCity).map((reg) => (
              <option key={reg} value={reg}>{reg}</option>
            ))}
          </select>
        </div>

        {weather && (
          <div className="bg-blue-100 p-4 rounded-md shadow mb-6">
            <h3 className="font-semibold text-lg">☁️ Meteo a {weather.name}</h3>
            <p>🌡️ Temperatura: {weather.main.temp}°C</p>
            <p>🌤️ Condizioni: {traduciCondizioneMeteo(weather.weather[0].description)}</p>
            <p>💧 Umidità: {weather.main.humidity}%</p>
          </div>
        )}

        <h3 className="text-lg font-semibold mb-2">📊 Dati Reali: Produzione vs Consumi</h3>
        <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 250 : 300}>
          <LineChart data={datiFiltrati}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="anno" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="produzione" stroke="#10b981" name="Produzione" />
            <Line type="monotone" dataKey="consumi" stroke="#f59e0b" name="Consumi" />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">📊 Performance Finanziaria Reale</h3>
          <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 250 : 300}>
            <BarChart data={datiPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="anno" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ricavi" fill="#ff7043" name="Ricavi (€)" />
              <Bar dataKey="costi" fill="#999999" name="Costi (€)" />
              <Bar dataKey="utile" fill="#58508d" name="Utile (€)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="p-4 rounded-xl border border-green-200 shadow-sm bg-white">
          <h3 className="font-semibold text-lg">🌿 Efficienza Media Stimata</h3>
            <p>Nei prossimi anni simulati ({datiSimulati[0]?.anno} - {datiSimulati[datiSimulati.length-1]?.anno}) l'efficienza media prevista è pari a <strong>{efficienzaMedia}%</strong>.</p>
          </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">🔁 Simulazione: Produzione ed Efficienza</h3>
          <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 250 : 300}>
            <LineChart data={datiSimulati}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="anno" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="produzione" stroke="#10b981" name="Produzione Simulata" />
              <Line type="monotone" dataKey="efficienza" stroke="#3a6f8f" name="Efficienza (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-yellow-100 p-4 rounded-md shadow mb-6">
          <h3 className="font-semibold text-lg">💰 Ricavo Medio Simulato</h3>
          <p>Per il periodo {datiSimulati[0]?.anno} - {datiSimulati[datiSimulati.length-1]?.anno} il ricavo medio previsto risulta pari a <strong>{ricavoMedioSimulato} €</strong>.</p>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">🔮 Performance Finanziaria Simulata</h3>
          <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 250 : 300}>
            <BarChart data={performanceSimulata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="anno" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ricavi" fill="#ff7043" name="Ricavi (€)" />
              <Bar dataKey="costi" fill="#999999" name="Costi (€)" />
              <Bar dataKey="utile" fill="#58508d" name="Utile (€)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
