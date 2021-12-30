import React from "react"
import "../../utils/styles/GlobalStyles.css"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import aboutBanner from "../../assets/about-banner.jpg"

class About extends React.Component {
    render() {
        return(
            <div className="kasa-about">
                <Banner title="" img={aboutBanner} className="about-banner"/>

                <div className="about-content">
                    <Collapse title="Fiabilité" content="Lorem ipsum"/>
                    <Collapse title="Respect" content="Lorem ipsum"/>
                    <Collapse title="Service" content="Lorem ipsum"/>
                    <Collapse title="Responsabilité" content="Lorem ipsum"/>
                </div>
            </div>
        )
    }
}

export default About