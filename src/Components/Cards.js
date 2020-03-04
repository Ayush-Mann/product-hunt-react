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
        return(<>
            {
                this.state.data.map((product)=>{
                    return(
                        <Card className="card-component" key={product.title} {...product}/>
                    )
                })
            }
            
        </>)
    }
}

export default Cards