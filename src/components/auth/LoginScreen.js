import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const LoginScreen = () => {
  return (
    <div>
        <h3 className="auth__title">Login</h3>
        <form>
            <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off"/>
            <input className="auth__input" type="password" placeholder="Password" name="password" />
            
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
            <Link to="/auth/register">
                Create new account
            </Link>
        </form>
    </div>
);
}
