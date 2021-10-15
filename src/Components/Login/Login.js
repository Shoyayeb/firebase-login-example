import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="my-5">
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary my-4">Google Sign in</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;