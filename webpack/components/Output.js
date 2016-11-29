import React from 'react';

class Output extends React.Component {
	constructor(props) {
		super(props)
	}

	selectAll(e) {
		let $selection = $('#selection')
		let rangeObj = document.createRange();
		rangeObj.selectNodeContents($selection[0]);
		let selection = window.getSelection();
	    selection.removeAllRanges();
	    selection.addRange(rangeObj);
        
	}

	render() {
		return(
			<div id='selection' className='col-md-6 white pull-left' style={Styles.border} >
				<div style={Styles.name}>
					{this.props.userInput.name}
				</div>
				<div>
					{this.props.userInput.title}
				</div>
				<div style={Styles.spacer}>
					{this.props.userInput.phone ? `D: ${this.props.userInput.phone}` : null}
					{this.props.userInput.phone && this.props.userInput.checkbox ? ' | ' : null}
					{this.props.userInput.checkbox ? `O: ${this.props.company.frontDeskPhone}` : null}
				</div>
				<div>
					{this.props.userInput.email ? this.props.userInput.email : null }
				</div>

				<div style={Styles.spacer} >
					{this.props.company.website}
				</div>
				<div >
					<img style={Styles.image} src={`${this.props.company.imageLink}`} />
				</div>
			</div>
		)
	}
}

const Styles = {
	image: {height: '100px', width: '200px'},
	name: {fontSize: '16px', fontWeight: 'bold'},
	companyName: {marginTop: '5px'},
	border: {border: '1px solid #ccc', borderRadius: '4px'},
	wrapper: {marginBottom: '5px'},
	spacer: {lineHeight: '24px', paddingTop: '7px', marginBottom: '-5px'}
}

export default Output