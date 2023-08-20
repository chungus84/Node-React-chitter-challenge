
const LogoutButton = ({ logoutFunc }) => {




    return (
        <div>
            <button className="btn btn-outline-warning rounded-pill mx-2" onClick={logoutFunc}>logout</button>
        </div>
    )
}

export default LogoutButton
