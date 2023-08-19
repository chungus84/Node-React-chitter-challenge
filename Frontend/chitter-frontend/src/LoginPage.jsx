import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ handleLogin }) => {

    const [login, setLogin] = useState({
        email: {
            value: ``,
        },
        password: {
            value: ``,
        }
    })

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: { ...login, value } });
    }


    const loginSubmitHandler = e => {
        e.preventDefault();
        handleLogin({ email: login.email.value, password: login.password.value })
        navigate('/');
    }

    return (
        <>
            <h2>Please Login</h2>
            <div className="container" onSubmit={loginSubmitHandler} style={{ width: '50%' }}>
                <form>
                    <div className="form-group row my-2">
                        <label htmlFor="emailText" className="col-2">Email: </label>
                        <input type="email" name="email" id="emailText" placeholder="your@email.com" className="form-control col-md-auto" value={login.email.value} onChange={handleChange} />
                    </div>
                    <div className="form-group row my-2">
                        <label htmlFor="passwordText" className="col-2">Password: </label>
                        <input type="password" name="password" id="passwordText" placeholder="Password" className="form-control col-md-auto" value={login.password.value} onChange={handleChange} />
                    </div>

                    <input type="submit" value="Login" />
                </form>

            </div>
        </>

    )
}

export default LoginPage
