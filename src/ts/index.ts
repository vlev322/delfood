import * as View from "./view";
import * as Core from "./core/API";

try {
	Core.launch()

	View.render();
} catch (err) {
	console.error(err.message);
}
