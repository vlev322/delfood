import { UnregisterCallback, LocationListener, Location } from "history";

import { history, IHistory } from "./history";

import { Observer } from "./patterns/observer";
import { Emitter } from "./patterns/emitter";
import { Store } from "./patterns/store";

export { TListener, IEmitter, IStore } from "./patterns/_interface";

export function launch(): void {
	console.log(`Core was launched`);
}

export const Pattern = {
	Emitter,
	Store,
	Observer
};

export const History: IHistory = {
	countListeners: undefined,
	getState: (): Location => history.location,
	subscribe: (listener: LocationListener): UnregisterCallback => history.listen(listener),
	push: history.push,
	replace: history.replace,
	goBack: history.goBack
};
