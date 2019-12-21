import React from "react"
import { Link } from "gatsby"

export function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <img src="/img/logo.png" width="64px" height="64px" />
                Circular Triangle
            </div>

            <div className="navbar-pages">
                <Link to="/" className={ props.active == "home" ? "active" : "inactive" }>Home</Link>
                <Link to="/vision" className={ props.active == "vision" ? "active" : "inactive" }>Vision</Link>
                <Link to="/contact" className={ props.active == "contact" ? "active" : "inactive" }>Get Involved</Link>
                <Link to="/donate">
                    <span className={ props.active == "donate" ? "donate-active" : "donate-inactive" }>
                        Donate
                    </span>
                </Link>
            </div>
        </div>
    )
}