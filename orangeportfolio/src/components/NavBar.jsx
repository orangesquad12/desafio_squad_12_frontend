import Logo from "../assets/img/Logo orange.png"
import Image from "../assets/img/Image.png"
import Icon from "../assets/img/_IconButton_.png"

function Navbar() {
    return(
        <div className="navBar">
            <img src={Logo} alt="" className="navBarLogo"/>
            <div className="navBarMenu">  
                <a href="#"><p>Meus Projetos</p></a>
                <a href="#"><p>Descobrir</p></a>
            </div>
            <div className="navSideRight">
                <img src={Image} alt=""className="navBarAvatar" />
                <img src={Icon} alt="" className="navBarIcon" />
            </div>
        </div>
        )
}

export default Navbar