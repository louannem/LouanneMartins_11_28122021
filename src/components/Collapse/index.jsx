import React from "react";
import "../../utils/styles/Collapse.css"

class Collapse extends React.Component {
    render() {
        return(
            <div className="kasa-collapse">
                <div className="collpase-header">
                    {this.props.title}
                </div>
                <div className="collapse-container">
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Collapse 