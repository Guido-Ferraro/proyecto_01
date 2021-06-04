import React from "react";

interface DaysLeftProp {
	currentDay: number,
	lastDay: number
}

const DaysLeft: React.FC<DaysLeftProp> = (prop) => {
	return (
		<div>
			{`Only ${prop.lastDay - prop.currentDay} days left to fund this project.`}
		</div>
	);
};

export default DaysLeft;