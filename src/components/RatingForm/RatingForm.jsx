import { useState } from "react";
import "./RatingForm.css";

export const RatingForm = () => {
	const [rating, setRating] = useState(null);

	return (
		<div className="rating-container">
			<h2>Puntúa el producto</h2>
			<div className="buttons-container">
				{[1, 2, 3, 4, 5].map((num) => (
					<button
						key={num}
						className={`rating-btn ${rating === num ? "selected" : ""}`}
						onClick={() => setRating(num)}
					>
						{num}
					</button>
				))}
			</div>
			{rating && <p className="selected-rating">Has seleccionado: {rating}</p>}
		</div>
	);
};
