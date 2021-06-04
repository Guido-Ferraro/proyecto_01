import React from "react";

interface FundingProp {
	currentFunding: number;
	requiredFunding: number;
}

const ProgressBar: React.FC<FundingProp> = (prop) => {
	return (
		<div>
			{`[progress bar div ${prop.currentFunding}/${prop.requiredFunding}]`}
		</div>
	);
};

export default ProgressBar;