import "./ContactForm.css";

export const ContactForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		alert("Formulario enviado con éxito");
	};

	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<h2>Contacto</h2>

			<label htmlFor="name">Nombre</label>
			<input type="text" name="name" id="name" required />

			<label htmlFor="name">Email</label>
			<input type="email" name="email" required />

			<label htmlFor="reason">Motivo de contacto:</label>
			<input type="text" name="reason" id="reason" required />

			<label htmlFor="mesagge">Mensaje</label>
			<textarea name="message" id="message" rows="5" required></textarea>

			<button type="submit">Enviar</button>
		</form>
	);
};
