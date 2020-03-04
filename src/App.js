import React from "react"
import Header from "./Components/Header"
import Cards from "./Components/Cards"
import './Style.css'

class App extends React.Component{
    render(){
       return(
            <div className="outer-container">
                <Header />
                <h1 style={{"font-size":"28px", "margin-left":"163px", "padding":"10px"}}>Todays</h1>
                <Cards />
                <div style={{height:"300px"}}></div>
            </div>
       )
    }
}

export default App