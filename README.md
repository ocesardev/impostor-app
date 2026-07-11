# 🕵️ Impostor App

Um jogo de descobrir o impostor, feito para ser jogado com todos os jogadores reunidos em volta de um único dispositivo (pass-and-play).

## 🎮 Como funciona

1. **Cadastre os jogadores** — adicione o nome de cada pessoa que vai jogar.
2. **Escolha os temas** — selecione um ou mais temas de palavras para o sorteio.
3. **Revelação** — o app sorteia uma palavra e escolhe um jogador aleatório para ser o impostor. Cada jogador, na sua vez, revela sua função em segredo (passando o dispositivo adiante).
4. **Início da rodada** — o app sorteia quem começa a rodada.
5. **Jogo ao vivo** — fora do app, cada jogador diz uma palavra relacionada ao tema sorteado. Os jogadores normais tentam descobrir quem é o impostor; o impostor tenta descobrir a palavra secreta.

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (`HashRouter`)
- `localStorage` para persistência de dados (sem backend, sem necessidade de internet)

## 🚀 Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/impostor-app.git

# Entre na pasta do projeto
cd impostor-app

# Instale as dependências
npm install

# Rode o projeto em modo de desenvolvimento
npm run dev
```

O app estará disponível em `http://localhost:5173`.

## 📦 Build de produção (Não funciona ainda)

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/`.

## 📁 Estrutura do projeto

```
src/
├── pages/              # Telas do jogo (Home, Players, ThemeSelection, Reveal, etc.)
├── data/
│   └── themes.ts        # Temas e palavras disponíveis para sorteio
├── hooks/
│   └── useGameState.ts  # Hook central de estado do jogo (sincronizado com localStorage)
├── types/
│   └── game.ts           # Tipos TypeScript (GameState, GamePhase)
|
└── App.tsx               # Definição das rotas
```

## 🗺️ Fluxo de telas

```
Home → Players → ThemeSelection → Reveal → RoundStart → GameScreen → Result
```

## 📝 Notas

- Não há conexão com servidor ou entre dispositivos — o jogo é pensado para ser jogado em um único aparelho, compartilhado fisicamente entre os jogadores.
- Todo o progresso da partida é salvo automaticamente no `localStorage` do navegador.

## 📄 Licença

Este projeto é de uso livre para fins pessoais e educacionais.