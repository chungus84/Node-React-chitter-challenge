import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';

const NewPeepForm = () => {

    const [peepMessage, setPeepMessage] = useState(``);

    // useEffect(() => {
    //     if (peep) {
    //         setPeepMessage(peep.message)
    //     }
    // })

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     submitAction()
    // }


    return (
        <form className="form-group " method="post" action="/">
            <label htmlFor="peepTextArea">What is on your mind?</label>
            <textarea className="form-control" id="peepTextArea" rows="4" cols="40" name="peepText" style={{ resize: 'none' }}></textarea>
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
    )
}

export default NewPeepForm
