import { useState } from "react";
import "./FeedbackForm.css";

export const FeedbackForm = () => {
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");
	const [showSummary, setShowSummary] = useState(false);
	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.trim() && comment.trim()) {
			setShowSummary(true);
		}
	};

	const handleConfirm = () => {
		setShowSummary(false);
		setSent(true);
	};

	const handleEdit = () => {
		setShowSummary(false);
	};

	return (
		<div className="feedback-container">
			{!sent && !showSummary && (
				<form onSubmit={handleSubmit} className="feedback-form">
					<h2>Deja tu comentario</h2>

					<label htmlFor="name">Nombre:</label>
					<input
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Tu nombre"
						required
					/>

					<label htmlFor="comment">Comentario:</label>
					<textarea
						id="comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						placeholder="Escribe tu comentario"
						rows="5"
						required
					></textarea>

					<button type="submit">Enviar</button>
				</form>
			)}

			{showSummary && (
				<div className="summary-box">
					<h3>Resumen de tu comentario:</h3>
					<p>
						<strong>Nombre:</strong> {name}
					</p>
					<p>
						<strong>Comentario:</strong> {comment}
					</p>
					<div className="buttons">
						<button onClick={handleConfirm} className="confirm-btn">
							Confirmar envío
						</button>
						<button onClick={handleEdit} className="edit-btn">
							Editar
						</button>
					</div>
				</div>
			)}

			{sent && (
				<div className="success-message">
					<h3>¡Gracias por tu comentario!</h3>
					<p>Tu mensaje ha sido enviado correctamente.</p>
				</div>
			)}
		</div>
	);
};
