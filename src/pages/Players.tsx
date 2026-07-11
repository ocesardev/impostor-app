import { useState } from 'react'
import { useGameState } from '../hooks/useGameState'
import { useNavigate } from 'react-router-dom'
import './Players.css'

export function Players() {
    const navigate = useNavigate()
    const { gameState, setGameState } = useGameState()
    const [name, setName] = useState('')

    function handleAddPlayer() {
        const trimmedName = name.trim()

        if (trimmedName === '') return

        setGameState(prev => ({
            ...prev,
            players: [...prev.players, trimmedName],
        }))

        setName('')
    }

    function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            handleAddPlayer()
        }
    }

    function handleRemovePlayer(indexToRemove: number) {
        setGameState(prev => ({
            ...prev,
            players: prev.players.filter((_, index) => index !== indexToRemove)
        }))
    }

    function handleAdvance() {
        if (gameState.players.length < 3) {
            alert('Add a minimum amount of 3 players')
            return
        }
        
        setGameState(prev => ({
            ...prev,
            phase: 'theme',
        }))
        navigate('/themes')
    }

    return (
        <div className='players-page'>
            <h1>Add new players</h1>
            <p>3 - 10 players</p>
            <h4>Total players: {gameState.players.length}</h4>
            <div className='add-player-form'>
                <input 
                    className='player-input'
                    placeholder="Enter player name" 
                    type="text" 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    onKeyDown={handleEnter}
                />
                <button className='add-player-button' onClick={handleAddPlayer}>+</button>
            </div>

            <ul className='players-list'>
                {gameState.players.map((player, index) => (
                    <div className='player-card'>
                        <li className='player-item' key={index}>
                            {player}
                        </li>
                        <button className='remove-player-button' onClick={() => handleRemovePlayer(index)}>
                            x
                        </button>
                    </div>
                ))}
            </ul>
            
            <button className='next-button' onClick={handleAdvance}>Next</button>
        </div>
    )
}