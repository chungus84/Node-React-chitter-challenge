import PropTypes from 'prop-types';
import Header from "./Components/Header"
import { useState, useEffect } from 'react';

const SignUpPage = ({ addUserFunc }) => {

    const [user, setUser] = useState({
        fName: ``,
        lName: ``,
        email: ``,
        userName: ``,
        password: ``
    })


    const handleChange = ({ name, value }) => {
        console.log(user);
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newUser = { ...user };
        console.dir(newUser);
        addUserFunc(newUser);
    }

    return (
        <>
            <div className="container" style={{ width: "50%" }} >
                <form method='post' onSubmit={e => handleSubmit(e)} >
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="fNameText"> First Name:</label>
                            <input type="text" name="fName" id="fNameText" value={user.fName} onChange={e => handleChange(e.target)} className="form-control" placeholder="First Name" required />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="lNameText"> Surname:</label>
                            <input type="text" name="lName" id="lNameText" value={user.lName} onChange={e => handleChange(e.target)} className="form-control" placeholder="Surname" required />
                        </div>
                    </div>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="emailText">Email:</label>
                            <input type="email" name="email" id="emailText" value={user.email} onChange={e => handleChange(e.target)} className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="userNameText">UserName: </label>
                            <input type="text" name="userName" id="userNameText" value={user.userName} onChange={e => handleChange(e.target)} className="form-control" placeholder="UserName" required />
                        </div>
                    </div>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="passwordText">Password:</label>
                            <input type="password" name="password" id="passwordText" value={user.password} onChange={e => handleChange(e.target)} className="form-control" placeholder="Password" required />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="confirmPasswordText">Confirm Password:</label>
                            <input type="password" name="password" id="confirmPasswordText" className="form-control" placeholder="Confirm Password" required />
                        </div>
                    </div>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <input type="submit" className="form-control btn btn-primary" value="Sign Up" />
                        </div>

                    </div>

                </form>

            </div>


        </>

    )
}

SignUpPage.propTypes = {
    addUserFunc: PropTypes.func.isRequired
}



export default SignUpPage