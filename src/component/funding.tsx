import React, { ReactElement } from "react";

interface FundingProp {
	currentFunding: number;
	requiredFunding: number;
}

/*const Funding: React.FC<FundingProp> = (prop) => {
	return (
		<div>
			{`$${prop.requiredFunding - prop.currentFunding} still needed for this project`}
		</div>
	);
};*/

const Funding = (prop: FundingProp) => {
	return(
		<div>
			{`$${prop.requiredFunding - prop.currentFunding} still needed for this project`}
		</div>
	);
};


export default Funding;