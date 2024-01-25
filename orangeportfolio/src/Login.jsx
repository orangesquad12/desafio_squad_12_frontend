import Loginimg from "./assets/img/imglogin.png"
import IconPassword from "./assets/img/RemoveRedEyeFilled.png"
import Googlebtn from "./assets/img/googlebtn.png"
import ButtonLargeLogin from "./components/ButtonLargeLogin"




function Login() {
    return (
        <div className="container__login">
            <form action="form">
                <div className="form-login">
                    <div className="login-left">
                        <img src={Loginimg} alt="Login Imagem" />
                    </div>
                    <div className="login-right">
                        <h3>Entre no Orange Portfólio</h3>
                        <a href="#"><img src={Googlebtn} alt="Logar com Google Email" className="googlebtn" /></a>
                        <h5>Faça login com email</h5>
                        <fieldset className="field-email">
                            <input type="password" className="input-email"></input>
                            <legend className="legend-email">Email Address</legend>
                        </fieldset>
                        <fieldset className="field-pass">
                            <input type="password" className="input-pass"></input>
                            <legend className="legend-pass">Password</legend>
                            <img src={IconPassword} className="icon-pass"></img>
                        </fieldset>
                        <ButtonLargeLogin />
                        <a href="#" class="link-register"><p className="btnregister">Cadastre-se</p></a>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Login;