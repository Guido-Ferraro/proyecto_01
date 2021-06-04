import React from "react";

interface CallToActionProp {
	donorCount: number;
}

const CallToAction: React.FC<CallToActionProp> = (prop) => {
	return (
		<div>
			{`Join the ${prop.donorCount} other donors who have already supported this project. Every dollar helps.`}
		</div>
	);
};

export default CallToAction;