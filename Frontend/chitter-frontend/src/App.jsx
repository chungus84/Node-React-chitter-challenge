import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './Components/Header.jsx'
import NewPeepForm from './Components/NewPeepForm'
import PeepFeed from './Components/PeepFeed'


import { addPeep, getPeeps, addUser } from '../asyncFunctions/peepAPICalls.js'
import SignUpPage from './SignUpPage';
import PeepPage from './PeepPage';

function App() {

    const [peeps, setPeeps] = useState([]);
    const [error, setError] = useState({ type: ``, message: `` });


    const getPeepsHandler = async () => {
        const apiCallResult = await getPeeps();
        // console.log(apiCallResult);
        if (apiCallResult?.error) {
            const errorObject = { ...apiCallResult.error };
            errorObject.message = `There was a problem with getting Peeps: ${apiCallResult.error.message}`;
            setError(errorObject)
        }
        const peeps = apiCallResult?.peeps ? apiCallResult.peeps : []
        // console.log(peeps);
        setPeeps(peeps)
    }
    const addPeepData = async newPeep => {
        console.log(`Adding a new peeps`);
        const data = await addPeep(newPeep);
        if (data instanceof Error) {
            console.error(data.message);
        } else {
            console.log(`Peep added`);
            // setPeeps([...peeps, data]);
            getPeepsHandler();
        }
    }

    const addUserHandler = async user => {
        console.log(`Adding new User`);
        const apiCallResult = await addUser(user);
        if (user instanceof Error) {
            console.log(data.message);
        } else {
            console.log(`New User Added`);
        }
    }

    useEffect(() => {
        getPeepsHandler()
    }, [])







    // const submitPeepHandler = async peep => {
    //     const externalDataCallResult = await submitPeep(peep);
    //     console.log(externalDataCallResult);
    //     if (externalDataCallResult?.error) {
    //         const errorObject = { ...externalDataCallResult.error }
    //         errorObject.message = `There was a problem in submitting your peep: ${externalDataCallResult.error.message}`;
    //         return setError(errorObject);
    //     }
    //     setCreateUpdateStatus(`Peep Submitted`);
    //     getPeepsHandler();

    // }

    return (
        <>
            <div className='container'>
                <Header />

                <Routes>
                    <Route path="/" element={<PeepPage peepFunc={addPeepData} data={{ peeps, error: error.message }} />} />
                    <Route path="/sign-up" element={<SignUpPage addUserFunc={addUserHandler} />} />

                </Routes>

                {/* <PeepFeed peeps={testPeeps} /> */}


            </div>



        </>
    )
}



export default App
