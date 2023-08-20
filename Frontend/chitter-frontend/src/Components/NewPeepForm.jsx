import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';

const NewPeepForm = ({ addPeep, user }) => {



    const { userName } = user

    console.log(userName);

    const [peepMessage, setPeepMessage] = useState({
        message: ``
    });

    // useEffect(() => {

    //     if (peep?.length > 0) {
    //         setPeepMessage(peep.message)
    //     }
    // })

    const handleChange = ({ name, value }) => {
        // console.log(req.body);
        console.log(peepMessage);
        // console.log(user);

        setPeepMessage({ ...peepMessage, [name]: value })

        // submitAction(peepMessage);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newPeep = { ...peepMessage };

        addPeep(newPeep, userName);
    }

    return (
        <form className="form-group " method="post" onSubmit={e => handleSubmit(e)}>
            <label htmlFor="peepTextArea">What is on your mind?</label>
            <textarea className="form-control" id="peepTextArea" rows="4" cols="40" name="message" value={peepMessage.message} style={{ resize: 'none' }} onChange={e => handleChange(e.target)}></textarea>
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
    )
}

NewPeepForm.propTypes = {
    addPeep: PropTypes.func.isRequired,
}

export default NewPeepForm
