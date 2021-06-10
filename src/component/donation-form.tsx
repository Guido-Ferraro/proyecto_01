import React from "react";

interface DonationFormProp {
	handleSubmit: (donation: number) => void;
	isDisabled: boolean;
}

const DonationForm = (prop:DonationFormProp):React.ReactElement => {
	
	const [donation, setDonation] = React.useState(50);
	
	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const newValue: number = parseFloat(e.target.value);
		return(
			newValue > 0 ? setDonation(Math.round(newValue*100)/100) : setDonation(1)
		);
	};

	const handleClick = () => {
		prop.handleSubmit(donation);
	};

	return (
		<form action="" className="donation-form">
			<label htmlFor="donationInput" className="donation-label">
				<b>$</b><input 
					type="number" 
					value={`${donation}`} 
					id="donationInput" 
					onChange={handleChange}
					min="1" 
					step="0.01"
				/>
			</label>
			<button 
				type="button" 
				onClick={handleClick}
				id="giveNowButton"
				disabled={prop.isDisabled}
				className = "donation-button"
			><b>Give Now</b>
			</button>
		</form>
	);
};

export default DonationForm;