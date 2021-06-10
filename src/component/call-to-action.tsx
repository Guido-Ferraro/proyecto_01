import React from "react";

interface CallToActionProp {
	donorCount: number;
}

const CallToAction = (prop: CallToActionProp):React.ReactElement => {

	return (
		<p className="call-to-action">Join the <b>{prop.donorCount}</b> other donors who have already supported this project. Every dollar helps.
		</p>
	);
	
};

export default CallToAction;