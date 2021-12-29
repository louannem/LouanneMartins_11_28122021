import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/styles/Header.css'
import logo from '../../assets/logo.svg'

class Header extends React.Component {
    render(){
        return(
            <header className='kasa-header'>
                <Link to="/"><img src={logo} alt="Logo Kasa"></img></Link>
                <nav>
                    <Link to="/" className='header-link'>Accueil</Link>
                    <Link to="/a-propos" className='header-link'>A propos</Link>
                </nav>
            </header> 
        )
    }
}

export default Header