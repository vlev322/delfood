import React from "react";

interface IProps {
	src: string;
}

export function Slide({ src }: IProps) {
	return <img className="slider-slide" src={src} />;
}
