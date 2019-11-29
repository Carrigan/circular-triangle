import React from "react"
import { Navbar } from "../components/navbar";
import Banner from "../components/banner";
import Card from "../components/card";
import Footer from "../components/footer";
import Row from "../components/row";
import Block from "../components/block";
import Container from "../components/container";

export default () => <div>
    <Navbar active="vision" />

    <Container title="Why?">
        <Row>
            <Card scheme="dark-primary">
                By 2050, two-thirds of us will live in cities
            </Card>

            <Card scheme="dark-primary">
                Cities are grappling with the effects of our current take-make-dispose economy
            </Card>

            <Card scheme="dark-primary">
                Cities consume over 75% of natural resources, produce over 50% of global waste, and emit between 60-80% of greenhouse gases
            </Card>
        </Row>
    </Container>

    <Container title="What if we..." scheme="dark-grey">
        <Row>
            <Card scheme="white" img="/img/trash.png">
                Design out waste and pollution from cities?
            </Card>

            <Card scheme="white" img="/img/reuse.png">
                Design out waste and pollution from cities?
            </Card>

            <Card scheme="white" img="/img/sprout.png">
                Design out waste and pollution from cities?
            </Card>
        </Row>
    </Container>

    <Banner title="Our Vision" color="dark-primary">
        With purpose-driven circular strategies, policies, and programs designed to regenerate urban and natural systems, the Triangle is a replicable model for mid-sized regions around the world.
        We identify and implement circular solutions regionally that lead to a cleaner environment and inclusive economy. The result is a resilient and equitable community.
    </Banner>

    <Banner title="What We're Doing" color="dark-grey" />

    <Container>
        <Block title="Further Discussions with Experts">
            Invite leading thinkers in circular design, architecture, agriculture, and construction for 1:1 visits for deeper
            exploration. Includes IDEO, Gehl, Metabolic, Bill McDonough.
        </Block>

        <Block title="Community Engagement">
            A conference and learning series will create a shared vision, attract global leaders to highlight best practices,
            share study results to ground the discussion in reality, and run workshops to create a roadmap for a Circular
            Triangle.
        </Block>

        <Block title="Experiential Tour - The Netherlands">
            This in-country experience will allow leaders to explore the circular economy with specific operational examples
            at the municipal, building, and product levels. We will create a foundation for dialogue and discussion, as well
            as help translating the experience back to the unique local context of Durham.
        </Block>

        <Block title="Circularity Study">
            The study, conducted by global experts, will identify the regions best opportunities to create and lead in a circular economy.

        </Block>
    </Container>

    <Footer />
</div>
