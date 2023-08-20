import PropTypes from 'prop-types';

const LogoutButton = ({ logoutFunc }) => {

    return (
        <div>
            <button className="btn btn-outline-warning rounded-pill mx-2" onClick={logoutFunc}>logout</button>
        </div>
    )
}

LogoutButton.propTypes = {
    logoutFunc: PropTypes.func.isRequired,
}

export default LogoutButton
