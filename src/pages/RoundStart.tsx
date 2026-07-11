import { useGameState } from "../hooks/useGameState"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getRandom } from "../utils/random"
import './RoundStart.css'

export function RoundStart() {
    const { gameState, setGameState, resetGame, resetMatch } = useGameState()
    const [countdown, setCountdown] = useState(3)
    const navigate = useNavigate()

    useEffect(() => {
        if (gameState.starterIndex === null) {
            const randomStarter = getRandom(gameState.players.length)
            setGameState(prev => ({ ...prev, starterIndex: randomStarter }))
        }
    }, [gameState.starterIndex, gameState.players.length, setGameState])

    useEffect(() => {
        if (countdown === 0) {
            return
        } 

        const timer = setTimeout(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => clearTimeout(timer)
    }, [countdown])

    const showStarter = countdown === 0

    const starterName = gameState.starterIndex !== null
        ? gameState.players[gameState.starterIndex]
        : ''

    function handleResetMatch() {
        resetMatch()
        navigate('/themes')
    }

    function handleResetGame() {
        resetGame()
        navigate('/')
    }

    return (
        <div className="round-start-page">
            {!showStarter ? (
                <h1 className="countdown">{countdown}</h1>
            ) : (
                <>
                    <h1 className="starter-name">{starterName} starts!</h1>

                    <div className="buttons-container">
                        <button className="continue-button" onClick={handleResetMatch}>
                            Reset Match
                        </button>
                        <button className="continue-button" onClick={handleResetGame}>
                            Reset Game
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}