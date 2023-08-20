import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './Components/Header.jsx'
import NewPeepForm from './Components/NewPeepForm'
import PeepFeed from './Components/PeepFeed'


import { addPeep, getPeeps, addUser } from '../asyncFunctions/peepAPICalls.js'
import { checkLogin } from './Components/utils/authenticationHelpers.js';

import SignUpPage from './SignUpPage';
import PeepPage from './PeepPage';
import LoginPage from './LoginPage';



function App() {

    let userArray = [];

    const [peeps, setPeeps] = useState([]);
    const [error, setError] = useState({ type: ``, message: `` });
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({

        userName: ``,

    })


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
    const addPeepData = async (newPeep, user) => {
        console.log(`Adding a new peeps`);
        const data = await addPeep(newPeep, user);
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

    const handleLogin = async ({ email, password }) => {
        const response = await checkLogin({ email, password })

        setLoggedIn(response.status);
        const { userName } = response.user
        setUser({ ...user, userName })

        userArray.push(response.user)



    }

    useEffect(() => {
        console.log("This is loggedIn " + loggedIn);
        console.log(`User is this: ${user.userName}`);
        getPeepsHandler()
    }, [loggedIn, user])







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
                <h3> WHi There {user.userName}</h3>

                <Routes>
                    <Route path="/" element={<PeepPage peepFunc={addPeepData} data={{ peeps, error: error.message }} user={user} />} />
                    <Route path="/sign-up" element={<SignUpPage addUserFunc={addUserHandler} />} />
                    <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />

                </Routes>

                {/* <PeepFeed peeps={testPeeps} /> */}


            </div>



        </>
    )
}



export default App
