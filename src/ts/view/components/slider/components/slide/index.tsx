import React from "react";

interface IProps {
	src: string;
}

export function Slide({ src }: IProps) {
	const styles = {
		backgroundImage: `url(${src})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	}
	return <div className="slider-slide" style={styles} />;
}
