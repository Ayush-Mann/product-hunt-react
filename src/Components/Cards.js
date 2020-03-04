import React from "react"
import axios from "axios"
import initialData from "../initial-data"
import Card from "./Card"

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
    render(){
        return(
            <div className="cards-list-container">
                <h4 style={{"font-size":"28px", "margin-left":"163px", "padding":"10px"}}>Todays</h4>
                {
                    this.state.data.map((product)=>{
                        return(
                            <Card className="card-component" key={product.title} {...product}/>
                        )
                    })
                }
            </div>
            
        )
    }
}

export default Cards