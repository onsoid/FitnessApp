import React from 'react'
import './styles/menu.css'
import botonImg from '../images/add.png'
import {Link} from 'react-router-dom'

const Menu = () =>(
    <div className="Fitness-menu">
    <Link to="/exercise/new">
        <img src={botonImg} />
    </Link>
    </div>
)

// function Menu(props){
//     return(
//         <div className="Fitness-menu">
//         <Link to="/exercise/new">
//             <img src={botonImg} />
//         </Link>
//         </div>
//         )
//                 }


export default Menu