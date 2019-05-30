// import react modules
import React, { Component } from 'react'

class Clicker extends Component {
	// this will run the parent function--increase()
	increase = () => {
		this.props.increase();
	}

	render() {
		return (
			<div className='large'>
				<button onClick={this.increase}>More Cookies!</button>
			</div>
		)
	}
}

export default Clicker
