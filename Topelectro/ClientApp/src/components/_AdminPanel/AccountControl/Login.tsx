import React, { ReactElement, useRef, useState } from 'react'
import axios from 'axios'

interface Props {
    setUser: any
}

export default function Login(props: Props): ReactElement {

    const [error, setError] = useState({
        state: false,
        message: ""
    })

    const emailRef: any = useRef()
    const passwordRef: any = useRef()

    const clickHandler = (e: any) => {
        e.preventDefault()

        const data = {
            Email: emailRef.current.value,
            Password: passwordRef.current.value
        }

        if (data.Email === "" || data.Password === "") {
            setError({
                state: true,
                message: "შეიყვანეთ მეილი და პაროლი!"
            })
        }

        axios.post('api/account/login', data)
            .then(response => {
                {/* topelectro-admin@gmail.com */ } {/* Top2016electro*123 */ }
                response.data === "SUCCESS" ? props.setUser(true) : setError({
                    state: true,
                    message: "მეილი ან პაროლი არასწორია!"
                })
            })
    }


    return (
        <div className="loginContainer">
            {error.state && error.message ? <p className="login-error">{error.message}</p> : null}
            <form>
                <div className="form-group">
                    <label>მეილი</label>
                    <input name='username' type="text" ref={emailRef} autoComplete ="on"/>
                </div>
                <div className="form-group">
                    <label>პაროლი</label>
                    <input name='password' type="password" ref={passwordRef} autoComplete ="on"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="შესვლა" onClick={clickHandler} />
                </div>
            </form>
        </div>
    )
}
