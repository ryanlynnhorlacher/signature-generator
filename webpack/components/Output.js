import React from 'react';

const Output = (props) => {
	console.log(props)
	return(
		<div className='col-md-6'>
			{props.company.name}
			<hr/>
			{props.company.frontDeskPhone}
			<hr/>
			{props.company.imageLink}
			<hr/>
			{props.userInput.name}
			<hr/>
			{props.userInput.title}
			<hr/>
			{props.userInput.phone}
			<hr/>
			{props.userInput.email}
		</div>
	)
}

export default Output