import React from "react"
import { FaCaretUp } from 'react-icons/fa';

function UpvoteButton(props){
    return(
        <div className="upvote-btn">
            <FaCaretUp size={25} />
            <p>{props.upvotes}</p>
        </div>
    )
}


export default UpvoteButton