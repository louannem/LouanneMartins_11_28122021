import React from "react";
import LeftArrow from "../../assets/arrow-left.svg"
import RightArrow from "../../assets/arrow-right.svg"

class Gallery extends React.Component {
    render() {
        return(
            <div className="kasa-gallery">
                <div className="gallery-arrows">
                    <img alt="" src={LeftArrow} />
                    <img alt="" src={RightArrow} />
                </div>
                <span className="gallery-counter">1/4</span>
                <img src={this.props.imgSrc} alt="Location gallery" className="gallery-img" />
            </div>
        )
    }
}

export default Gallery