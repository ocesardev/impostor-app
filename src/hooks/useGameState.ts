import { useState, useEffect } from "react";
import type { GameState } from "../types/game";

const STORAGE_KEY = 'gameState'

const initialState: GameState = {
    players: [],
    theme: '',
    word: '',
    impostorIndex: -1,
    revealIndex: 0,
    starterIndex: null,
    phase: 'players',
}

export function useGameState() {
    const [gameState, setGameState] = useState<GameState>(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : initialState
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState))
    }, [gameState])

    function resetMatch() {
        setGameState(prev => ({
            ...initialState,       
            players: prev.players, 
            phase: 'theme',
        }))
    }

    function resetGame() {
        setGameState(initialState)
    }

    return { gameState, setGameState, resetMatch, resetGame }
}