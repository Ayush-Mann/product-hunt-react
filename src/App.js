import React from "react"

import Header from "./Components/Header"
import Cards from "./Components/Cards"

import './Style.css'

class App extends React.Component{
    render(){
       return(
            <div>
                <Header />
                <Cards />
            </div>
       )
    }
}

export default App