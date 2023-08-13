import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import NewPeepForm from './Components/NewPeepForm'
import PeepFeed from './Components/PeepFeed'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='container'>
                <Header />
                <div className="container">
                    <NewPeepForm />
                    <PeepFeed />

                </div>
            </div>



        </>
    )
}

export default App
