import React, { useContext } from 'react';

import { signInWithGoogle } from '../firebase'
import { AuthContext } from '../AppContext';
export default function Login() {
    const user = useContext(AuthContext)
    return (
        <div className="login-buttons flex flex-row h-screen justify-center items-center p-40 ">
            <button className="login-provider-button flex-col flex justify-center items-center" onClick={signInWithGoogle} >
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                <span> Continue with Google</span>
            </button>
        </div>
    );
}