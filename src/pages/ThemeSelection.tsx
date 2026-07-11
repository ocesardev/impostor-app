import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameState } from '../hooks/useGameState'
import { themes } from '../data/themes'
import { getRandom } from '../utils/random'
import './ThemeSelection.css'

export function ThemeSelection() {
    const { gameState, setGameState } = useGameState()
    const navigate = useNavigate()
    const [selectedThemes, setSelectedThemes] = useState<string[]>([])


    function toggleTheme(themeName: string) {
        setSelectedThemes(prev =>
            prev.includes(themeName)
                ? prev.filter(name => name !== themeName)
                : [...prev, themeName]
        )
    }

    function handleAdvance() {
        if (selectedThemes.length === 0) {
            alert('Select at least one theme')
            return
        }
        
        const wordPool = themes
            .filter(theme => selectedThemes.includes(theme.name))
            .flatMap(theme => theme.words)

        const randomWord = wordPool[getRandom(wordPool.length)]
        const randomImpostorIndex = getRandom(gameState.players.length)

        setGameState(prev => ({
            ...prev,
            theme: selectedThemes.join(', '),
            word: randomWord,
            impostorIndex: randomImpostorIndex,
            phase: 'reveal'
        }))

        navigate('/reveal')
    }       

    

    return (
        <div className="theme-page">
            <h1 className="theme-title">Select themes</h1>
            <p className="theme-subtitle">Select one or more themes to be drawn</p>

            <div className="theme-grid">
                {themes.map(theme => (
                    <button
                        key={theme.name}
                        className={selectedThemes.includes(theme.name) ? 'theme-card selected' : 'theme-card'}
                        onClick={() => toggleTheme(theme.name)}
                    >
                        {theme.name}
                    </button>
                ))}
            </div>

            <span className="selected-count">
                <strong>{selectedThemes.length}</strong> Theme(s) Selected
            </span>

            <button className="advance-button" onClick={handleAdvance} disabled={selectedThemes.length === 0}>
                Next
            </button>
        </div>
    )
}