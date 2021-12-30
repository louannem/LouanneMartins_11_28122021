import React from "react";
import "../../utils/styles/Collapse.css"
import ChevronUp from "../../assets/chevron-up.svg"
import ChevronDown from "../../assets/chevron-down.svg"

class Collapse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCollapse : false,
        }
        this.toggleCollapse = this.toggleCollapse.bind(this);
        console.log(this.props, this.state)
    }

    toggleCollapse(){
        const show = this.state.showCollapse
        this.setState({showCollapse: !show});
    }

    render() {
        return(
            <div className="kasa-collapse">
                <div className="collpase-header">
                    <span>{this.props.title}</span>
                    {this.state.showCollapse ?
                    <img src={ChevronUp} alt="Dérouler" onClick={() => this.toggleCollapse()}/>
                    :
                    <img src={ChevronDown} alt="Dérouler" onClick={() => this.toggleCollapse()}/> 
                    }
                    
                </div>
                {this.state.showCollapse &&
                    <div className="collapse-container">
                        <span>{this.props.content}</span>
                    </div>
                }
            </div>
        )
    }
}

export default Collapse 