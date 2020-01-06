import React from "react"
import { Navbar } from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import DonateButton from "../components/donate_button";
import Container from "../components/container";

export default () => <div>
    <Navbar active="donate" />

    <Banner title="Support Circular Triangle">
        Your tax-deductible donation to Circular Triangle will accelerate the movement and support the transition to a circular economy.
    </Banner>
    
    <div className="container-text t-centered cushy">
      Circular Triangle is a fiscally sponsored project of Upstream Works, a registered 501(c)(3) public entity. 
      Donations are tax-deductible as allowed by law.
    </div>
    
    <Container scheme="dark-grey t-centered donate-box">        
        <div className="container-text medium big-bottom">
          To donate, either click the link below and select "Circular Triangle" from the "Use this donation for" dropdown or mail your check using the instructions below.
        </div>
        
        <DonateButton />
    </Container>
    
    <Container scheme="t-centered donate-box">
      <div className="container-text medium big-bottom">
        Note that Paypal takes a percentage of every online donation. To maximize your giving, please consider sending a check. Checks should be made out to "Upstream Works" with the memo line "Circular Triangle". Checks can be mailed to:
      </div>
      
      <div className="container-text">
        Upstream Works<br />
        106 Drayton Court<br />
        Chapel Hill, NC 27516
      </div>
    </Container>

    <Footer />
</div>
