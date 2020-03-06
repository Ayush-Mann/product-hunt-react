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
            yesterdayData:null,
            token:"muxg2sBBV_vsK_r4tZ6DhY2a8neQWOnJ1_OV8dc4b0Q"
        }
    }
    componentDidMount(){
        axios('https://api.producthunt.com/v1/posts/all?sort_by=votes_count&order=desc&search[featured]=true&per_page=20',
        {
            method:"GET",
            headers:{
                "Content-Type":"applcation/json",
                "Authorization":`Bearer ${this.state.token}`,
                "Accept":'application/json'
                // "Host":"api.producthunt.com"
            }
        })
        .then(res => {
            this.setState({
                data:res.data.posts,
                yesterdayData:yesterdayData
                })
            // console.log(res)
        })

    }
    

    handleForm = (temp) =>{
        this.setState({
            data:this.state.data.concat(temp)
        })
        

    }
    updateVote=(name)=>{
        const updatedData = this.state.data.map((product)=>{
            if(product.name === name){
               product.votes_count = Number(product.votes_count)+1
               console.log("checking")
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
                    <h4 style={{"font-size":"22px", "padding":"13px 0", fontWeight:"700"}}>Today</h4>
                    {
                        this.state.data ? this.state.data.map((product)=>{
                            return(
                                <Card className="card-component" key={product.title} {...product} updateVote={this.updateVote}/>
                            )
                        }):null
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