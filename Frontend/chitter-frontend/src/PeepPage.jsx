import PropTypes from 'prop-types';
import NewPeepForm from "./Components/NewPeepForm.jsx";
import PeepFeed from "./Components/PeepFeed.jsx";


const PeepPage = ({ peepFunc, data, user }) => {


    // console.log(user);
    const { peeps, error } = data

    const { userName } = user

    // console.log(user);


    return (
        <div className="container-fluid d-flex flex-column justify-content-center">
            <NewPeepForm addPeep={peepFunc} user={{ userName }} />
            <PeepFeed peeps={{ peeps, error }} />

        </div>
    )
}

PeepPage.propTypes = {
    peepFunc: PropTypes.func,
    data: PropTypes.object,
    user: PropTypes.object
}

export default PeepPage
