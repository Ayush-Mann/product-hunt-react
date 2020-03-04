import React from "react"
import { FaCommentAlt } from 'react-icons/fa';
// import initialData from "../initial-data"

function CommentBtn(props){
    return(
        <div className="commentBtn-container">
            <FaCommentAlt size={9} style={{paddingRight:"5px"}}/>
            <span>{props.data}</span>
        </div>
    )
}

export default CommentBtn