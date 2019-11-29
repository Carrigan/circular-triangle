import React from "react"
import Title from "./title";

export default props => 
    <div class={`container ${props.scheme}`}>
        { props.title && <Title>{props.title}</Title> }
        { props.children }
    </div>