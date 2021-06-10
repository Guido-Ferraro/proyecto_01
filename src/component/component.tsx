import React, {useState} from "react";
import CallToAction from "./call-to-action";
import DaysLeft from "./days-left";
import DonationInfo from "./donation-info";
import DonationForm from "./donation-form";
import Funding from "./funding";
import ProgressBar from "./progress-bar";
import SaveForLater from "./save-for-later";
import TellYourFriends from "./tell-your-friends";
import data from "./data.json";
import "./../scss/main.css";

const lag2 = new Promise((resolve) => {
	setTimeout(() => {
		console.log("3s lag");
		resolve("");
	}, 3000);
});

Promise.all([lag2]).then(() => console.log("state recieved loaded"));

const Component = ():React.ReactElement => { 	
	const {funding, day, donors} = data;
	const {met, required} = funding;
	const {current, last} = day;
	
	const [currentFunding, setCurrentFunding] = useState(met);
	const [requiredFunding] = useState(required);
	const [currentDay] = useState(current);
	const [lastDay] = useState(last);
	const [donorCount, setDonorCount] = useState(donors);
	const [isDisabled, setIsDisabled] = useState(false);
	
	const handleSubmit = (donation: number) => {
		return(
			setIsDisabled(true),
			setCurrentFunding(currentFunding + donation),
			setDonorCount(donorCount + 1),
			
			setTimeout(() => {
				console.log("1s lag"),
				console.log("state update sent"),
				setIsDisabled(false);
			}, 1000)
		);
	};
	const progressValue = (Math.round(currentFunding*100)/requiredFunding > 100 ? 100: Math.round(currentFunding*100)/requiredFunding) + "%";

	const progressVar = 
		{"--progress": progressValue} as React.CSSProperties
	;
	return (
		<div 
			className="container"
			style = {progressVar}
		>
			<Funding 
				currentFunding = {currentFunding} 
				requiredFunding = {requiredFunding} 
			/>
			<ProgressBar/>
			<div className="wrapper">
				<DaysLeft
					currentDay = {currentDay}
					lastDay = {lastDay} 
				/>
				<CallToAction
					donorCount = {donorCount}
				/>
				<DonationForm 
					handleSubmit = {handleSubmit}
					isDisabled={isDisabled}
				/>
				<DonationInfo />
			</div>
			<div className="bottom">
				<SaveForLater />
				<TellYourFriends />
			</div>
		</div>
	);
};

export default Component;