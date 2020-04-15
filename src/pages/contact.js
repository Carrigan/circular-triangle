import React from "react"
import { Link } from "gatsby"
import Banner from "../components/banner";
import Mailchimp from "../components/mailchimp";
import PageContainer from "../components/page_container";

export default () =>
    <PageContainer active="contact">
        <Banner color="dark-grey" title="To get started">
            Email Executive Director Jennifer Hill at <a href="mailto:jennifer@circulartriangle.org">jennifer@circulartriangle.org</a> about <a href="https://docs.google.com/document/d/1T5BItT00Ylt_2RXAY3vujEDjlBaa__aYaA4_btgE2LQ/edit?usp=sharing" target="_blank">volunteer opportunities</a>, join our mailing list below, or consider making <Link to="donate">a donation</Link>.
        </Banner>

        <Mailchimp />
    </PageContainer>