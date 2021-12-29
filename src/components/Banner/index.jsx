import React from "react";

class Banner extends React.Component {
    render() {
        return(
            <div className="kasa-banner">
                 <h1> {this.props.title} </h1>
                 <img src={this.props.img} alt="Banner background" />
            </div>
        )
    }
}

export default Banner