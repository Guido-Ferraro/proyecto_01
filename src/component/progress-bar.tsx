import React from "react";

interface FundingProp {
	currentFunding: number;
	requiredFunding: number;
}

const ProgressBar = (): React.ReactElement => {

	return (
		<div className="progress-bar"></div>
	);
};

export default ProgressBar;