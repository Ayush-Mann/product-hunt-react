import React from "react"
import axios from "axios"
import initialData from "../initial-data"
import Card from "./Card"
import Aside from "./Aside"

class Cards extends React.Component{
    // componentDidMount(){
    //     this.setState({
    //         data:initialData
    //     })

    // }

    constructor(){
        super()
        this.state = {
            data:initialData
        }
    }
    handleForm = (temp) =>{
        this.setState({
            data:this.state.data.concat(temp)
        })
        

    }
    updateVote=(name)=>{
        // console.log("hello there",name)
        const updatedData = this.state.data.map((product)=>{
            // console.log(product.name,temp)
            if(product.title === name){
               product.upvotes = Number(product.upvotes)+1
            }
            return product
        })
        this.setState({
            data:updatedData
        })
    }
    render(){
        return(
            <div className="outer-container flex wrapper">
                <div className="cards-list-container">
                    <h4 style={{"font-size":"28px", "padding":"10px 0"}}>Todays</h4>
                    {
                        this.state.data.map((product)=>{
                            return(
                                <Card className="card-component" key={product.title} {...product} updateVote={this.updateVote}/>
                            )
                        })
                    }
                </div>
                <Aside handleForm={this.handleForm} />
            </div>
            
        )
    }
}

export default Cards