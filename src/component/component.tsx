import React from "react";
import CallToAction from "./call-to-action";
import DaysLeft from "./days-left";
import DonationInfo from "./donation-info";
import DonationForm from "./donation-form";
import Funding from "./funding";
import ProgressBar from "./progress-bar";
import SaveForLater from "./save-for-later";
import TellYourFriends from "./tell-your-friends";

//cambiar data por json para simular tiempo de respuesta de api
import data from "./data.json";
//setTimeout(() => {const data = json}, 3000);

const Component: React.FC = () => {
	return (
		<div>
			<Funding 
				currentFunding = {data.funding.current} 
				requiredFunding = {data.funding.required} 
			/>
			<ProgressBar
				currentFunding = {data.funding.current}
				requiredFunding = {data.funding.required}/>
			<DaysLeft
				currentDay = {data.day.current}
				lastDay = {data.day.last} 
			/>
			<CallToAction
				donorCount = {data.donorCount}
			/>
			<DonationForm />
			<DonationInfo />
			<SaveForLater />
			<TellYourFriends />
		</div>
	);
};

export default Component;