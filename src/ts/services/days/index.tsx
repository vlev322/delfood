type days = {
	[index: string]: string;
};

const DAYS: days = {
	SUN: "sunday",
	MON: "monday",
	TUE: "tuesday",
	WED: "wednesday",
	THU: "thursday",
	FRI: "friday",
	SAT: "saturday"
};

export const getDays = () => {
	let days = [];
	for (const day in DAYS) {
		days.push(DAYS[day]);
	}
	return days;
};
