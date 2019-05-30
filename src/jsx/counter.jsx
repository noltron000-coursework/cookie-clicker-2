// import react modules
import React, { Component } from 'react'

// create base for the application
class Counter extends Component {
	render() {
		return (
			<div className='large'>
				<label>Current Cookies:</label> <br />
				<output>{this.props.cookies}</output>
			</div>
		)
	}
}

export default Counter
