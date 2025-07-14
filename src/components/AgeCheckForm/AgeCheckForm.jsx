import { useState } from "react";
import "./AgeCheckForm.css";

export const AgeCheckForm = () => {
	const [age, setAge] = useState("");
	const [result, setResult] = useState("");

	const handleCheck = () => {
		const num = parseInt(age, 10);

		setResult(num >= 18 ? "✅ Eres mayor de edad." : "🔸 Eres menor de edad.");
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleCheck();
		}
	};

	return (
		<div className="age-container">
			<h2>Comprobador de Edad</h2>
			<input
				type="number"
				placeholder="Introduce tu edad"
				value={age}
				onChange={(event) => setAge(event.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button onClick={handleCheck}>Comprobar</button>
			{result && <p className="age-result">{result}</p>}
		</div>
	);
};
