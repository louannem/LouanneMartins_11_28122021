import React from "react";
import Collapse from "../../components/Collapse";
import Gallery from "../../components/Gallery";
import "../../utils/styles/Location.css"
import { data } from "../../data/logements";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";


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
                    <div className="kasa-location" key={location.id + `-wrapper`} >
                        <Gallery imgSrc={location.pictures[0]} index={location.pictures.indexOf(location.pictures[0]) + 1} arrayLength={location.pictures.length} counter={location.pictures.length} picturesArray={location.pictures}/>
                        <div className="location-header">
                            <div className="location-title">
                                <h1>{location.title}</h1>
                                <h2>{location.location}</h2>

                                <Tag arrayTags={location.tags} />
                            </div>

                            <div className="location-host">
                                <div className="host-profil">
                                    <span>{location.host.name}</span>
                                    <img alt="" src={location.host.picture} />
                                </div>

                                <Rating locationRating={location.rating} />
                            </div>
                        </div>

                        <div className="location-collapses">
                            <Collapse title="Description" content={location.description}  key={location.id + `-description`} />
                            <Collapse title="Equipements" content={this.listEquip()} key={location.id + `-equipements`}/>
                        </div>
                    </div>
                    
                     
                ))}
            </div>
        )
    }
}

export default Location