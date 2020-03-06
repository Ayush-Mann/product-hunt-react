import React from "react"
import axios from "axios"

import initialData from "../initial-data"
import yesterdayData from '../assets/yesterdaydata'
import Card from "./Card"
import Aside from "./Aside"
import { FaRss } from "react-icons/fa"

class Cards extends React.Component{
    

    constructor(){
        super()
        this.state = {
            data:initialData,
            yesterdayData:null
        }
    }
    componentDidMount(){
        this.setState({
            yesterdayData:yesterdayData
        }) 
    }
    
    handleForm = (temp) =>{
        this.setState({
            data:this.state.data.concat(temp)
        })
        

    }
    updateVote=(name)=>{
        const updatedData = this.state.data.map((product)=>{
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
                    <h4 style={{"font-size":"22px", "padding":"13px 0", fontWeight:"700"}}>Todays</h4>
                    {
                        this.state.data.map((product)=>{
                            return(
                                <Card className="card-component" key={product.title} {...product} updateVote={this.updateVote}/>
                            )
                        })
                    }
                    <h4 style={{padding:"20px 0", fontSize:"18px", fontWeight:"700"}}>Yesterday</h4>
                    {
                        this.state.yesterdayData ? this.state.yesterdayData.map((product)=>{
                            return(
                                <Card className="card-component" key={product.title} {...product} updateVote={this.updateVote} />
                            )
                        }):null
                    }
                </div>
                <Aside handleForm={this.handleForm} />
            </div>
            
        )
    }
}

export default Cards