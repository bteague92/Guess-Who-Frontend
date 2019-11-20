import React from "react";
import {Link} from "react-router-dom";

function NavMenu(){
    return (
        <div className="mainLink">
            <div className="link">
                <Link to="/">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}


export default NavMenu; 