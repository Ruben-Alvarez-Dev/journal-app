import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";

import { useForm } from "../../hooks/useForm";

import { useDispatch } from "react-redux";
import { setError, removeError } from "../../actions/ui";


export const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    
    const [formValues, handleInputChange ] = useForm({
        name: "Ruben",
        email: "hola@yo.com",
        password: "123456",
        password2: "123456"
    })
    
    const { name, email, password, password2 } = formValues;
    
    const handleRegister = (e) => {
        e.preventDefault();
        if ( isFormValid() ) {
            console.log("Formulario correcto");
        }
    }

    const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError("Name is required") );
            
            return false;

        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError("Email is not valid") );
            return false;

        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError("Incomplete or too shor password") );
            return false;
        }
        dispatch( removeError() );        
        return true
    }


    return (
      <div>
           <h3 className="auth__title">Register</h3>
        
        <form onSubmit={ handleRegister }>
            
            <div className="auth__alert-error">
                <p>ERROR</p>
            </div>
            
            <input 
                className="auth__input"
                type="text" 
                placeholder="Name" 
                name="name" 
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange}
                />
            <input 
                className="auth__input" 
                type="text" 
                placeholder="Email" 
                name="email" 
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange}
                />
            <input 
                className="auth__input" 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={ password }
                onChange={ handleInputChange}
                />
            <input 
                className="auth__input" 
                type="password" 
                placeholder="Confirm" 
                name="password2" 
                value={ password2 }
                onChange={ handleInputChange}
                />
            
            <button className="btn btn-primary btn-block mb-5"  
                disabled={ false } 
                type="submit"
                >
                Register
            </button>
            
            
            <Link className="link" to="/auth/login">
                Already registered?
            </Link>
        </form>
      </div>
  );
  }
  