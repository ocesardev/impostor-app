export type GamePhase = "players" | "theme" | "reveal" | "roundStart" | "result";

export interface GameState {
    players: string[];
    theme: string;
    word: string;
    impostorIndex: number;
    revealIndex: number;
    starterIndex: number | null;
    phase: GamePhase;
}