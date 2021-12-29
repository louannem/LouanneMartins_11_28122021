import React from "react"
import "../../utils/styles/GlobalStyles.css"
import Banner from "../../components/Banner"
import aboutBanner from "../../assets/about-banner.jpg"

class About extends React.Component {
    render() {
        return(
            <div className="kasa-about">
                <Banner title="" img={aboutBanner} className="about-banner"/>
            </div>
        )
    }
}

export default About