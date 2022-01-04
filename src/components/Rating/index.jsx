import React from "react"
import RedStar from "../../assets/red-star.svg"
import GreyStar from "../../assets/grey-star.svg"

class Rating extends React.Component {
    render() {
        return(
             this.props.locationRating === "1" ?
                <div className="location-rating"  key={this.props.locationRating}>
                    <img src={RedStar} alt="Location rating"/>
                    <img src={GreyStar} alt="Location rating"/>
                    <img src={GreyStar} alt="Location rating"/>
                    <img src={GreyStar} alt="Location rating"/>
                    <img src={GreyStar} alt="Location rating"/>
                </div>
                : this.props.locationRating === "2" ?
                    <div className="location-rating" key={this.props.locationRating}>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={GreyStar} alt="Location rating"/>
                        <img src={GreyStar} alt="Location rating"/>
                        <img src={GreyStar} alt="Location rating"/>
                    </div>
                : this.props.locationRating === "3" ?
                    <div className="location-rating" key={this.props.locationRating}>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={GreyStar} alt="Location rating"/>
                        <img src={GreyStar} alt="Location rating"/>
                    </div>
                : this.props.locationRating === "4" ?
                    <div className="location-rating" key={this.props.locationRating}>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={GreyStar} alt="Location rating"/>
                    </div>
                :
                    <div className="location-rating" key={this.props.locationRating}>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                        <img src={RedStar} alt="Location rating"/>
                    </div>
            
        )
    }
}

export default Rating