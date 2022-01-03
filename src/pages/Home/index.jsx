import React from "react"
import { Link } from "react-router-dom"
import "../../utils/styles/GlobalStyles.css"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import homeBanner from "../../assets/home-banner.jpg"
import { data } from "../../data/logements"

class Home extends React.Component {

    render() {
        return(
            <div className="kasa-home">
                <Banner title="Chez vous, partout et ailleurs" img={homeBanner} />

                <div className="location-grid">
                    {data.map((location) => (
                       <Link key={location.id} to={`/location/${location.id}`}><Card name={location.title} /></Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Home