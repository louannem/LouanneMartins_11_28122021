import React from "react";
import LogoFooter from '../../assets/logo-footer.svg'
import '../../utils/styles/Footer.css'

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <img src={LogoFooter} alt="Logo Kasa"></img>
                <span>© 2020 Kasa. All rights reserved</span>
            </footer>
        )
    }
}

export default Footer