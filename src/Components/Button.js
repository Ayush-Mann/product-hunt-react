import React from "react"

function Button(props){
    return(
        <div style={{"text-align":"center","padding":"10px"}}>
            <button className="button-indivitual">{props.content}</button>
        </div>
    )
}

export default Button