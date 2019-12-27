import React, { Component } from "react";

import { Slide } from "./components/slide";
import { Arrow } from "./components/controls/arrow";
import { DIRECTION } from "./components/controls/arrow";

interface IProps {
	images: string[];
}

export class Carousel extends Component<IProps> {
	public state = {
		current: 0
	};

	private _len = this.props.images.length - 1;

	private _next = (): void => {
		const cur = this.state.current;
		const last = cur > this._len - 1;
		this.setState({
			current: last ? 0 : cur + 1
		});
	};

	private _prev = (): void => {
		const cur = this.state.current;
		const first = cur === 0;
		this.setState({
			current: first ? this._len : cur - 1
		});
	};

	public render(): JSX.Element {
		return (
			<div className="slider">
				<Arrow control={DIRECTION.LEFT} onClick={this._prev} />
				<Slide src={this.props.images[this.state.current]} />
				<Arrow control={DIRECTION.RIGTH} onClick={this._next} />
			</div>
		);
	}
}
