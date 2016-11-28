import React from 'react';
import Output from '../components/Output'

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
		this.setState({
			userInput: { ...this.state.userInput, phone: e.target.value }
		})
	}
	handleEmailChange(e) {
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
				<div className='col-md-6'>
					<div className='form-group'>
						<label>Company</label>
						<select className='form-control' value={this.state.select} onChange={ this.handleSelect} >
							{this.state.companies ? this.options() : null}
				        </select >
			        </div>
			        <div className='form-group'>
			        	<label>Full Name</label>
			        	<input className='form-control' value={this.state.fullName} onChange={this.handleNameChange} />
			        </div>
			        <div className='form-group'>
			        	<label>Job Title</label>
			        	<input className='form-control' value={this.state.fullName} onChange={this.handleTitleChange} />
			        </div>
			        <div className='form-group'>
			        	<label>Direct Phone Number</label>
			        	<input className='form-control' value={this.state.fullName} onChange={this.handlePhoneChange} />
			        </div>
			        <div className='form-group'>
			        	<label>Email</label>
			        	<input className='form-control' value={this.state.fullName} onChange={this.handleEmailChange} />
			        </div>
			        <div className="checkbox form-group">
			            <label>
			            	<input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox} />
			            	Add front desk phone number
			            </label>
			        </div>
			    </div>
			    {this.state.companies ? <Output company={this.passCompanyInfo()} userInput={this.state.userInput} /> : null }
			</div>
		)
	}
}


export default App;

