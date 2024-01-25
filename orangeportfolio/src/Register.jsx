import React, {useState} from "react";
import Cadastroimg from "./assets/img/imgcadastro.png"
import ButtonLarge from "./components/ButtonLarge";
import FormRegister from "./components/FormRegister";
import RegisterSuccess from "./components/RegisterSuccess";


function Register() {
 
  const [showSucess, setShowSucess]= useState(false);
  const handleButtonClick = () => {
    setShowSucess(showSucess => !showSucess);
  };
  return (
    <div className="container__register">
      <div className="left-side">
        <img src={Cadastroimg} alt="Tela de Cadastro" />
      </div>
      <div className="right-side">
        {showSucess && < RegisterSuccess/>}
        <h1>Cadastre-se</h1>
        <FormRegister />
        <ButtonLarge onClick={handleButtonClick}/>
      </div>
    </div >
  )
}

export default Register;