import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";

export const LoginScreen = () => {
  
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);
  
  const [ formValues, handleInputChanges ] = useForm({
    email: "ruben@gmail.com",
    password: "123456"
  })
  
  const { email, password } = formValues;
  
  const handleLogin = (e) => { 
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password))
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }


    return (
    <div>
        <h3 className="auth__title">Login</h3>
        <form onSubmit={handleLogin}>
            <input 
                className="auth__input" 
                type="text" 
                placeholder="Email" 
                name="email" 
                autoComplete="off"
                value={ email }
                onChange={ handleInputChanges }
                />

            <input 
                className="auth__input" 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={ password }
                onChange={ handleInputChanges }
                />
            
            <button 
                className="btn btn-primary btn-block"  
                type="submit"
                disabled={ loading } 
                >
                    Login
            </button>
            
            <div className="auth__social-networks">
                <p>Login with social networks</p>
                <div className="google-btn" onClick={ handleGoogleLogin }>
                    <div className="google-icon-wrapper">
                    <img className="google-icon" src="/google.png"/>
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div>
            <Link className="link" to="/auth/register">
                Create new account
            </Link>
        </form>
    </div>
);
}
