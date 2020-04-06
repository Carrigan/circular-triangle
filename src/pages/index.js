import React from "react"
import { Link } from "gatsby"
import Banner from "../components/banner";
import Title from "../components/title";
import PageContainer from "../components/page_container";

export default () =>
    <PageContainer active="home">
        <Banner color={"dark-grey"} title={"Special Report"} >
            <a href="/assets/ppe_sterilization_for_reuse.pdf">SPECIAL REPORT from Circular Triangle, Don't Waste Durham, and Sustainable Duke on circular solutions to the PPE shortage</a>
        </Banner>

        <Banner title={"Mission"}>
            Circular Triangle is a non-profit organization that inspires and enables the transition to a local circular economy in the Triangle through advocacy, education, and cross-sector collaboration, creating a cleaner environment and resilient communities.
        </Banner>

        <div class="container flex top-border spaced">
            <div class="split hide-small split-economy">
                &nbsp;
            </div>

            <div class="split">
                <div class="split-content">
                    <Title>What is a circular economy?</Title>
                    <p>
                        The economy we currently live in is one that involves extracting resources from the Earth, manufacturing products, and throwing them away. This is a linear economy. The recycling economy tries to break those products down and make new products. But this often results in prolonging its inevitable destination in the landfill, because only 9% of recyclable materials are actually recycled, and those materials can only be recycled so many times before they lose their integrity and value.
                    </p>

                    <p>
                        The circular economy represents a fundamentally different way of approaching our economy. Instead of assuming waste is inevitable, a circular economy designs out waste and pollution, keeps using materials over and over, and makes nature healthier. The goal is to create a closed loop of resources, eliminating waste, pollution, and emissions.
                    </p>

                    <p>
                        A circular economy is one that is not based on resource consumption and single-use, but one that designs waste out – keeping products, components, and materials circulating in the local economy.
                    </p>
                </div>
            </div>
        </div>

        <div class="container flex">
            <div class="split">
                <div class="split-content">
                    <Title>Why The Triangle?</Title>
                    <ul>
                        <li>The Triangle is well-positioned to be an innovative leader in circular development as the anchor of three world-class universities, close proximity to agriculture and natural resources; thriving business community; strong social sector and civic organizations; and engaged cross-sector leaders interested in sustainability and equitable economic development.</li>
                        <li>The creativity and entrepreneurship of the Triangle's residents are key attributes that facilitate the creation of a localized circular economy, which will propel the Triangle into an equitable and resilient future.</li>
                    </ul>
                </div>
            </div>

            <div class="split dark-primary centered hide-small">
                <img src="/img/nc.png" width="400" height="400" alt="North Carolina Map" />
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
    </PageContainer>
