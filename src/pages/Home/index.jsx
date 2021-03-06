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
                <div className="banner-wrapper banner-home">
                    <Banner title="Chez vous, partout et ailleurs" img={homeBanner} />
                </div>

                <div className="location-grid">
                    {data.map((location) => (
                       <Link key={`link-to-`+location.id} to={`/${location.id}`}><Card key={location.id} name={location.title} LocationCover={location.cover} /></Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Home