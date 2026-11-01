# 🌱 Dashboard Interattiva – Settore Primario

**Dashboard web per l'analisi e la visualizzazione dei dati del settore agricolo italiano.**

![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)

### 🌐 Demo online

**[Visualizza la dashboard funzionante](https://dashboard-settore-primario-matteo-antonini.pages.dev)**

## 📋 Descrizione del progetto

Dashboard interattiva sviluppata con **React e JavaScript** per analizzare e monitorare le performance produttive del settore primario italiano.

Il progetto integra dati storici reali relativi alla produzione e ai consumi regionali con dati ambientali simulati, consentendo di esplorare indicatori produttivi ed economici attraverso un'interfaccia dinamica.

L'applicazione integra inoltre dati meteorologici in tempo reale tramite OpenWeatherMap.

L'obiettivo è rendere i dati agricoli più accessibili e comprensibili attraverso strumenti di visualizzazione, filtri interattivi e simulazioni.

## ⚙️ Funzionalità principali

- **Analisi dei dati agricoli:** visualizzazione dei dati storici di produzione e consumo.
- **Filtri interattivi:** selezione dell'area geografica e del periodo di riferimento.
- **Simulazione ambientale:** generazione di parametri simulati come temperatura, umidità e precipitazioni.
- **Indicatori di efficienza:** elaborazione e rappresentazione di KPI produttivi.
- **Grafici dinamici:** visualizzazione e confronto delle informazioni attraverso Recharts.
- **Meteo in tempo reale:** integrazione con OpenWeatherMap per recuperare le condizioni meteorologiche delle località selezionate.

## 🛠️ Tecnologie utilizzate

| Tecnologia | Utilizzo |
|---|---|
| React | Interfaccia utente e componenti |
| JavaScript | Logica applicativa e gestione dati |
| Vite | Ambiente di sviluppo e compilazione |
| Recharts | Grafici e visualizzazione dati |
| Axios | Richieste HTTP |
| OpenWeatherMap API | Dati meteorologici in tempo reale |
| Cloudflare Pages | Hosting e deployment |
| Cloudflare Pages Functions | Gestione delle richieste meteo lato server |
| Git e GitHub | Versionamento e repository del codice |

## 🏗️ Architettura del progetto

L'applicazione utilizza React per la gestione dell'interfaccia, dei filtri e della visualizzazione dei dati.

I dati agricoli e quelli simulati vengono elaborati dalla logica JavaScript e rappresentati attraverso componenti grafici.

Per il servizio meteorologico viene utilizzata un'architettura con funzione serverless:

**React → Cloudflare Pages Function → OpenWeatherMap API**

La funzione serverless riceve la città selezionata, interroga OpenWeatherMap e restituisce i dati meteorologici alla dashboard.

La chiave API viene conservata come segreto nell'ambiente Cloudflare, evitando di inserirla nel codice pubblico dell'applicazione.

## 📁 Struttura del progetto

- `src/` – Codice sorgente React e componenti.
- `datiAgricoli.js` – Gestione dei dati storici agricoli.
- `simulatoreDati.js` – Generazione dei dati simulati.
- `meteoUtils.js` – Elaborazione delle informazioni meteorologiche.
- `Dashboard.jsx` – Componente principale della dashboard.
- `functions/api/weather.js` – Funzione serverless per il recupero del meteo.
- `package.json` – Dipendenze e script.
- `vite.config.js` – Configurazione Vite.

## 💻 Installazione e avvio

**Requisiti:** Node.js e npm.

1. Clonare il repository:

   `git clone https://github.com/matt9915/Dashboard-settore-primario-Matteo-Antonini.git`

2. Entrare nella cartella del progetto:

   `cd Dashboard-settore-primario-Matteo-Antonini`

3. Installare le dipendenze:

   `npm install`

4. Avviare il server di sviluppo React:

   `npm run dev`

5. Aprire l'indirizzo mostrato nel terminale, generalmente `http://localhost:5173`.

**Nota:** il server Vite avvia l'interfaccia React, ma non esegue autonomamente le Cloudflare Pages Functions. Per utilizzare il meteo in locale è necessario configurare un ambiente compatibile con le funzioni Cloudflare e il segreto `OPENWEATHER_API_KEY`.

## 🎓 Contesto del progetto

Progetto sviluppato nell'ambito del percorso di **Laurea Triennale in Informatica per le Aziende Digitali (L-31)** presso l'Università Telematica Pegaso.

Il progetto ha permesso di applicare conoscenze relative a:

- Sviluppo front-end con React e JavaScript.
- Gestione e visualizzazione dei dati.
- Integrazione di API REST.
- Organizzazione del codice in componenti e moduli.
- Versionamento con Git e GitHub.
- Deployment cloud e gestione delle credenziali tramite funzioni serverless.

## 🚀 Possibili sviluppi futuri

- Ampliamento dei dataset agricoli.
- Introduzione di ulteriori indicatori statistici.
- Esportazione dei risultati in CSV o PDF.
- Miglioramento della visualizzazione su dispositivi mobili.
- Implementazione di nuovi strumenti di confronto tra regioni.

---

**Sviluppato da Matteo Antonini**

Progetto universitario e portfolio personale di sviluppo web.
