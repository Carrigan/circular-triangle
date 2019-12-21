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

    <Banner color="dark-grey" title="To get started">
        Email Jennifer Hill at jennifer@circulartriangle.org, join our mailing list below, or consider making <Link to="donate">a donation</Link>.
    </Banner>

    <Mailchimp />
    <Footer />
</div>