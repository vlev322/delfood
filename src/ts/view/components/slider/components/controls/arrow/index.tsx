import React from "react";

interface IProps {
	control: DIRECTION;
	onClick: () => void;
}

export enum DIRECTION {
	LEFT,
	RIGTH
}
const DIRECTIONS: {
	[key in DIRECTION]: string;
} = {
	[DIRECTION.LEFT]: "left",
	[DIRECTION.RIGTH]: "rigth"
};

export function Arrow({ control, onClick }: IProps): JSX.Element {
	const direction = DIRECTIONS[control];
	return <div onClick={onClick} className={`arrow arrow-${direction}`}></div>;
}
