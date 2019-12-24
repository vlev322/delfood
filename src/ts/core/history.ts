import { createBrowserHistory } from "history";
import { IEmitter } from "./patterns/_interface";
import { Path, LocationState, LocationDescriptorObject, Location } from "history";

export interface IHistory extends IEmitter<Location> {
	getState(): Location;
	push(path: Path, state?: LocationState): void;
	push(location: LocationDescriptorObject<LocationState>): void;
	replace(path: Path, state?: LocationState): void;
	replace(location: LocationDescriptorObject<LocationState>): void;
	goBack(): void;
}

export const history = createBrowserHistory({
	basename: "", // The base URL of the app (see below)
	forceRefresh: false, // Set true to force full page refreshes
	keyLength: 6 // The length of location.key
});
