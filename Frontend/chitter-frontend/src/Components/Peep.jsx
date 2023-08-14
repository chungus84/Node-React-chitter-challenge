import PropTypes from 'prop-types';
import PeepModel from './utils/Peep.model.js';

const Peep = ({ peep: { message } }) => {
    // console.log(peep);
    return (
        <div className="card my-3 peep-card" data-testid="peeping">
            <div className="card-body">
                <p>{message}</p>
            </div>
        </div>
    )
}

Peep.propTypes = {
    peep: PropTypes.instanceOf(PeepModel)
}

export default Peep
