import React from "react"
import { Link } from "gatsby"
import Banner from "../components/banner";
import Mailchimp from "../components/mailchimp";
import PageContainer from "../components/page_container";

export default () =>
    <PageContainer active="contact">
        <Banner color="dark-grey" title="To get started">
            Email Executive Director Jennifer Hill at jennifer@circulartriangle.org, join our mailing list below, or consider making <Link to="donate">a donation</Link>.
        </Banner>

        <Mailchimp />
    </PageContainer>