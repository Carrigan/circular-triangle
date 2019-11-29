import React from "react"

export default props =>
    <div class={`card ${props.scheme}`}>
        { props.img && <div class="card-header dark-primary"><img src={props.img} /></div> }
        { props.title && <div class="card-title">{props.title}</div> }
        <div class="card-body">
            {props.children}
        </div>
    </div>