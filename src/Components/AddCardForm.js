import React from "react"
import initialData from "../initial-data"

class AddCardForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:"",
            desc:"",
            tags:'',
            comments:'',
            img:'',
            upvotes:0,

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
            title:"",
            desc:"",
            tags:'',
            comments:'',
            img:'',
            upvotes:0,
        })
    }
    render(){
        return(
        <div className='form-section'>
            <input name='title' type="text" onChange={this.handleChange} value={this.state.title} placeholder="Enter title"/>
            <input name='desc' type="text" onChange={this.handleChange} value={this.state.desc} placeholder="Enter description" />
            <input name='tags'type="text" onChange={this.handleChange} value={this.state.tags} placeholder="Enter tags" />
            <input name='comments' type="text" onChange={this.handleChange} value={this.state.comments} placeholder="Enter number of comments" />
            <input name='img' type="text" onChange={this.handleChange} value={this.state.url} placeholder="Enter image url "/>
            {/* <input name='upvotes' type="text" onChange={this.handleChange} value={this.state.upvotes} placeholder="Enter upvotes" /> */}
            <input className="form-submit-btn" type="submit" value="Submit" onClick={()=>this.handleSubmit()} />
        </div>
        )
    }
}
export default AddCardForm