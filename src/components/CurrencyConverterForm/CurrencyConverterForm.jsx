import { useState } from "react";
import "./CurrencyConverterForm.css";

export const CurrencyConverterForm = () => {
	const [euros, setEuros] = useState("");
	const [currency, setCurrency] = useState("");
	const [result, setResult] = useState("");

	const rates = {
		USD: 1.1,
		GBP: 0.85,
		JPY: 140,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!euros || !currency) {
			setResult("Completa todos los campos");
			return;
		}
		const converted = (parseFloat(euros) * rates[currency]).toFixed(2);
		setResult(`${euros} euros son ${converted} ${currency}`);
	};

	return (
		<div className="converter">
			<form onSubmit={handleSubmit}>
				<input type="number" placeholder="Euros" value={euros} onChange={(e) => setEuros(e.target.value)} />
				<select value={currency} onChange={(e) => setCurrency(e.target.value)}>
					<option value="">Elige divisa</option>
					<option value="USD">USD</option>
					<option value="GBP">GBP</option>
					<option value="JPY">JPY</option>
				</select>
				<button type="submit">Convertir</button>
			</form>
			{result && <p>{result}</p>}
		</div>
	);
};
