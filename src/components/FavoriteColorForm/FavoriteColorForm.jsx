import { useState } from "react";
import "./FavoriteColorForm.css";

export const FavoriteColorForm = () => {
	const [color, setColor] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (color) {
			setMessage(`Tu color favorito es ${color}.`);
		} else {
			setMessage("Por favor, selecciona un color.");
		}
	};

	return (
		<div className="color-form-container">
			<form onSubmit={handleSubmit} className="color-form">
				<label htmlFor="color-select">Elige tu color favorito:</label>
				<select id="color-select" value={color} onChange={(event) => setColor(event.target.value)}>
					<option value="">-- Selecciona un color --</option>
					<option value="Rojo">Rojo</option>
					<option value="Azul">Azul</option>
					<option value="Verde">Verde</option>
					<option value="Amarillo">Amarillo</option>
					<option value="Morado">Morado</option>
					<option value="Naranja">Naranja</option>
					<option value="Negro">Negro</option>
				</select>

				<button type="submit">Enviar</button>

				{message && <p className="message">{message}</p>}
			</form>
		</div>
	);
};
