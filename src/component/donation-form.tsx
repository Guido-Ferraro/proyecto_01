import React from "react";

const DonationForm: React.FC = () => {
	return (
		<div>
			<form action="">
				<label htmlFor=""><input type="text" placeholder="50"/>$</label>
				<label htmlFor=""><button type="button">Give Now</button></label>
			</form>
		</div>
	);
};

export default DonationForm;