import PropTypes from 'prop-types';
import Peep from "./Peep"

const PeepFeed = ({ peeps }) => {
    console.log(peeps);
    const results = peeps.map(peep => <Peep key={peep._id} peepData={peep} />)
    return (
        <>
            <h2>Peep Feed</h2>
            <div className="container-fluid" style={{ width: "50%" }} >
                {results}
            </div >
        </>

    )
}
PeepFeed.defaultProps = {
    peeps: []
}

PeepFeed.propTypes = {
    peeps: PropTypes.arrayOf(
        PropTypes.object
    ),
}



export default PeepFeed
