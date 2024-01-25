import IconPassword from "../assets/img/RemoveRedEyeFilled.png"
function FormRegister() {
    return (
        <div className="container__form">
            <form>
                <div className="form">
                    <fieldset className="inputname">
                        <legend className="legendname">Nome *
                        </legend>
                        <input type="text" className="textname"></input>
                    </fieldset>
                    <input type="text" placeholder="Sobrenome *" className="textlastname"></input>
                </div>
                <fieldset>
                    <legend>
                        Email address
                    </legend>
                    <input type="text" placeholder="Camila.ux@gmail.com"></input>
                </fieldset>
                <fieldset>
                    <legend>
                        Password
                    </legend>
                    <input type="password"></input>
                    <img src={IconPassword}></img>
                </fieldset>
            </form >
        </div >
    )
}

export default FormRegister;
