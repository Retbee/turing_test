import React from "react";

const LoginForm = () => {

    const [login, setLogin] = React.useState ('')
    const [password, setPassword] = React.useState ('')
    const [language, setLanguage] = React.useState ('0')

    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log({
            login: event.target.login.value,
            password: event.target.password.value,
            language: event.target.language.value,
        })
        setLogin('')
        setPassword("")
        setLanguage("")
    }

    const handleOnClick = () => {
        setLogin('')
        setPassword('')
        setLanguage("0")
    }

    const handleOnChangeLogin = (event) => {
        setLogin(event.target.value)
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleOnChangeLanguage = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input onChange={handleOnChangeLogin} value={login} name="login" type="text"/>
                </div>
                <div>
                    <input onChange={handleOnChangePassword} value={password} name="password" type="password"/>
                </div>
                <div>
                    <select onChange={handleOnChangeLanguage} value={language} name="language" id="">
                        <option value="0"/>
                        <option value="1">JavaScript</option>
                        <option value="2">Java</option>
                        <option value="3">C++</option>
                        <option value="4">C#</option>
                    </select>
                </div>
                <div>
                    <button>Click me</button>
                </div>
            </form>
            <button onClick={handleOnClick}>Out of the form</button>
        </>
    )
}