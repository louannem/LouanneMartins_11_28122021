import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../utils/styles/Header.css'
import logo from '../../assets/logo.svg'

class Header extends React.Component {
    render(){
        return(
            <header className='kasa-header'>
                <NavLink to="/"><img src={logo} alt="Logo Kasa"></img></NavLink>
                <nav>
                    <NavLink to="/" className='header-link' activeclassname="active">Accueil</NavLink>
                    <NavLink to="/a-propos" className='header-link' activeclassname="active">A propos</NavLink>
                </nav>
            </header> 
        )
    }
}

export default Header