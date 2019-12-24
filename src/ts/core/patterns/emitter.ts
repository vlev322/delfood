import { TListener, IEmitter } from "./_interface";

export class Emitter<StoreState> implements IEmitter<StoreState> {
	protected _listeners: Set<TListener<StoreState>> = new Set();

	protected emit(state: StoreState): void {
		this._listeners.forEach(
			(listener: TListener<StoreState>): void => {
				listener(state);
			}
		);
	}

	public get countListeners(): number {
		return this._listeners.size;
	}

	public subscribe(listener: TListener<StoreState>): () => void {
		this._listeners.add(listener);
		return this._unsubscribe.bind(this, listener);
	}

	private _unsubscribe(listener: TListener<StoreState>): void {
		this._listeners.delete(listener);
	}
}
export type TEventListener<S> = (state: S) => void;
