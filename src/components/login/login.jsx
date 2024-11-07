import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Login.css";

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();


        alert(`Enviando os dados: ${userName} ${password}`)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <h1>Access Systen</h1>

                <div className='input-field'>
                    <FontAwesomeIcon icon={faUser} className="icon" />

                    <input
                        type="e-mail"
                        placeholder='E-mail do Usuário'
                        onChange={(e) => { setUserName(e.target.value) }} />
                </div>

                <div className='input-field'>
                    <FontAwesomeIcon icon={faLock} className="icon" />

                    <input
                        type="senha"
                        placeholder="Senha do Usuário"
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="recall-forget">
                    <input type="checkbox" />
                    <p>Remember-me</p>
                    <a href="#">forgot password</a>
                </div>
                <div className="container-button">
                    <button>LOGIN</button>
                </div>

                <div className="sign-up">
                    <p>Dont have acount?<a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export { Login }