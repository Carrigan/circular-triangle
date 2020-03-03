import React from "react"
import Banner from "../components/banner";
import Card from "../components/card";
import Row from "../components/row";
import Container from "../components/container";
import PageContainer from "../components/page_container";

export default () =>
    <PageContainer active="climate">
      <Banner title="Renewable energy is not enough" color="">
        There needs to be a fundamental shift in the global approach to tackling climate change and the circular economy can play an essential role. 
      </Banner>

      <Container scheme="big-bottom dark-grey">
          <Row>
              <Card scheme="dark-primary">
                  Greenhouse gas emissions are not falling quickly enough to achieve climate targets
              </Card>

              <Card scheme="dark-primary">
                  Switching to renewable energy can only cut them by 55%
              </Card>

              <Card scheme="dark-primary">
                  Circular economy can help make up the remaining 45% by transforming how we make and use products, and how we produce food
              </Card>
          </Row>
          
        <Row>
          Source: Ellen MacArthur Foundation,
          <a href="https://www.ellenmacarthurfoundation.org/publications"> Completing the Picture: How the Circular Economy Tackles Climate Change (2019)</a>
        </Row>
      </Container>
      
      <Container scheme="">
        <Row>
          <ul>
            <li>Reaching carbon neutrality will require a systemic change in how the Triangle and its economy operates. Efforts that focus on only one factor, such as energy efficiency, are not enough to meet the full ambitions of this target. An upcoming report from the UN International Resource Panel highlights how climate policies that neglect the circular economy are missing out on one of the biggest sources of greenhouse gas emissions.</li>
            <li>The conclusion from the UN International Resource Panel’s report is that “it is time to look beyond energy efficiency to reduce the global carbon footprint.” In order to effectively slash their carbon footprints and prepare for the effects of climate change, cities need to integrate circular economy principles into their climate action plans, measure the consumption-based greenhouse emissions, and reduce their footprint.</li>
          </ul>
        </Row>
      </Container>
  </PageContainer>
