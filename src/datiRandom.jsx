const randomRange = (min, max) => {
	return +(Math.random() * (max - min) + min).toFixed(1);
};

const calcolaEfficienza = (temp, umidita, pioggia) => {
	let score = 1;
	if (temp < 20 || temp > 28) score -= 0.15;
	if (umidita < 40 || umidita > 70) score -= 0.1;
	if (pioggia < 80 || pioggia > 130) score -= 0.2;
	return Math.max(score, 0.5);
};

const generaDatiSimulati = (regione, anni = [2023, 2024, 2025]) => {
	const fattoreRegione = {
		Abruzzo: 1.0,
			Basilicata: 1.0,
			Calabria: 1.05,
			Campania: 1.15,
			EmiliaRomagna: 1.3,
			FriuliVeneziaGiulia: 1.1,
			Lazio: 1.1,
			Liguria: 0.9,
			Lombardia: 1.3,
			Marche: 1.0,
			Molise: 0.8,
			Piemonte: 1.2,
			Puglia: 1.15,
			Sardegna: 1.0,
			Sicilia: 1.1,
			Toscana: 1.1,
			TrentinoAltoAdige: 1.0,
			Umbria: 0.95,
			ValleDAosta: 0.7,
			Veneto: 1.2
	};

	const fattore = fattoreRegione[regione] || 1;

	return anni.map((anno) => {
		const temperatura = randomRange(15, 35);
		const umidita = randomRange(30, 85);
		const precipitazioni = randomRange(50, 180);
		const efficienza = calcolaEfficienza(temperatura, umidita, precipitazioni);
		const produzioneBase = randomRange(3000, 9000) * fattore;
		const produzione = Math.round(produzioneBase * efficienza);

		return {
			anno,
			regione,
			temperatura,
			umidita,
			precipitazioni,
			produzione,
			efficienza: +(efficienza * 100).toFixed(0)
		};
	});
};

export default generaDatiSimulati;