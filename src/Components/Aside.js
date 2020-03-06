import React from "react"
import AsideHeading from "./AsideHeading"
import Button from "./Button"
import AddCardForm from "./AddCardForm"

function Aside(props){
    return(
        <div className="aside-outer-contianer">
            <p  style={{"font-size":"17px","fontWeight":"700","padding":"15px 0"}}>Makers working today</p>
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
                    <div style={{"padding":"15px", "textAlign":"center",}}>
                        <a><span  className="secondary-container-link">START WORKING NOW</span></a>
                    </div>
                </div>
            </div>
            <div className="radio-container">
                
                <p style={{"font-size":"18px", "fontWeight":"700", "padding":"10px 0"}}>Product Hunt Radio</p>
                <div className="flex radio-inner-container">
                <div className="radio-container-para">
                    <p>How to launch an operator-led fund with Brianne Kimmel</p>
                </div>
                <img  className="radio-image" src="https://ph-static.imgix.net/radio/ph_radio_cat.png?auto=format&auto=compress&w=90"/>
             {/* <img  className='radio-svg' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAXVBMVEVOTlD////z8/M8PD9FRUdISEo+PkBBQUOysrNLS02MjI1ZWVvb29zi4uI3Nzqampvq6urIyMl2dnd/f4C6urtpaWtubm/Ozs9kZGXAwMFUVFZeXmCGhocyMjWSkpMtbrsFAAADyklEQVRogc2b6ZqrKhBFkUEFjRqHmOne93/MI2YyRqEQPHX2z/66XQ1shoIqEjmL5se0VPU5uxJyzc61KtNjTt2/QxypaZNxnnAupCSjpBTjD7ImdeQ7oKu2vvJEPJFzSZHwa9NW4dE0rUm8hv3gY1Kn0LbD0PldxMKMfUkwofJg6EtXALlPetFdgqBTySz9vNDzTKbe6AtJnMEjPCG2lpvR+SneBH7AT+YxN6FpyZ3GeC7BS5PbDeg+S3zAWsmt34Iui819/ZEsSmd01cX+YK24W+v0FXTvN8pTCb7S6cvodNuMWpZMluf4Irr09te3ksUBX0KrQMP8Uaxg6DsLTR7Ydwh6DzIh7Jf9g1a7kJf6fI4ug4/zmz332gydBvb2VPM59o3udyQP7H4dXfGAK8mvJKer6C7Y6rks0a2h97PYS19Wm6D7Ym8yIUW/hKbZrgP9kLzRBXToPWNZk53kjc656S/C+U/kP+iT6euySYz/mQv6NEdfjN3NosO9CARPLjM0MXqMDeaoVBi4JN9oy9rNRl9WioWAv9byJ1qaJxZ7TomD4v5wKafoi2WTZu/ZeFDSG84uE3RnWU3YZN0/KF+3y+6Dzm1LKPvacg535jfPi/yNvtu+xGYRRKX+82m5UC80tbZhjvadauPGrdGpdbP8RWv49jFn7RNdb2i1n9tF/UBXgP9yJVrcPs+rEd3aDydraO32ZIvb43ZE2/vbgNbwDW4XjUbTq/10YkJvcru80gFtPiNA0AP8f9eNhecDGhJw2NDacMIJPmxfJGoANrGjXeHDYJMIchCFoN2mmswiQiG/DUNrt4MvcjklEJeB0Q5u5zk5Qo7fcLR2OwieHEkattWPlgPGnKekDI8GuZ2XREF84YoGwIUiNSTIc0drtxufS2RNznuhI3PEIs8kA5A3os1uz8h1T7TpGAUC+6B1y72uDPzQa19F7HBEmyFOLsQlBXEhRdw+EDdNxKMC4gEJ8ViIeBgOGAK4BLxjCIAY+CCGe4hBLmSwdwrtMS80EK9xEC+vMK/sEC8qI+txYbfrWcxLacSreKcHCLe1evFr0wcIxGeXv/vY1H6hEZ/YMB8WEZ9TMR+REZ/OI3pDSxhATJPATA7BTImJKF4iEGL6E2bSF2aq2x7plE+yNcEPM61xYO/QblgyJ2YKK2biLma6MmaS9rCmoqWmR4gJ+YP6G1YZgi6+EH7FF2Jr8UWkS062W92r5EQLrdBGa2N5UWv98D9dVKWVKw6N5gXjAUvJtGgLLaBrwxbQjaraBqVs8CGsYskPP0yJ6B83Ezr/ePnLkgAAAABJRU5ErkJggg=='/> */}
                </div>
                <div className="radio-container-sponsored">
                    <span style={{'color':"rgb(164,144,135)"}}>Sponsored by<span className="headspin">headspin</span></span>
                </div>
            </div>
            <div className="newsletter-outer-container one-edge-shadow">
                <AsideHeading content="Newsletter"/>
                <div className="newsletter-innercontainer">
                    <img style={{width:"100%","borderTopRightRadius":"4px",'borderTopLeftRadius':"4px"}} src="https://media3.giphy.com/media/5YayOGiDo5vItN379Q/100.webp?cid=790b7611fe3978295e63a27472d33b8ca6f3d068eb210d64&rid=100.webp" alt="image"/>
                    <p style={{"textAlign":"center","font-size":"20px","fontWeight":"400",padding:"9px 0"}}>A car for 14-year-olds 🚗</p>
                    <hr />
                    <p style={{'font-size': '18px',"textAlign":"center",'lineHeight': '1','fontWeight': '700',padding:"10px 5px"}}>Get the best new products in your inbox, every day 👇</p>
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