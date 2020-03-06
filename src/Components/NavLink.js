import React from "react"

function NavLink(props){
    return(
        <div className="link-container">
            <a href="#">{props.name}</a>
        </div> 
    )
}

export default NavLink