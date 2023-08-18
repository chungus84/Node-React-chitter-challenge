import Header from "./Components/Header"

const SignUpPage = () => {
    return (
        <>
            <form className="form-group">
                <div className="row">
                    <div className="col">
                        <label htmlFor="firstNameText">First Name:

                        </label>
                        <input className="form-control" type="text" name="fName" id="firstNameText" />

                    </div>
                    <div className="col">
                        <label htmlFor="lastNameText">Surname:

                        </label>
                        <input className="form-control" type="text" name="lName" id="lastNameText" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="emailBox"> email:
                        <input type="email" className="form-control" name="userEmail" id="emailBox" />
                    </label>
                </div>

            </form>

        </>

    )
}

export default SignUpPage
