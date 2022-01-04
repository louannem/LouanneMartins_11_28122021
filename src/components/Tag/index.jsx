import React from "react";

class Tag extends React.Component {
    render(){
        return(
            <div className="tags-list">
                {this.props.arrayTags.map((tag) => (
                    <div key={tag}>{tag}</div>
                    ))}        
            </div>
        )
    }
}

export default Tag