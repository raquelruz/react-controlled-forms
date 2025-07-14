import { useState } from "react";
import "./CharacterCountForm.css";

export const CharacterCountForm = () => {
	const [keyCode, setKeyCode] = useState("");
	const [count, setCount] = useState(0);

	const handleKeyDown = (event) => {
		setKeyCode(event.code);
		setCount((prev) => prev + 1);
	};

	return (
		<div className="charactercount-container">
			<input type="text" onKeyDown={handleKeyDown} placeholder="Escribe algo..." className="key-input" />
			<div className="key-info">
				<p>
					<strong>Última tecla:</strong> {keyCode || "Ninguna"}
				</p>
				<p>
					<strong>Teclas presionadas:</strong> {count}
				</p>
			</div>
		</div>
	);
};
