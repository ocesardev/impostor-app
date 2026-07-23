# 🕵️ Impostor App

Um jogo de descobrir o impostor, desenvolvido em **React + TypeScript**, pensado para ser jogado com todos os participantes reunidos em torno de um único dispositivo (pass-and-play).

## 🌐 Jogue agora

**Acesse a aplicação:**

👉 **https://ocesardev.github.io/impostor-app/**

Não é necessário instalar nada. Basta abrir o link no navegador e começar a jogar.

---

## 🎮 Como funciona

1. **Cadastre os jogadores** — adicione o nome de cada participante.
2. **Escolha os temas** — selecione um ou mais temas para o sorteio.
3. **Revelação** — o aplicativo sorteia uma palavra e escolhe aleatoriamente um impostor. Cada jogador revela sua função em segredo e passa o dispositivo para o próximo.
4. **Início da rodada** — o app sorteia quem começará falando.
5. **Discussão** — cada jogador diz uma palavra relacionada ao tema. Os jogadores normais tentam identificar o impostor, enquanto o impostor tenta descobrir a palavra secreta.

---

## ✨ Funcionalidades

* Cadastro de jogadores
* Seleção de múltiplos temas
* Escolha aleatória do impostor
* Sorteio automático do primeiro jogador
* Persistência automática da partida utilizando `localStorage`
* Funciona totalmente offline após o carregamento inicial
* Não utiliza backend nem banco de dados

---

## 🛠️ Tecnologias

* React
* TypeScript
* Vite
* React Router (`HashRouter`)
* localStorage

---

## 📂 Estrutura do projeto

```text
src/
├── pages/               # Telas do jogo
├── data/
│   └── themes.ts        # Temas e palavras
├── hooks/
│   └── useGameState.ts  # Estado global do jogo
├── types/
│   └── game.ts          # Tipagens TypeScript
├── App.tsx              # Rotas da aplicação
└── main.tsx             # Entrada da aplicação
```

---

## 🗺️ Fluxo do jogo

```text
Home
  ↓
Players
  ↓
ThemeSelection
  ↓
Reveal
  ↓
RoundStart
  ↓
GameScreen
  ↓
Result
```

---

## 💾 Armazenamento

Toda a partida é salva automaticamente no `localStorage` do navegador.

Isso significa que:

* não existe servidor;
* não é necessário criar conta;
* nenhuma informação é enviada para a internet.

---

## 📄 Licença

Este projeto é de uso livre para fins pessoais e educacionais.
