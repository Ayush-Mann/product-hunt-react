import React from "react"
// import initialData from "../initial-data"

class AddCardForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            tagline:"",
            tags:'',
            comments_count:'',
            thumbnail:{
                image_url:""
            },
            upvotes_count:0,

        }
    }
    handleChange=(event)=>{
        let { name,value }=event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit =()=>{
        this.props.func(this.state)
        this.setState({
            name:"",
            desc:"",
            tags:'',
            comments_count:'',
            thumbnail:{
                image_url:""
            },
            upvotes_count:0,
        })
    }
    render(){
        return(
        <div className='form-section'>
            <input name='name' type="text" onChange={this.handleChange} value={this.state.title} placeholder="Enter title"/>
            <input name='tagline' type="text" onChange={this.handleChange} value={this.state.desc} placeholder="Enter description" />
            <input name='tags'type="text" onChange={this.handleChange} value={this.state.tags} placeholder="Enter tags" />
            <input name='comments_count' type="text" onChange={this.handleChange} value={this.state.comments} placeholder="Enter number of comments" />
            <input name='thumbnail.image_url' type="text" onChange={this.handleChange} value={this.state.url} placeholder="Enter image url "/>
            {/* <input name='upvotes' type="text" onChange={this.handleChange} value={this.state.upvotes} placeholder="Enter upvotes" /> */}
            <input className="form-submit-btn" type="submit" value="Submit" onClick={()=>this.handleSubmit()} />
        </div>
        )
    }
}
export default AddCardForm