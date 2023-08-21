import PropTypes from 'prop-types';
import NewPeepForm from "./Components/NewPeepForm.jsx";
import PeepFeed from "./Components/PeepFeed.jsx";
import LoginButton from './Components/LoginButton.jsx';
import SignUpButton from './Components/SignUpButton.jsx';
import LogoutButton from './Components/LogoutButton.jsx';


const PeepPage = ({ peepFunc, data, user, login, logoutFunc }) => {

    const { peeps, error } = data

    const { userName } = user

    return (
        <div className="container-fluid d-flex flex-column justify-content-center">
            <div className="d-flex flex-row justify-content-center">
                {!login && <> <LoginButton /> <SignUpButton /></>}
                {login && <LogoutButton logoutFunc={logoutFunc} />}
            </div>

            <NewPeepForm addPeep={peepFunc} user={{ userName }} login={login} />
            <PeepFeed peeps={{ peeps, error }} />

        </div>
    )
}

PeepPage.propTypes = {
    peepFunc: PropTypes.func,
    data: PropTypes.object,
    user: PropTypes.object,
    login: PropTypes.bool,
    logoutFunc: PropTypes.func
}

export default PeepPage
