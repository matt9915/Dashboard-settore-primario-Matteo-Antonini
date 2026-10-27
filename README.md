# Dashboard Interattiva – Settore Primario

## Descrizione

Dashboard web interattiva sviluppata con **JavaScript e React** per l'analisi e il monitoraggio delle performance produttive nel settore agricolo.

Il progetto combina dati storici reali relativi alla produzione e ai consumi regionali con dati ambientali simulati, tra cui temperatura, umidità e precipitazioni.

L'applicazione permette inoltre di analizzare indicatori di efficienza e integra informazioni meteorologiche in tempo reale tramite API.

## Funzionalità principali

- Visualizzazione interattiva dei dati agricoli ed economici.
- Analisi dei dati storici di produzione e consumo.
- Filtri per città e periodo temporale.
- Simulazione di parametri ambientali e produttivi.
- Calcolo e visualizzazione di indicatori di efficienza.
- Integrazione di dati meteorologici tramite API esterna.
- Grafici dinamici per facilitare il confronto dei dati.

## Tecnologie utilizzate

- **React** – Sviluppo dell'interfaccia utente.
- **JavaScript** – Logica applicativa ed elaborazione dei dati.
- **Vite** – Ambiente di sviluppo e build.
- **Recharts** – Visualizzazione dei dati tramite grafici.
- **Axios** – Gestione delle richieste HTTP.

## Struttura del progetto

- `src/` – Codice sorgente React e componenti.
- `datiAgricoli.js` – Dati storici agricoli.
- `simulatoreDati.js` – Generazione dei dati simulati.
- `meteoUtils.js` – Gestione e traduzione delle informazioni meteorologiche.
- `Dashboard.js` – Componente principale della dashboard.
- `package.json` – Dipendenze e script del progetto.
- `vite.config.js` / `vite.config.ts` – Configurazione di Vite.

## Installazione e avvio

**Requisiti:** Node.js e npm.

1. Scaricare o clonare il repository.
2. Aprire la cartella del progetto in un editor di codice.
3. Installare le dipendenze:

   `npm install`

4. Avviare il server di sviluppo:

   `npm run dev`

5. Aprire nel browser l'indirizzo locale mostrato nel terminale, generalmente `http://localhost:5173`.

**Nota:** per utilizzare le funzionalità meteorologiche potrebbe essere necessaria la configurazione di una chiave API, secondo le impostazioni del progetto.

## Contesto del progetto

Progetto sviluppato nell'ambito del percorso di laurea triennale in Informatica per le Aziende Digitali (L-31) presso l'Università Telematica Pegaso.

L'obiettivo è applicare tecnologie web moderne all'analisi dei dati, combinando sviluppo front-end, visualizzazione delle informazioni e simulazione di scenari.
