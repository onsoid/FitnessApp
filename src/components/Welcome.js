import React from 'react'
import './styles/welcome.css'


function Welcome(props){
 return(
     <div className="container">
         <div className="Fitness-User-Info">
             <h1>Hello {props.username}</h1>
             <p>Leti's workout to get someone gains!</p>
        </div>
     </div>
     
 )

}

export default Welcome //componentes funcionales