import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Peep from "./Peep"
import PeepModel from './utils/Peep.model.js';

const PeepFeed = ({ peeps }) => {


    const peepData = peeps.peeps

    // console.log(peeps.peeps);

    // for (const user of peepData) {
    //     user.peeps.forEach(peep => console.log(peep.message));
    // }
    // console.log(peepData);

    // peepData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Peeps are loading...` });

    useEffect(() => {
        const { error } = peeps;
        if (error?.length) {
            return setDataStatus({ name: `error`, message: error });
        }
        setDataStatus({ name: `loading`, message: `Peeps are loading...` })

    }, [peeps]);

    const feedThePeeps = () => {

        if (peepData?.length > 0) {
            let displayPeeps = [];
            for (const user of peepData) {

                displayPeeps.push(user.peeps.map(peep => {
                    const newPeep = new PeepModel(peep._id, peep.message, peep.createdAt, user.userName)
                    return <Peep peep={newPeep} key={newPeep._id} />
                }))

            }
            const flattenArray = displayPeeps.flat();
            // console.log(flattenArray[0].props.peep);
            flattenArray.sort((a, b) => new Date(b.props.peep.createdAt) - new Date(a.props.peep.createdAt))
            // console.log(flattenArray);
            return flattenArray

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
    peeps: PropTypes.shape({
        error: PropTypes.string,
        peep: PropTypes.array
    }



    ),
}



export default PeepFeed
