import { Emitter } from "./emitter";

import { IStore } from "./_interface";

export class Store<State> extends Emitter<State> implements IStore<State> {
	protected initialState!: State;
	protected _state!: State;
	private _prev!: State;

	constructor(initialState?: State) {
		super();
		if (typeof initialState === "undefined") return;
		this.initialState = initialState;
	}

	public getState(): State {
		return this._state || this.initialState;
	}

	public getPrev(): State {
		return this._prev;
	}

	public set(state: State): void {
		this._state = { ...state };
		this.emit(state);
	}

	public reset(): void {
		this._state = { ...this.initialState };
		this.emit({ ...this.initialState });
	}
}
