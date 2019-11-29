import React from "react"

export default props =>
    <div className="block">
        <div className="vision-header">{props.title}</div>
        {props.children}
    </div>