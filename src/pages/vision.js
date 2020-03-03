import React from "react"
import Banner from "../components/banner";
import Card from "../components/card";
import Row from "../components/row";
import Container from "../components/container";
import PageContainer from "../components/page_container";

export default () =>
    <PageContainer active="vision">
        <Banner title="Our Vision" color="dark-grey">
            We envision a zero-waste Triangle with a clean environment and strong
            local economy. With purpose-driven circular strategies, policies, and
            programs designed to regenerate urban and natural systems, the
            Triangle is a replicable model for regional circularity in urban areas 
            around the United States.
        </Banner>

        <Container scheme="big-bottom" title="Why?">
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

        <Container title="What if we..." scheme="dark-grey big-bottom">
            <Row>
                <Card scheme="white" img="/img/trash.png">
                    Design out waste and pollution from cities?
                </Card>

                <Card scheme="white" img="/img/reuse.png">
                    Keep products and materials in use in cities and maintain their value?
                </Card>

                <Card scheme="white" img="/img/sprout.png">
                Regenerate natural systems in and around cities?
                </Card>
            </Row>
        </Container>
    </PageContainer>
