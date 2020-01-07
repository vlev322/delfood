enum DAYS {
	SUN = "sunday",
	MON = "monday",
	TUE = "tuesday",
	WED = "wednesday",
	THU = "thursday",
	FRI = "friday",
	SAT = "saturday"
}

export const getDays = () => {
	let days: string[] = [];
	for (const day in DAYS) {
		// days.push(DAYS[day])
	}
	return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	return days;
};

// let days = getDays();
