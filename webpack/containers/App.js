import React from 'react';
import Output from '../components/Output'
import Header from '../components/Header'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.handleSelect = this.handleSelect.bind(this);
		this.options = this.options.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.passCompanyInfo = this.passCompanyInfo.bind(this);
		this.state = {
			companies: null, select: 'Ryan Horlacher Technologies', userInput: {
			name: '', title: '', phone: '', email: '', checkbox: false}
		}
	}

	componentWillMount() {
		$.ajax({
			url: '/companies',
			type: 'GET',
			dataType: 'JSON'
		}).done( data => {
			this.setState({
				companies: data.companies
			})
		}).fail( data => {
			console.log(data)
		})
	}

	options() {
		let newOptions = this.state.companies.map( company => {
			return (
				<option key={company.id} value={company.name}>{company.name}</option>
			)
		})
		return newOptions
	}

	handleSelect(e) {
		this.setState({ 
			select: e.target.value
		})
	}
	handleNameChange(e) {
		this.setState({
			userInput: { ...this.state.userInput, name: e.target.value }
		})
	}
	handleTitleChange(e) {
		this.setState({
			userInput: { ...this.state.userInput, title: e.target.value }
		})
	}
	handlePhoneChange(e) {
		let value = e.target.value
		let $phone = $('#phone')
		if (value.slice(-1).match(/\d/) === null) {
			value = value.slice(0, e.target.value.length - 1)
			e.target.value = value
		}
		e.target.value.length > 10 ? e.target.value = value.slice(0, e.target.value.length - 1) : null
		let length = e.target.value.length
		if ( length === 10 ) {
			$phone.removeClass('has-error')
			$phone.addClass('has-success')
		} else if (length === 0) {
			$phone.removeClass('has-error')
			$phone.removeClass('has-success')
		} else {
			$phone.addClass('has-error')
		}
		length > 0 ? value = `(${value.slice(0, 3)})${value.slice(3, 6)}-${value.slice(6, 10)}` : null

		this.setState({
			userInput: { ...this.state.userInput, phone: value}
		})
	}
	handleEmailChange(e) {
		let value = e.target.value
		let $email = $('#email')
		if ( value.match(/^.*@.*$/)) {
			$email.removeClass('has-error')
			$email.addClass('has-success')
		} else if (e.target.value.length === 0) {
			$email.removeClass('has-error')
			$email.removeClass('has-success')
		} else {
			$email.addClass('has-error')
		}
		e.target.value.length === 0 ? $email.removeClass('has-error') : null
		this.setState({
			userInput: { ...this.state.userInput, email: e.target.value }
		})
	}
	handleCheckbox(e) {
		this.setState({
			userInput: { ...this.state.userInput, checkbox: e.target.checked }
		})
	}
	passCompanyInfo() {
		return(
			this.state.companies.find( company => {
				return company.name === this.state.select
			})
		)
	}

	render() {
		return(
			<div className='container'>
				<Header />
				<div className='col-md-6'>
				    <StepOne />
					<div className=''>
						<div className='form-group'>
							<label>Company</label>
							<select className='form-control' value={this.state.select} onChange={ this.handleSelect} >
								{this.state.companies ? this.options() : null}
					        </select >
				        </div>
				        <div className='form-group'>
				        	<label>Full Name</label>
				        	<input className='form-control' value={this.state.userInput.name} onChange={this.handleNameChange} />
				        </div>
				        <div className='form-group'>
				        	<label>Job Title</label>
				        	<input className='form-control' value={this.state.userInput.title} onChange={this.handleTitleChange} />
				        </div>
				        <div id='phone' className='form-group'>
				        	<label className='control-label'>Direct Phone Number</label>
				        	<input className='form-control' value={this.state.userInput.direct} onChange={this.handlePhoneChange} />
				        </div>
				        <div id='email' className='form-group'>
				        	<label className='control-label'>Email</label>
				        	<input className='form-control' value={this.state.userInput.email} onChange={this.handleEmailChange} />
				        </div>
				        <div className="checkbox form-group">
				            <label>
				            	<input type="checkbox" checked={this.state.userInput.checked} onChange={this.handleCheckbox} />
				            	Add front desk phone number
				            </label>
				        </div>
				    </div>
			    </div>
			    <StepTwo />
			    <button className='btn btn-default' onClick={() => this.refs.output.selectAll()} >Select Signature</button>
			    <br />
			    {this.state.companies ? <Output ref='output' company={this.passCompanyInfo()} userInput={this.state.userInput} /> : null }
			</div>
		)
	}
}

export default App;

