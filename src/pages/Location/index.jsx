import React from "react";
import Collapse from "../../components/Collapse";
import "../../utils/styles/Location.css"
import RedStar from "../../assets/red-star.svg"
import GreyStar from "../../assets/grey-star.svg"

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


class Location extends React.Component {
    listEquip() {
        const equipments = () => {locationInfo.equipments.map((equipment) => (
            <li>{equipment}</li>
        ))}
        equipments()
    }
    render() {
        return(
            <div className="kasa-location">
                <div className="kasa-gallery"></div>
                <div className="location-header">
                    <div className="location-title">
                        <h1>{locationInfo.title}</h1>
                        <h2>{locationInfo.location}</h2>

                        <div className="tags-list">
                        {locationInfo.tags.map((tag) => (
                                            <div key={tag}>{tag}</div>
                                        ))}        
                        </div>                
                    </div>

                    <div className="location-host">
                        <div className="host-profil">
                            <span>{locationInfo.host.name}</span>
                            <img alt="" src={locationInfo.host.picture} />
                        </div>

                        {locationInfo.rating === "1" ?
                        <div className="location-rating">
                            <img src={RedStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                        </div>
                        : locationInfo.rating === "2" ?
                        <div className="location-rating">
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                        </div>
                        : locationInfo.rating === "3" ?
                        <div className="location-rating">
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                        </div>
                        : locationInfo.rating === "4" ?
                        <div className="location-rating">
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={GreyStar} alt="Location rating"/>
                        </div>
                        :
                        <div className="location-rating">
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                            <img src={RedStar} alt="Location rating"/>
                        </div>
                        }
                    </div>
                </div>
                
                
                
                

                <div className="location-collapses">
                    <Collapse title="Description" content={locationInfo.description}/>
                    <Collapse title="Description" content={this.listEquip()}/>
                </div>
            </div>
        )
    }
}

export default Location