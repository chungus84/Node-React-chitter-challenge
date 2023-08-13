import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import NewPeepForm from './Components/NewPeepForm'
import PeepFeed from './Components/PeepFeed'
import testPeeps from './assets/testPeeps.json';

function App() {
    // const [count, setCount] = useState(0)
    // console.log(testPeeps);

    return (
        <>
            <div className='container'>
                <Header />
                <div className="container-fluid d-flex flex-column justify-content-center">
                    <NewPeepForm />
                    <PeepFeed peeps={testPeeps} />

                </div>
            </div>



        </>
    )
}

export default App
