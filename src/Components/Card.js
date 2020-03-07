import React from "react"


import CommentBtn from "./CommentBtn"
import UpvoteButton from "./UpvoteButton"


class Card extends React.Component{
    render(){
        return(
            <div className="card-container">
                <img className="image-container"  src={this.props.thumbnail ? this.props.thumbnail.image_url : null} alt={this.props.title}/>
                <div className="content-container">
                    <h4 className="content-heading">{this.props.name}</h4>
                    <p className="para-text">{this.props.tagline}</p>
                    <div className="mini-section-cards">
                        <CommentBtn data={this.props.comments_count}/>
                        <p className="tags">{this.props.tags}</p>
                    </div>
                </div>
                <UpvoteButton upvotes={this.props.votes_count} name={this.props.name} updateUpvote={this.props.updateVote}/>
            </div>
        
        )
    }
}

export default Card