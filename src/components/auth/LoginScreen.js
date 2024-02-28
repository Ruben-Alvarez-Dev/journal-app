import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {
  
  const dispatch = useDispatch();
  
  const [ formValues, handleInputChanges ] = useForm({
    email: "ruben@gmail.com",
    password: "123456"
  })
  
  const { email, password } = formValues;
  
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(2222, "sss"))
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
            
            <button className="btn btn-primary btn-block"  disabled={ false } type="submit">Login</button>
            
            <div className="auth__social-networks">
                <p>Login with social networks</p>
                <div className="google-btn">
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
