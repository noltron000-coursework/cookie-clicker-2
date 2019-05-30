// import react modules
import React, { Component } from 'react'

// import components
import Counter from '../jsx/counter.jsx'
import Clicker from '../jsx/clicker.jsx'

class Cookie extends Component {
	// construct state variables
	constructor(props) {
		// REQUIRED: always call the parent class' constructor
		super(props)
		// initialize cookies
		this.state = {
			cookies: 0,
			clicks: 0,
		}
	}

	// increase cookies by click-power
	increase = () => {
		const click_power = 2 ** (Math.floor(this.state.clicks / 10))
		const count = this.state.cookies + click_power
		this.setState({
			cookies: count,
			clicks: this.state.clicks + 1,
		})
	}

	render() {
		return (
			<div >
				<Counter cookies={this.state.cookies} />
				<Clicker increase={this.increase} />
			</div>
		)
	}
}

export default Cookie
