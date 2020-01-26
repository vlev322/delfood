import React from "react";

import { Carousel } from "../slider/index";

import img_1 from "../../../../style/img/backgrounds/chinese.jpg";
import img_3 from "../../../../style/img/backgrounds/cuisines.jpg";
import img_2 from "../../../../style/img/backgrounds/greek.jpg";
import img_4 from "../../../../style/img/backgrounds/italian.jpg";
import img_5 from "../../../../style/img/backgrounds/ukrainian.jpg";
import img_6 from "../../../../style/img/about/breackfast.jpg";
import img_7 from "../../../../style/img/about/brunch.jpg";
import img_8 from "../../../../style/img/about/lunch.jpg";

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];

export const Gallery = () => {
	return (
		<div className="slider-img">
			<Carousel images={images} />
		</div>
	);
};
