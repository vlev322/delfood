import React, { useState } from "react";

import { Slide } from "./components/slide";
import { Arrow } from "./components/controls/arrow";
import { DIRECTION } from "./components/controls/arrow";

interface IProps {
	images: string[];
}

export function Carousel({ images }: IProps): JSX.Element {
	const [current, setCurrent] = useState(0);
	const length = images.length - 1;

	const nextSlide = (): void => {
		current > length - 1 ? setCurrent(0) : setCurrent(current + 1);
	};
	const prevSlide = (): void => {
		setCurrent(current - 1);
	};

	return (
		<div className="carousel">
			{current <= 0 ? "" : <Arrow control={DIRECTION.LEFT} onClick={prevSlide} />}
			<Slide src={images[current]} />
			{current >= length ? "" : <Arrow control={DIRECTION.RIGTH} onClick={nextSlide} />}
		</div>
	);
}
