// import react modules
import React from 'react'
import ReactDOM from 'react-dom'

// import components
import App from './jsx/app.jsx'

// import other stored files
import './css/index.css'
import * as serviceWorker from './serviceWorker'

// set root component inject into id:root
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
// ^^ This is actually pretty vital to Progressive Web Apps.
