import React from "react"
import AsideHeading from "./AsideHeading"
import Button from "./Button"
import AddCardForm from "./AddCardForm"

function Aside(props){
    return(
        <div className="aside-outer-contianer">
            <p  style={{"font-size":"17px","font-weight":"700","padding":"15px 0"}}>Makers working today</p>
            <div className="aside-container one-edge-shadow">   
                <div className="people-container">
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                    <a href="#"><img className="profile-link"  src="https://ph-avatars.imgix.net/2271389/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop" alt="image"/ ></a>
                </div> 
            
                <div className="secondary-container">
                    <hr style={{width:"70%", margin:"0 auto"}} />
                    <div style={{"padding":"15px", "text-align":"center",}}>
                        <a><span  className="secondary-container-link">START WORKING NOW</span></a>
                    </div>
                </div>
            </div>
            <div className="radio-container">
                <p style={{"font-size":"18px", "font-weight":"700", "padding":"10px 0"}}>Product Hunt Radio</p>
                <div className="radio-inner-container">
                    <p>How to launch an operator-led fund with Brianne Kimmel</p>
                    <div className="radio-image">
                        <img style={{width:"100%"}}src="data:image/png;base64,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"/>
                    </div>
                </div>
                <div className="radio-container-sponsored">
                    <span>Sponsored by<span className="headspin">headspin</span></span>
                </div>
            </div>
            <div className="newsletter-outer-container">
                <AsideHeading content="Newsletter"/>
                <div className="newsletter-innercontainer">
                    <img style={{width:"100%","border-top-right-radius":"4px",'border-top-left-radius':"4px"}} src="https://media3.giphy.com/media/5YayOGiDo5vItN379Q/100.webp?cid=790b7611fe3978295e63a27472d33b8ca6f3d068eb210d64&rid=100.webp" alt="image"/>
                    <p style={{"text-align":"center","font-size":"20px","font-weight":"400",padding:"9px 0"}}>A car for 14-year-olds 🚗</p>
                    <hr />
                    <p style={{'font-size': '18px',"text-align":"center",'line-height': '1','font-weight': '700',padding:"10px 5px"}}>Get the best new products in your inbox, every day 👇</p>
                    <Button width="200px" content="Subscribe"/>
                </div>
            </div>
            <div className="form-outer-container">
                <AsideHeading content="Add Card" />
                <AddCardForm func={props.handleForm} />
            </div>
        </div>
    )
}
export default Aside