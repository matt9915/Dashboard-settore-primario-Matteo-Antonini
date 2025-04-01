const datiAgricoli = [
   // Abruzzo
    { anno: 2019, regione: "Abruzzo", produzione: 2100000, consumi: 950000 },
    { anno: 2020, regione: "Abruzzo", produzione: 2050000, consumi: 920000 },
    { anno: 2021, regione: "Abruzzo", produzione: 2150000, consumi: 970000 },
    { anno: 2022, regione: "Abruzzo", produzione: 2200000, consumi: 990000 },

    // Basilicata
    { anno: 2019, regione: "Basilicata", produzione: 1400000, consumi: 650000 },
    { anno: 2020, regione: "Basilicata", produzione: 1380000, consumi: 630000 },
    { anno: 2021, regione: "Basilicata", produzione: 1450000, consumi: 670000 },
    { anno: 2022, regione: "Basilicata", produzione: 1500000, consumi: 690000 },

    // Calabria
    { anno: 2019, regione: "Calabria", produzione: 3100000, consumi: 1300000 },
    { anno: 2020, regione: "Calabria", produzione: 3050000, consumi: 1250000 },
    { anno: 2021, regione: "Calabria", produzione: 3200000, consumi: 1320000 },
    { anno: 2022, regione: "Calabria", produzione: 3300000, consumi: 1350000 },

    // Campania
    { anno: 2019, regione: "Campania", produzione: 6200000, consumi: 2900000 },
    { anno: 2020, regione: "Campania", produzione: 6000000, consumi: 2800000 },
    { anno: 2021, regione: "Campania", produzione: 6300000, consumi: 2950000 },
    { anno: 2022, regione: "Campania", produzione: 6450000, consumi: 3000000 },

    // Emilia-Romagna
    { anno: 2019, regione: "EmiliaRomagna", produzione: 8900000, consumi: 4300000 },
    { anno: 2020, regione: "EmiliaRomagna", produzione: 8750000, consumi: 4200000 },
    { anno: 2021, regione: "EmiliaRomagna", produzione: 9000000, consumi: 4400000 },
    { anno: 2022, regione: "EmiliaRomagna", produzione: 9200000, consumi: 4500000 },

    // Friuli Venezia Giulia
    { anno: 2019, regione: "FriuliVeneziaGiulia", produzione: 2400000, consumi: 1150000 },
    { anno: 2020, regione: "FriuliVeneziaGiulia", produzione: 2350000, consumi: 1100000 },
    { anno: 2021, regione: "FriuliVeneziaGiulia", produzione: 2450000, consumi: 1180000 },
    { anno: 2022, regione: "FriuliVeneziaGiulia", produzione: 2500000, consumi: 1200000 },

    // Lazio
    { anno: 2019, regione: "Lazio", produzione: 4023939, consumi: 1865856 },
    { anno: 2020, regione: "Lazio", produzione: 3950000, consumi: 1800000 },
    { anno: 2021, regione: "Lazio", produzione: 4100000, consumi: 1900000 },
    { anno: 2022, regione: "Lazio", produzione: 4200000, consumi: 1950000 },

    // Liguria
    { anno: 2019, regione: "Liguria", produzione: 1200000, consumi: 600000 },
    { anno: 2020, regione: "Liguria", produzione: 1150000, consumi: 580000 },
    { anno: 2021, regione: "Liguria", produzione: 1220000, consumi: 610000 },
    { anno: 2022, regione: "Liguria", produzione: 1250000, consumi: 620000 },

    // Lombardia
    { anno: 2019, regione: "Lombardia", produzione: 10328567, consumi: 6147838 },
    { anno: 2020, regione: "Lombardia", produzione: 10100000, consumi: 6000000 },
    { anno: 2021, regione: "Lombardia", produzione: 10500000, consumi: 6200000 },
    { anno: 2022, regione: "Lombardia", produzione: 10700000, consumi: 6300000 },

    // Marche
    { anno: 2019, regione: "Marche", produzione: 2100000, consumi: 950000 },
    { anno: 2020, regione: "Marche", produzione: 2080000, consumi: 930000 },
    { anno: 2021, regione: "Marche", produzione: 2150000, consumi: 970000 },
    { anno: 2022, regione: "Marche", produzione: 2200000, consumi: 990000 },

    // Molise
    { anno: 2019, regione: "Molise", produzione: 950000, consumi: 420000 },
    { anno: 2020, regione: "Molise", produzione: 930000, consumi: 410000 },
    { anno: 2021, regione: "Molise", produzione: 970000, consumi: 430000 },
    { anno: 2022, regione: "Molise", produzione: 990000, consumi: 440000 },

    // Piemonte
    { anno: 2019, regione: "Piemonte", produzione: 7000000, consumi: 3300000 },
    { anno: 2020, regione: "Piemonte", produzione: 6850000, consumi: 3200000 },
    { anno: 2021, regione: "Piemonte", produzione: 7100000, consumi: 3350000 },
    { anno: 2022, regione: "Piemonte", produzione: 7250000, consumi: 3400000 },

    // Puglia
    { anno: 2019, regione: "Puglia", produzione: 6300000, consumi: 2800000 },
    { anno: 2020, regione: "Puglia", produzione: 6150000, consumi: 2700000 },
    { anno: 2021, regione: "Puglia", produzione: 6400000, consumi: 2850000 },
    { anno: 2022, regione: "Puglia", produzione: 6600000, consumi: 2950000 },

    // Sardegna
    { anno: 2019, regione: "Sardegna", produzione: 2700000, consumi: 1200000 },
    { anno: 2020, regione: "Sardegna", produzione: 2650000, consumi: 1180000 },
    { anno: 2021, regione: "Sardegna", produzione: 2750000, consumi: 1230000 },
    { anno: 2022, regione: "Sardegna", produzione: 2800000, consumi: 1250000 },

    // Sicilia
    { anno: 2019, regione: "Sicilia", produzione: 5400000, consumi: 2500000 },
    { anno: 2020, regione: "Sicilia", produzione: 5300000, consumi: 2450000 },
    { anno: 2021, regione: "Sicilia", produzione: 5500000, consumi: 2550000 },
    { anno: 2022, regione: "Sicilia", produzione: 5600000, consumi: 2600000 },

    // Toscana
    { anno: 2019, regione: "Toscana", produzione: 4200000, consumi: 1900000 },
    { anno: 2020, regione: "Toscana", produzione: 4100000, consumi: 1850000 },
    { anno: 2021, regione: "Toscana", produzione: 4300000, consumi: 1950000 },
    { anno: 2022, regione: "Toscana", produzione: 4400000, consumi: 2000000 },

    // Trentino-Alto Adige
    { anno: 2019, regione: "TrentinoAltoAdige", produzione: 1800000, consumi: 800000 },
    { anno: 2020, regione: "TrentinoAltoAdige", produzione: 1750000, consumi: 780000 },
    { anno: 2021, regione: "TrentinoAltoAdige", produzione: 1850000, consumi: 820000 },
    { anno: 2022, regione: "TrentinoAltoAdige", produzione: 1900000, consumi: 840000 },

    // Umbria
    { anno: 2019, regione: "Umbria", produzione: 1600000, consumi: 750000 },
    { anno: 2020, regione: "Umbria", produzione: 1550000, consumi: 730000 },
    { anno: 2021, regione: "Umbria", produzione: 1650000, consumi: 770000 },
    { anno: 2022, regione: "Umbria", produzione: 1700000, consumi: 790000 },

    // Valle d'Aosta
    { anno: 2019, regione: "ValleDAosta", produzione: 400000, consumi: 180000 },
    { anno: 2020, regione: "ValleDAosta", produzione: 390000, consumi: 175000 },
    { anno: 2021, regione: "ValleDAosta", produzione: 410000, consumi: 185000 },
    { anno: 2022, regione: "ValleDAosta", produzione: 420000, consumi: 190000 },

    // Veneto
    { anno: 2019, regione: "Veneto", produzione: 8200000, consumi: 4100000 },
    { anno: 2020, regione: "Veneto", produzione: 8100000, consumi: 4000000 },
    { anno: 2021, regione: "Veneto", produzione: 8300000, consumi: 4200000 },
    { anno: 2022, regione: "Veneto", produzione: 8500000, consumi: 4300000 },
  ];

  export default datiAgricoli;