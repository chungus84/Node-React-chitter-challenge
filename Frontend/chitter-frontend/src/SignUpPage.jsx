import PropTypes from 'prop-types';
import Header from "./Components/Header"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SignUpPage = ({ addUserFunc, loginFunc, setUserFunc }) => {

    const navigate = useNavigate();


    const [userCred, setUserCred] = useState({
        fName: ``,
        lName: ``,
        email: ``,
        userName: ``,
        password: ``
    })


    const handleChange = ({ name, value }) => {
        setUserCred({ ...userCred, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newUser = { ...userCred };

        try {

            addUserFunc(newUser);
            loginFunc({ email: newUser.email, password: newUser.password });
            setUserFunc({ userName: newUser.userName });
            navigate('/');
        } catch (error) {
            navigate('/sign-up')
        }


    }

    return (
        <>
            <div className="container" style={{ width: "50%" }} >
                <form action='/' method='post' onSubmit={e => handleSubmit(e)} >
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="fNameText"> First Name:</label>
                            <input type="text" name="fName" id="fNameText" value={userCred.fName} onChange={e => handleChange(e.target)} className="form-control" placeholder="First Name" required />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="lNameText"> Surname:</label>
                            <input type="text" name="lName" id="lNameText" value={userCred.lName} onChange={e => handleChange(e.target)} className="form-control" placeholder="Surname" required />
                        </div>
                    </div>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="emailText">Email:</label>
                            <input type="email" name="email" id="emailText" value={userCred.email} onChange={e => handleChange(e.target)} className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="userNameText">UserName: </label>
                            <input type="text" name="userName" id="userNameText" value={userCred.userName} onChange={e => handleChange(e.target)} className="form-control" placeholder="UserName" required />
                        </div>
                    </div>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="passwordText">Password:</label>
                            <input type="password" name="password" id="passwordText" value={userCred.password} onChange={e => handleChange(e.target)} className="form-control" placeholder="Password" required />
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
    addUserFunc: PropTypes.func.isRequired,
    loginFunc: PropTypes.func.isRequired,
    setUserFunc: PropTypes.func.isRequired
}



export default SignUpPage
