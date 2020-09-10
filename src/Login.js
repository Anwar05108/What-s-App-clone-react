import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'


function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    
    return (
        <div className="login">
           <div className="login__container">
             <img
                src="data:image/png;base64,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"
                alt=""
                />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>   

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
           </div>
        </div>
    )
}

export default Login
