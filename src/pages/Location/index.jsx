import React from "react";
import Collapse from "../../components/Collapse";
import Gallery from "../../components/Gallery";
import "../../utils/styles/Location.css"
import RedStar from "../../assets/red-star.svg"
import GreyStar from "../../assets/grey-star.svg"
import { data } from "../../data/logements";
import { withRouter } from "react-router";

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
    
    listEquip () {
        const queryString = window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
        return data.map((location) =>  location.id === queryString &&
        (location.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
        ))))
    }

    render() {
        const queryString = window.location.href.substring(window.location.href.lastIndexOf("/") + 1)

        return(
            <div className="kasa-location">
                
                {data.map((location) => (
                    queryString === location.id &&
                    <div className="kasa-location">
                        <Gallery imgSrc={location.pictures[0]} index={location.pictures.indexOf(location.pictures[0]) + 1} arrayLength={location.pictures.length} counter={location.pictures.length} picturesArray={location.pictures}/>
                        <div className="location-header">
                            <div className="location-title">
                                <h1>{location.title}</h1>
                                <h2>{location.location}</h2>

                                <div className="tags-list">
                                {location.tags.map((tag) => (
                                            <div key={tag}>{tag}</div>
                                    ))}        
                                </div>  
                            </div>

                            <div className="location-host">
                                <div className="host-profil">
                                    <span>{location.host.name}</span>
                                    <img alt="" src={location.host.picture} />
                                </div>

                                {location.rating === "1" ?
                                <div className="location-rating">
                                    <img src={RedStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                </div>
                                : location.rating === "2" ?
                                <div className="location-rating">
                                    <img src={RedStar} alt="Location rating"/>
                                    <img src={RedStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                </div>
                                : location.rating === "3" ?
                                <div className="location-rating">
                                    <img src={RedStar} alt="Location rating"/>
                                    <img src={RedStar} alt="Location rating"/>
                                    <img src={RedStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                    <img src={GreyStar} alt="Location rating"/>
                                </div>
                                : location.rating === "4" ?
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
                            <Collapse title="Description" content={location.description}/>
                            <Collapse title="Description" content={this.listEquip()}/>
                        </div>
                    </div>
                    
                     
                ))}
            </div>
        )
    }
}

export default Location