import React from "react"
import { FaCaretUp } from 'react-icons/fa';

function UpvoteButton(props){
    return(
        <button className="upvote-btn" onClick={()=>{props.updateUpvote(props.name)}}>
            <FaCaretUp size={25} />
            <p>{props.upvotes}</p>
            
        </button>
        
    )
}


export default UpvoteButton