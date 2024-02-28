import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
/* import firebase from 'firebase'; // Import the 'firebase' package */
import { firebase } from "../firebase/firebase-config"
import { useDispatch } from 'react-redux'; // Import the 'useDispatch' hook from the Redux store
import { login } from '../actions/auth'; // Import the 'login' action from the Redux store

export const AppRouter = () => {
    
    const dispatch = useDispatch(); // Initialize the 'dispatch' function
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            }
        });
    }, []); // Add the missing closing parenthesis for the 'useEffect' hook

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ JournalScreen } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
