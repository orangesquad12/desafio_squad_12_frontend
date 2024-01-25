import Cadastroimg from "./assets/img/imgcadastro.png"
import ButtonLarge from "./components/ButtonLarge";
import FormRegister from "./components/FormRegister";


function Register() {
  return (
    <div className="container__register">

      <div className="left-side">
        <img src={Cadastroimg} alt="Tela de Cadastro" />
      </div>

      <div className="right-side">
        <h1>Cadastre-se</h1>
        <FormRegister />
        <ButtonLarge />
      </div>
    </div >



  )
}

export default Register;