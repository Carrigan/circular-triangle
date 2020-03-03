import React from "react"
import { Navbar } from "./navbar"
import SEO from "./seo"

export default function PageContainer(props) {
    return (
      <div>
        <SEO />
        <Navbar active={props.active} />
        { props.children }
      </div>
    )
}