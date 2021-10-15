import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-50 my-5 mx-auto">
            <h2>Please Register</h2>

            <form className="my-4">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <Link to="/login">Already registered?</Link>
        </div>
    );
};

export default Register;