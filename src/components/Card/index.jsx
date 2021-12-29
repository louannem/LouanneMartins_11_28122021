import React from "react";
import "../../utils/styles/Card.css"

class Card extends React.Component {
    render() {
        return(
            <div className="location-card">
                <p>{this.props.name}</p>
                <div className="card-filter"></div>
                <img alt=" "></img>
            </div>
        )
    }
}

export default Card