import { useState } from "react";
import "./LoginForm.css";

const usersData = [
	{ username: "raquel", email: "raquel@gmail.com", password: "1234" },
	{ username: "pepe", email: "pepe@gmail.com", password: "abcd" },
	{ username: "agustin", email: "agus@gmail.com", password: "pass123" },
];

export const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(null);

	const handleLogin = (event) => {
		event.preventDefault();

		const userFound = usersData.find(
			(user) => user.username === username && user.email === email && user.password === password
		);

		if (userFound) {
			setMessage({ type: "succes", text: `Bienvenido ${username}` });
		} else {
			setMessage({ type: "error", text: "Usuario, email o contraseña incorrectos" });
		}
	};

	return (
		<div className="login-container">
			<form onSubmit={handleLogin} className="login-form">
				<h2>Iniciar sesión</h2>

				<label htmlFor="username">Usuario:</label>
				<input
					id="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Escribe tu usuario"
					required
				/>

				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Escribe tu email"
					required
				/>

				<label htmlFor="password">Contraseña:</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Escribe tu contraseña"
					required
				/>

				<button type="submit">Entrar</button>

				{message && <p className={`message ${message.type}`}>{message.text}</p>}
			</form>
		</div>
	);
};
