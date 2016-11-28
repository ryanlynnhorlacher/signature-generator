import React from 'react';

const Output = (props) => {
	return(
		<div className='col-md-6' style={Styles.border}>
			<div style={Styles.wrapper} >
				<div style={Styles.name}>
					{props.userInput.name}
				</div>
				<div>
					{props.userInput.title}
				</div>
			</div>
			<div>
				{props.userInput.phone ? `D: ${props.userInput.phone}` : null}
				{props.userInput.phone && props.userInput.checkbox ? ' | ' : null}
				{props.userInput.checkbox ? `O: ${props.company.frontDeskPhone}` : null}
			</div>
			<div>
				{props.userInput.email ? props.userInput.email : null }
			</div>

			<div>
				{props.company.website}
			</div>
			<div >
				<img style={Styles.image} src={`${props.company.imageLink}`} />
			</div>
		</div>
	)
}

const Styles = {
	image: {height: '100px', width: '200px'},
	name: {fontSize: '16px', fontWeight: 'bold'},
	companyName: {marginTop: '5px'},
	border: {border: '1px solid black'},
	wrapper: {marginBottom: '5px'}
}

export default Output