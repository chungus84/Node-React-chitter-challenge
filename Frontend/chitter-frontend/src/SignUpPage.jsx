import Header from "./Components/Header"

const SignUpPage = () => {
    return (
        <>
            <div className="container" style={{ width: "50%" }} >
                <form>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="fNameText"> First Name:</label>
                            <input type="text" name="fName" id="fNameText" className="form-control" placeholder="First Name" required />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="lNameText"> Surname:</label>
                            <input type="text" name="lName" id="lNameText" className="form-control" placeholder="Surname" required />
                        </div>
                    </div>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="emailText">Email:</label>
                            <input type="email" name="email" id="emailText" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="userNameText">UserName: </label>
                            <input type="text" name="userName" id="userNameText" className="form-control" placeholder="UserName" required />
                        </div>
                    </div>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <label htmlFor="passwordText">Password:</label>
                            <input type="password" name="password" id="passwordText" className="form-control" placeholder="Password" required />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="confirmPasswordText">Confirm Password:</label>
                            <input type="password" name="password" id="confirmPasswordText" className="form-control" placeholder="Confirm Password" required />
                        </div>
                    </div>
                    <div className="row justify-content-center text-start my-3">
                        <div className="form-group col-md-5">
                            <input type="submit" className="form-control btn btn-primary" value="Submit" />
                        </div>

                    </div>

                </form>

            </div>


        </>

    )
}

export default SignUpPage
