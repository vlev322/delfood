import { Component } from "react";
import { IStore } from "./_interface";

export abstract class Observer<Props = {}, State = {}> extends Component<Props, State> {
	public state!: State;
	protected abstract store: IStore<State>;
	private _unsubscribe = () => {};

	public componentWillMount(): void {
		this.setState(this.store.getState());
	}

	public componentDidMount(): void {
		this._unsubscribe = this.store.subscribe((nextState: State) => {
			this.setState(nextState);
		});
	}

	public componentWillUnmount(): void {
		this._unsubscribe();
	}

	public abstract render(): JSX.Element;
}
