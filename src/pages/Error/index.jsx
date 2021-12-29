import React from "react";
import { Link } from "react-router-dom";
import '../../utils/styles/Error.css'


class Error extends React.Component {
    render() {
        return(
            <div className="kasa-error">
                <div className="error-msg">
                    <h1>404</h1>
                    <span>Oups! La page que vous demandez n'existe pas.</span>
                </div>

                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        )
    }
}

export default Error