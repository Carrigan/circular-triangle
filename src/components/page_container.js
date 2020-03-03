import React from "react"
import { Navbar } from "./navbar"
import Footer from "./footer"
import SEO from "./seo"

export default function PageContainer(props) {
    return (
      <div>
        <SEO />
        <Navbar active={props.active} />
        
        { props.children }
        
        <Footer />
      </div>
    )
}