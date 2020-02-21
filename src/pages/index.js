import React from "react"
import { Link } from "gatsby"
import { Navbar } from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Title from "../components/title";

export default () => <div>
    <Navbar active="home" />

    <Banner title={"Mission"}>
        Circular Triangle inspires and enables the transition to a local circular economy in the Triangle through advocacy, education, and cross-sector collaboration, creating a cleaner environment and resilient communities.
    </Banner>

    <div class="container spaced flex top-border">
        <div class="split">
            <div class="split-content">
                <Title>Why The Triangle?</Title>
                <ul>
                    <li>The Triangle is well-positioned to be an innovative leader in circular development with the anchor of three world-class universities; close proximity of agriculture and natural resources; thriving business community; strong social sector and civic organizations; and cross-sector leaders interested in sustainability and equitable economic development.</li>
                    <li>The creativity and entrepreneurship of the Region's residents are key attributes that facilitate the creation of a localized circular economy that propels the Triangle into an equitable and resilient future.</li>
                </ul>
            </div>
        </div>

        <div class="split dark-primary centered hide-small">
            <img src="/img/nc.png" width="400" height="400" />
        </div>
    </div>

    <div class="container flex">
        <div class="split hide-small split-durham">
            &nbsp;
        </div>

        <div class="split">
            <div class="split-content">
                <Title>Let's Start in Durham</Title>
                <ul>
                    <li>Durham offers an unparalleled opportunity to realize the potential of the public and private sectors, communities and residents to create a circular city.</li>
                    <li>Durham is actively reimagining itself during the recent period of growth. This growth creates great opportunity but also challenges in equitable housing and jobs, construction waste, consumer consumption and waste, and increased traffic and congestion.</li>
                    <li>Designing an inclusive and equitable circular city requires building trust and connection in the local community. Public-private partnerships in Durham are ready to be formed and well-positioned to launch pilot programs that engage the community and enable the circular economy to emerge and achieve measurable impact.</li>
                </ul>
            </div>
        </div>
    </div>

    <Banner color={"dark-primary"} title={"Come Join Us"}>
        In order to achieve all of this, we need your help. <br />
        Please visit our <Link to="/vision">Vision</Link> page to learn more and then <Link to="/contact">Get Involved</Link>!
    </Banner>

    <Footer />
</div>
