import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './Components/Header.jsx'
import NewPeepForm from './Components/NewPeepForm'
import PeepFeed from './Components/PeepFeed'


import { addPeep, getPeeps } from '../asyncFunctions/peepAPICalls.js'

function App() {
    // const [count, setCount] = useState(0)
    // console.log(testPeeps);
    // console.log(import.meta.env.VITE_CHITTERURL);
    const [peeps, setPeeps] = useState([]);
    const [error, setError] = useState({ type: ``, message: `` });
    // const [createUpdateStatus, setCreateUpdateStatus] = useState(``);

    const getPeepsHandler = async () => {
        const apiCallResult = await getPeeps();
        console.log(apiCallResult);
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
            getPeepsHandler();
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
                <div className="container-fluid d-flex flex-column justify-content-center">
                    <Routes>
                        <Route path="/" element={<><NewPeepForm addPeep={addPeepData} /><PeepFeed data={{ peeps, error: error.message }} /></>} />
                    </Routes>

                    {/* <PeepFeed peeps={testPeeps} /> */}

                </div>
            </div>



        </>
    )
}



export default App
