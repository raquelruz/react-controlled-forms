import { use, useState } from "react";
import "./NameGreetingForm.css";

export const NameGreetingForm = () => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			setMessage(`Hola ${name}`);
		}
	};

	const handleClick = () => {
		setMessage(`Hola ${name}`);
	};

	return (
		<div className="namegreeting-container">
			<input
				type="text"
				placeholder="Escribe tu nombre"
				value={name}
				onChange={(event) => setName(event.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button onClick={handleClick}>Saludar</button>
			{message && <p>{message}</p>}
		</div>
	);
};
