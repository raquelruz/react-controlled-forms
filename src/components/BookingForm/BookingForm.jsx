import { useState } from "react";
import "./BookingForm.css";

export const BookingForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [result, setResult] = useState(null);
	const [error, setError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!name || !email || !date) {
			setError("Completa todos los campos");
			setResult(null);
			return;
		}
		setError("");
		setResult({ name, email, date });
	};

	return (
		<div className="booking-container">
			<form onSubmit={handleSubmit} className="booking-form">
				<input
					type="text"
					placeholder="Nombre"
					value={name}
					onChange={(event) => setName(event.target.value)}
					className="booking-input"
				/>
				<input
					type="email"
					placeholder="Correo"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					className="booking-input"
				/>
				<input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="booking-input" />
				<button type="submit" className="booking-button">
					Reservar
				</button>
			</form>

			{error && <p className="booking-error">{error}</p>}

			{result && (
				<div className="booking-result">
					<p>Nombre: {result.name}</p>
					<p>Correo: {result.email}</p>
					<p>Fecha: {result.date}</p>
				</div>
			)}
		</div>
	);
};
