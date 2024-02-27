import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: "fixed", width: "100vw", top: "0" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Student-Database">Student Database</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
                            <li className="nav-item">
                                <Link className={`nav-link ${props.loc === "home" ? "active" : ""}`} aria-current="page" to="/Student-Database">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.loc === "er" ? "active" : ""}`} aria-current="page" to="/Student-Database/er">ER Diagram</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.loc === "insertdetails" ? "active" : ""}`} aria-current="page" to="/Student-Database/insertdetails">Insert Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.loc === "insertmarks" ? "active" : ""}`} aria-current="page" to="/Student-Database/insertmarks">Insert Marks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.loc === "fetchdetails" ? "active" : ""}`} aria-current="page" to="/Student-Database/fetchdetails">Fetch Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.loc === "fetchmarks" ? "active" : ""}`} aria-current="page" to="/Student-Database/fetchmarks">Fetch Marks</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
