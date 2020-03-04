import React from "react"
import Banner from "../components/banner";
import Row from "../components/row";
import Container from "../components/container";
import PageContainer from "../components/page_container";

export default () =>
  <PageContainer active="priorities"> 
    
    <Banner title="Priority Areas for 2020-2021" color="dark-grey" />
      
    <Container title="Construction and demolition" scheme="big-bottom">
      <Row>
        <p>
      Construction and demolition waste is one of the largest, heaviest, and most
      environmentally damaging waste streams in the Triangle. Beyond the sheer volume of
      waste generated in this sector, the materials being wasted have environmental 
      impacts such as greenhouse gas emissions or toxification of air and water. However,
      this waste stream also represents considerable financial value. For example, the 
      consulting firm Metabolic estimates that the market value of the construction and 
      demolition materials going to waste every year in <a href="https://www.metabolic.nl/projects/circular-charlotte/">Charlotte, NC</a> is around $15 million. 
      If the Triangle is aiming to reduce its carbon footprint and achieve zero waste, we 
      need to eliminate this waste stream by bringing in industry best practices for reusing
      materials and using circular design principles in the building process. Circular 
      Triangle is eliminating waste in the construction and demolition sector by convening 
      stakeholders across the Triangle to identify opportunities to close the loop in this 
      sector and bringing best practices to the Triangle.
      </p>
      </Row>
    </Container>
    
    <Container title="Community education" scheme="big-bottom">
      <Row>
        Circular Triangle is working to raise community awareness of
        circular economy, why it is important, and the benefits of
        circularity for the Triangle. We are doing this through monthly
        networking meetups, community meetings, educational
        workshops, partnering with UNC on a conference, and meeting
        directly with industry leaders.
      </Row>
    </Container>
    
    <Container title="Durham's comprehensive plan" scheme="big-bottom">
      <Row>
        Durham is right at the beginning of revising its Comprehensive Plan, which will set the stage for land use and development for many decades to come. Circular Triangle is working to embed circular economy principles into the Comprehensive Plan. We are doing this by educating Durham stakeholders about the importance of the Comprehensive Plan and how it can be used as a vehicle to create a zero-waste Durham.
      </Row>
    </Container>
  </PageContainer>
