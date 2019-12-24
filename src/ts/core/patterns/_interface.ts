export type TListener<State> = (data: State) => void;

export interface IEmitter<StoreState> {
	readonly countListeners: number | undefined;
	subscribe(listener: TListener<StoreState>): () => void;
}

export interface IStore<State> extends IEmitter<State> {
	getState(): State;
	getPrev(): State;
	set(state: State): void;
	reset(): void;
}
