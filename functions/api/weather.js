
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const city = url.searchParams.get("city");

  if (!city || city.length > 100) {
    return Response.json(
      { error: "Città non valida" },
      { status: 400 }
    );
  }

  const apiKey = context.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Servizio meteo non configurato" },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    q: city,
    appid: apiKey,
    units: "metric"
  });

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${params}`
    );

    if (!response.ok) {
      return Response.json(
        { error: "Impossibile recuperare il meteo" },
        { status: 502 }
      );
    }

    return Response.json(await response.json(), {
      headers: {
        "Cache-Control": "public, max-age=600"
      }
    });
  } catch (error) {
    return Response.json(
      { error: "Servizio meteo temporaneamente non disponibile" },
      { status: 502 }
    );
  }
}
