import React from "react"


import CommentBtn from "./CommentBtn"
import UpvoteButton from "./UpvoteButton"


class Card extends React.Component{
    render(){
        return(
            <div className="card-container">
                <img className="image-container"  src={this.props.img} alt="this.props.title"/>
                <div className="content-container">
                    <h4 className="content-heading">{this.props.title}</h4>
                    <p className="para-text">{this.props.desc}</p>
                    <div className="mini-section-cards">
                        <CommentBtn data={this.props.comments}/>
                        <p className="tags">{this.props.tags}</p>
                    </div>
                </div>
                <UpvoteButton upvotes={this.props.upvotes} title={this.props.title} updateUpvote={this.props.updateVote}/>
            </div>
        
        )
    }
}

export default Card