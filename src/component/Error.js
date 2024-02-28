import React from 'react'
import { Link } from "react-router-dom";
import error from "../assets/404b.png"

export default function Error() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: "1vw", height: "100vh", width: "100vw" }}>
            <img src={error} alt="404 Page Not Found" style={{ width: "70vh" }} />
            <Link to="/Student-Database">
                <button className="btn btn-dark errbtn" style={{fontSize:"1.2rem"}}>
                    Go Back <i className="fa-solid fa-rotate-left" style={{color: "#ffffff"}}></i>
                    </button>
            </Link>
        </div>
    )
}
