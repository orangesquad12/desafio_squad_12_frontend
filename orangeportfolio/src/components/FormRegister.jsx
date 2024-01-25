import IconPassword from "../assets/img/RemoveRedEyeFilled.png"
function FormRegister() {
    return (
        <div className="container__form">
            <form>
                <div className="form">
                    <fieldset className="field-name">
                        <legend className="legend-name">Nome *
                        </legend>
                        <input type="text" className="input-name"></input>
                    </fieldset>
                    <fieldset class="field-lastname">
                        <input type="text" placeholder="Sobrenome *" className="input-lastname"></input>
                    </fieldset>
                </div>
                <fieldset class="field-email">
                    <legend className="legend-email">
                        Email address
                    </legend>
                    <input type="text" placeholder="Camila.ux@gmail.com" className="input-email"></input>
                </fieldset>
                <fieldset class="field-pass">
                    <legend className="legend-pass">
                        Password
                    </legend>
                    <input type="password" className="input-pass"></input>
                    <img src={IconPassword} className="icon-pass"></img>
                </fieldset>
            </form >
        </div >
    )
}

export default FormRegister;
