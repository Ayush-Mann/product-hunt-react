import React from "react"
import CommentBtn from "./CommentBtn"
import UpvoteButton from "./UpvoteButton"


class Card extends React.Component{
    render(){
        return(
            <div className="card-container">
                {/* <div> */}
                    <img className="image-container"  src={this.props.img} alt="this.props.title"/>
                {/* </div> */}
                <div className="content-container">
                    <h4 className="content-heading">{this.props.title}</h4>
                    <p className="para-text">{this.props.desc}</p>
                    <CommentBtn data={this.props.comments}/>
                </div>
                <UpvoteButton upvotes={this.props.upvotes}/>
            </div>
        
        )
    }
}

export default Card