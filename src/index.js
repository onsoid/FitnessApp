//const element = document.createElement ('h1')

//element.innerText = 'Hello React'

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Exercises from './Pages/Exercise'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

//ReactDOM.render ( que --- donde )

ReactDOM.render(<Exercises/>, container)
