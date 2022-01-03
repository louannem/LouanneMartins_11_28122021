import React from "react";
import LeftArrow from "../../assets/arrow-left.svg"
import RightArrow from "../../assets/arrow-right.svg"

const locationInfo = 
    {
        "id": "c67ab8a7",
        "title": "Appartement cosy",
        "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "pictures": [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
        ],
        "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
        "host": {
            "name": "Nathalie Jean",
            "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
        },
        "rating": "5",
        "location": "Ile de France - Paris 17e",
        "equipments": [
            "Équipements de base",
            "Micro-Ondes",
            "Douche italienne",
            "Frigo",
            "WIFI"
        ],
        "tags": [
            "Batignolle",
            "Montmartre"
        ]
    }

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            counter: 0,
        }
        this.nextImg = this.nextImg.bind(this)
    }

    nextImg = () => {
        if(this.state.counter + 1 === locationInfo.pictures.length) {
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
                counter : locationInfo.pictures.length - 1
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
                <span className="gallery-counter">{this.props.index}/{this.props.counter}</span>
                <img src={locationInfo.pictures[this.state.counter]} alt="Location gallery" className="gallery-img" />
            </div>
        )
    }
}

export default Gallery