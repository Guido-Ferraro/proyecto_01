import React from "react";
import {ReactElement as RE} from "react";

interface FundingProp {
	currentFunding: number; 
	requiredFunding: number;
}

const Funding = (prop: FundingProp):RE=> {
	
	const fundingLeft = prop.requiredFunding - prop.currentFunding < 0 ? 0 : prop.requiredFunding - prop.currentFunding;
	
	return(
		<div className="funding">
			<b>${Math.round(fundingLeft*100)/100}</b>&nbsp;still needed for this project
		</div>
	);
};

export default Funding;