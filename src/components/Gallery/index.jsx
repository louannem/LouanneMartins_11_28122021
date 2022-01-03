import React from "react";
import LeftArrow from "../../assets/arrow-left.svg"
import RightArrow from "../../assets/arrow-right.svg"



class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            counter: 0,
        }
        this.nextImg = this.nextImg.bind(this)
    }

    nextImg = () => {
        if(this.state.counter + 1 === this.props.arrayLength) {
            this.setState({
                counter:0
            })
        } else {
            this.setState({
                counter : this.state.counter + 1
            })
        }
        console.log(this.state.counter)
    }

    previousImg = () => {
        if(this.state.counter === 0) {
            this.setState({
                counter : this.props.arrayLength - 1
            })
        } else {
            this.setState({
                counter : this.state.counter - 1 
            })
        }
    }

    render() {
        return(
            <div className="kasa-gallery">
                <div className="gallery-arrows">
                    <img alt="" src={LeftArrow} onClick={this.previousImg}  />
                    <img alt="" src={RightArrow} onClick={this.nextImg} />
                </div>
                <span className="gallery-counter">{this.state.counter + 1}/{this.props.counter}</span>
                <img src={this.props.picturesArray[this.state.counter]} alt="Location gallery" className="gallery-img" />
            </div>
        )
    }
}

export default Gallery