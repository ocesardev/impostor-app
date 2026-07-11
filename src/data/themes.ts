export interface Theme {
  name: string;
  words: string[];
}

export const themes: Theme[] = [
  {
    name: 'Animais',
    words: [
      'Elefante', 'Girafa', 'Leão', 'Tigre', 'Macaco',
      'Crocodilo', 'Pinguim', 'Canguru', 'Zebra', 'Golfinho',
      'Tubarão', 'Águia', 'Coruja', 'Camaleão', 'Preguiça',
    ],
  },
  {
    name: 'Comidas',
    words: [
      'Feijoada', 'Pizza', 'Lasanha', 'Churrasco', 'Sushi',
      'Pastel', 'Coxinha', 'Brigadeiro', 'Pão de queijo', 'Feijão tropeiro',
      'Moqueca', 'Tapioca', 'Acarajé', 'Empada', 'Vatapá',
    ],
  },
  {
    name: 'Profissões',
    words: [
      'Médico', 'Professor', 'Bombeiro', 'Advogado', 'Cozinheiro',
      'Engenheiro', 'Policial', 'Piloto', 'Cabeleireiro', 'Veterinário',
      'Eletricista', 'Jornalista', 'Dentista', 'Arquiteto', 'Motorista',
    ],
  },
  {
    name: 'Filmes e Séries',
    words: [
      'Titanic', 'Matrix', 'Vingadores', 'Star Wars', 'Harry Potter',
      'Friends', 'Stranger Things', 'La Casa de Papel', 'O Poderoso Chefão', 'Batman',
      'Homem-Aranha', 'Jurassic Park', 'O Senhor dos Anéis', 'Toy Story', 'Coringa',
    ],
  },
  {
    name: 'Lugares',
    words: [
      'Praia', 'Escola', 'Hospital', 'Aeroporto', 'Shopping',
      'Cinema', 'Academia', 'Restaurante', 'Igreja', 'Biblioteca',
      'Estádio', 'Floresta', 'Deserto', 'Cemitério', 'Fazenda',
    ],
  },
  {
    name: 'Objetos do dia a dia',
    words: [
      'Celular', 'Guarda-chuva', 'Escova de dente', 'Chave', 'Óculos',
      'Relógio', 'Mochila', 'Carteira', 'Fone de ouvido', 'Controle remoto',
      'Tesoura', 'Espelho', 'Travesseiro', 'Isqueiro', 'Cadeado',
    ],
  },
  {
    name: 'Esportes',
    words: [
      'Futebol', 'Vôlei', 'Basquete', 'Natação', 'Tênis',
      'Surfe', 'Skate', 'Boxe', 'Judô', 'Ciclismo',
      'Corrida', 'Handebol', 'Xadrez', 'Capoeira', 'Golfe',
    ],
  },
]