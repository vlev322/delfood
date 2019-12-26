import React, { useState, useEffect } from "react";

import { Slide } from "./components/slide";
import { Arrow } from "./components/controls/arrow";
import { DIRECTION } from "./components/controls/arrow";

interface IProps {
	images: string[];
}

export function Carousel({ images }: IProps): JSX.Element {
	const [current, setCurrent] = useState(0);
	const length = images.length - 1;

	return (
		<div className="slider">
			{current <= 0 ? "" : <Arrow control={DIRECTION.LEFT} onClick={() => setCurrent(current - 1)} />}
			<Slide src={images[current]} />
			{current >= length ? "" : <Arrow control={DIRECTION.RIGTH} onClick={() => setCurrent(current + 1)} />}
		</div>
	);
}
