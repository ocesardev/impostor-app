import './Home.css'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const navigate = useNavigate()

    function handleStart() {
        navigate('/players')
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Welcome to Impostor App!</h1>
                <p>A game to suspect and laugh! Who is the impostor?</p>
            </div>

            <div className="button-container">
                <button className="start-button" onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}