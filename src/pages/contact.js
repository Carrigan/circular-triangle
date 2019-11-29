import React from "react"
import { Link } from "gatsby"
import { Navbar } from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Row from "../components/row";
import Mailchimp from "../components/mailchimp";
import Card from "../components/card";
import Container from "../components/container";

export default () => <div>
    <Navbar active="contact" />
    <Container title="Come Join Us">
        <Row>
            <Card scheme="dark-primary h-centered" title="Engage">
                We are seeking diverse leaders to commit 2 - 4 hours per month to connect with other leaders, recruit key stakeholders, and expand our collective thinking
            </Card>

            <Card scheme="dark-primary h-centered" title="Experience">
                Join community leaders in an immersive trip to The Netherlands where you will experience circular economy in practice from cities, to buildings, to products and translate these learnings to Durham
            </Card>

            <Card scheme="dark-primary h-centered" title="Expand">
                Local companies will accelerate the movement and support the transition to a circular economy with tax-deductible sponsorship of a community conference and learning series
            </Card>
        </Row>
    </Container>

    <Banner color="dark-grey" title="To get started">
        Email Jennifer Hill at jennifer@circulartriangle.org or join our mailing list below.
    </Banner>

    <Mailchimp />
    <Footer />
</div>