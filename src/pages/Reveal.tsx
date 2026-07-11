import { useState } from "react"
import { useGameState } from "../hooks/useGameState"
import { useNavigate } from "react-router-dom"
import './Reveal.css'

export function Reveal() {
    const [isRevealed, setIsRevealed] = useState(false)
    const { gameState, setGameState } = useGameState()
    const navigate = useNavigate()

    const currentPlayer = gameState.players[gameState.revealIndex]
    const isImpostor = currentPlayer === gameState.players[gameState.impostorIndex]

    function handleNext() {
        const isLastPlayer = gameState.revealIndex + 1 === gameState.players.length

        setIsRevealed(false)

        setTimeout(() => {
            if (isLastPlayer) {
                setGameState(prev => ({ ...prev, phase: 'roundStart' }))
                navigate('/round-start')
            } else {
                setGameState(prev => ({ ...prev, revealIndex: prev.revealIndex + 1 }))
            }
        }, 250)

        
    }
    
    function handleReset() {
        setIsRevealed(false)
        setGameState(prev => ({...prev, revealIndex: 0}))
    }
    
    return (
        <div className="reveal-page">
            <div className="reveal-container">
                <div className="reveal-back" onClick={() => setIsRevealed(!isRevealed)}>
                    <p className="reveal-role">{isImpostor ? 'IMPOSTOR' : gameState.word}</p>
                </div>

                <div
                    className={isRevealed ? 'reveal-front revealed' : 'reveal-front'}
                    onClick={() => setIsRevealed(!isRevealed)}
                >
                    <div className="reveal-content">
                        <h2>{currentPlayer}</h2>
                        <p>Toque para revelar</p>
                    </div>
                </div>
            </div>

            <p className="reveal-instruction">Pass the device to the next player</p>

            <div className="reveal-actions">
                <button className="next-reveal-button" onClick={() => handleNext()}>Next</button>
                <button className="reset-button" onClick={() => handleReset()}>Reset</button>
            </div>
        </div>
    )
}