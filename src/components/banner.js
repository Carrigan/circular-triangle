import React from "react"

export default props =>
    <div className={`container ${props.spaced} ${props.color}`}>
        { props.title && <div className="container-header h-centered">{props.title}</div> }
        { props.children &&
            <div className="container-text large cushy h-centered">
                <p>{props.children}</p>
            </div>
        }
    </div>