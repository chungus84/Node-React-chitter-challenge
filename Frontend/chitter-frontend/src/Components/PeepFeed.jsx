import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Peep from "./Peep"
import PeepModel from './utils/Peep.model.js';

const PeepFeed = ({ data }) => {

    // console.log(data.peeps);

    const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Peeps are loading...` });

    useEffect(() => {
        const { error } = data;
        if (error?.length) {
            return setDataStatus({ name: `error`, message: error });
        }
        setDataStatus({ name: `loading`, message: `Peeps are loading...` })

    }, [data]);

    const feedThePeeps = () => {
        const { peeps } = data;
        // console.log((peeps));
        if (peeps?.length > 0) {
            const displayPeeps = peeps.map(peep => {
                const peeper = new PeepModel(peep._id, peep.message);
                return <Peep peep={peeper} key={peeper._id} />
            })
            return displayPeeps;
        }
    }


    return (
        <>
            <h2>Peep Feed</h2>
            <div className="container-fluid" style={{ width: "50%" }} >
                {feedThePeeps()}
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
