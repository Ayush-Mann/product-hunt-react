import React from "react"

function Button(props){
    return(
        <div style={{"textAlign":"center","padding":"10px"}}>
            <button className="button-indivitual">{props.content}</button>
        </div>
    )
}

export default Button