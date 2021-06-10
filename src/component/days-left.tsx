import React from "react";

interface DaysLeftProp {
	currentDay: number;
	lastDay: number;
}

const DaysLeft = (prop: DaysLeftProp):React.ReactElement => {

	return (
		<p className="days-left">
			<b>{`Only ${prop.lastDay - prop.currentDay} days left`}</b> to fund this project.
		</p>
	);
};

export default DaysLeft;