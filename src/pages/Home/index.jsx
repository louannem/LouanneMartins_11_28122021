import React from "react"
import "../../utils/styles/GlobalStyles.css"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import homeBanner from "../../assets/home-banner.jpg"

class Home extends React.Component {
    render() {
        return(
            <div className="kasa-home">
                <Banner title="Chez vous, partout et ailleurs" img={homeBanner} />

                <div className="location-grid">
                    <Card name="Titre de la location" />
                    <Card name="Titre de la location" />
                    <Card name="Titre de la location" />
                    <Card name="Titre de la location" />
                    <Card name="Titre de la location" />
                    <Card name="Titre de la location" />
                </div>
            </div>
        )
    }
}

export default Home