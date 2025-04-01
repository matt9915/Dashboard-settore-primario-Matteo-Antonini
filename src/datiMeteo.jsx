export const traduciCondizioneMeteo = (descrizione) => {
  const traduzioni = {
    "clear sky": "cielo sereno",
    "few clouds": "poche nuvole",
    "scattered clouds": "nuvole sparse",
    "broken clouds": "nuvoloso",
    "shower rain": "pioggia intermittente",
    "rain": "pioggia",
    "thunderstorm": "temporale",
    "snow": "neve",
    "mist": "foschia",
    "overcast clouds": "cielo coperto",
    "light rain": "pioggia leggera",
    "drizzle": "pioggia leggera!",
    "light snow": "neve leggera",
    "light intensity drizzle": "pioggia leggera",
    "moderate rain": "pioggia moderata"
  };

  return traduzioni[descrizione] || descrizione;
};