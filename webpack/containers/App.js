import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.handleSelect = this.handleSelect.bind(this);
		this.options = this.options.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.state = {
			select: 'Ryan Horlacher Technologies', companies: null, 
			name: '', title: '', phone: '', email: '', checkbox: false}
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
		console.log(this.state.companies)
		let newOptions = this.state.companies.map( company => {
			return (
				<option key={company.id} value={`company.name`}>{company.name}</option>
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
			name: e.target.value
		})
	}
	handleTitleChange(e) {
		this.setState({
			title: e.target.value
		})
	}
	handlePhoneChange(e) {
		this.setState({
			phone: e.target.value
		})
	}
	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	}

	render() {
		return(
			<div className='container'>
				<form className='col-md-6'>
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
			    </form>
			</div>
		)
	}
}


export default App;

