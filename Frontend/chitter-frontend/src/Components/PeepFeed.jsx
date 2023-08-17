import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Peep from "./Peep"
import PeepModel from './utils/Peep.model.js';

const PeepFeed = ({ data }) => {

    const peepData = data.peeps
    peepData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Peeps are loading...` });

    useEffect(() => {
        const { error } = data;
        if (error?.length) {
            return setDataStatus({ name: `error`, message: error });
        }
        setDataStatus({ name: `loading`, message: `Peeps are loading...` })

    }, [data]);

    const feedThePeeps = () => {

        if (peepData?.length > 0) {
            const displayPeeps = peepData.map(peep => {
                const peeper = new PeepModel(peep._id, peep.message, peep.createdAt);
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
