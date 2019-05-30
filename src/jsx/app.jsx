// import react modules
import React, { Component } from 'react'

// import components
import Title from '../jsx/title.jsx'
import Cookie from '../jsx/cookie.jsx'

// import other stored files
import '../css/app.css'

// create base class for the application
class App extends Component {
	render() {
		return (
			<div>
				<Title />
				<Cookie />
			</div>
		)
	}
}

export default App
