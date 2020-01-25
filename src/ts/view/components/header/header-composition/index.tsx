import React from "react";

import { Carousel } from "../../slider";
import { Context } from "../../navigation/context";

import img_1 from "../../../../../style/img/slider/1.jpg";
import img_2 from "../../../../../style/img/slider/2.jpg";
import img_3 from "../../../../../style/img/slider/3.jpg";
import img_4 from "../../../../../style/img/slider/4.jpg";
import img_5 from "../../../../../style/img/slider/5.jpg";
import img_6 from "../../../../../style/img/slider/6.jpg";
import { Welcome } from "./welcome-composition";
import { Navigation } from "../../navigation/nav-composition";

const images = [img_1, img_2, img_3, img_4, img_5, img_6];

// const images = [
// 	"./style/img/1.jpg",
// 	"./style/img/2.jpg",
// 	"./style/img/3.jpg"
// 	"./style/img/4.jpg",
// 	"./style/img/5.jpg",
// 	"./style/img/6.jpg"
// ];

export function HeaderComposition(): JSX.Element {
	return (
		<header>
			<Carousel images={images} />
			<Welcome />
			<Navigation context={Context} />
		</header>
	);
}
