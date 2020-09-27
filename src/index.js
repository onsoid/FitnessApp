//const element = document.createElement ('h1')

//element.innerText = 'Hello React'

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstname: 'Miguel',
    lastname: 'Angulo'
}

function getName(user){
  return `${user.firstname} ${user.lastname}`
}

function getGreeting (user){
  if(user){
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}

const name = 'Miguel'

const element = (
<div>
  {getGreeting(user.firstname)}
  {getGreeting(user.lastname)}
  
  
  </div>)
const container = document.getElementById('root')

//ReactDOM.render ( que --- donde )

ReactDOM.render(element, container)
