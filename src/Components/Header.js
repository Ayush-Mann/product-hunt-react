import React from "react"
import { FaBell } from 'react-icons/fa';

// function Header(){

// }

class Header extends React.Component{
    // constructor(){

    // }
    render(){
        return(
            <div style={{backgroundColor:"white"}}>
                <div className="header-outer-container wrapper">
                    <a className="logo-link">
                        <div className="image-div">
                            <img className="logo" src="/logo.png" alt="image"/>
                        </div>
                    </a>
                    <input type="text" className="searchBox" placeholder="Discover your next favourite thing..."/>
                    <div className="navigation-container">
                        <div className="link-container">
                            <a href="#">Deals</a>
                        </div>
                        <div className="link-container">
                            <a href="#">Jobs</a>
                        </div>
                        <div className="link-container">
                            <a href="#">Makers</a>   
                        </div>
                        <div className="link-container">
                            <a href="#">Radio</a>
                        </div>
                        <div className="link-container">
                            <a href="#">Ship</a>
                        </div>
                    </div>
                    <div className="profile-links-container">
                        <div className="link-container">
                            <a href="#">Post</a>
                        </div>
                        <FaBell  style={{"padding-right":"15px"}}/>
                        <a>
                            <img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ >
                        </a>
                    </div>

            </div>
            </div>
        )
    }
}

export default Header