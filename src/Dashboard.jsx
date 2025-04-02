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

  return (
    <div className="p-6">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-5xl mx-auto space-y-6">

        
        <div className="w-full h-[150px] overflow-hidden rounded-xl mb-4">
          <img src="/immagine-agricoltura.jpg" alt="header" className="w-full h-full object-cover" />
        </div>
    
      
        <h1 className="text-4xl font-bold mb-4 text-green-800 text-center font-serif border-b pb-2 transition-opacity duration-1000 opacity-0 animate-fade-in">🌾 Dashboard Settore Primario</h1>

        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
          <label className="font-semibold mb-2 md:mb-0">Seleziona Regione:</label>
          <select value={regioneSelezionata} onChange={(e) => setRegioneSelezionata(e.target.value)} className="p-2 border rounded-md w-full md:w-auto">
            {Object.keys(regionToCity).map((reg) => (
              <option key={reg} value={reg}>{reg}</option>
            ))}
          </select>
        </div>

        {weather && (
          <div className="bg-blue-50 p-4 rounded-xl shadow border border-green-200">
            <h3 className="font-semibold text-lg">☁️ Meteo - {weather.name}</h3>
            <p>🌡️ Temperatura: {weather.main.temp}°C</p>
            <p>🌤️ Condizioni: {traduciCondizioneMeteo(weather.weather[0].description)}</p>
            <p>💨 Umidità: {weather.main.humidity}%</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border border-green-200 shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1 text-[#6B8E23]">📊 Produzione vs Consumi (Dati Reali)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={datiFiltrati}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="anno" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="produzione" stroke="#6B8E23" name="Produzione" />
                <Line type="monotone" dataKey="consumi" stroke="#8B4513" name="Consumi" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 rounded-xl border border-green-200 shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1 text-[#6B8E23]">📊 Performance Finanziaria Reale</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={datiPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="anno" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ricavi" fill="#6B8E23" name="Ricavi (€)" />
                <Bar dataKey="costi" fill="#8B4513" name="Costi (€)" />
                <Bar dataKey="utile" fill="#FFD700" name="Utile (€)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 rounded-xl border border-green-200 shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1 text-[#6B8E23]">🔁 Simulazione: Produzione ed Efficienza</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={datiSimulati}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="anno" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="produzione" stroke="#9ACD32" name="Produzione Simulata" />
                <Line type="monotone" dataKey="efficienza" stroke="#FFD700" name="Efficienza (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 rounded-xl border border-green-200 shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1 text-[#6B8E23]">🔮 Performance Finanziaria Simulata</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceSimulata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="anno" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ricavi" fill="#6B8E23" name="Ricavi (€)" />
                <Bar dataKey="costi" fill="#8B4513" name="Costi (€)" />
                <Bar dataKey="utile" fill="#FFD700" name="Utile (€)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;