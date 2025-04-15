import type { Match } from "./types";

const potentialMatches: Match[] = [
  {
    id: "1",
    name: "Ana Souza",
    description:
      "Desenvolvedora de software apaixonada por inteligência artificial. Gosta de trilhas aos finais de semana.",
    affinityLevel: 0,
    tags: ["Tecnologia", "IA", "Trilhas", "Porto Alegre"],
  },
  {
    id: "2",
    name: "Bruno Lima",
    description:
      "Artista digital especializado em modelagem 3D. Ama visitar exposições de arte e festivais de cinema.",
    affinityLevel: 0,
    tags: ["Arte", "Design 3D", "Cinema", "São Paulo"],
  },
  {
    id: "3",
    name: "Camila Ferreira",
    description:
      "Instrutora de fitness e coach de nutrição. Curte atividades ao ar livre e cozinhar refeições saudáveis.",
    affinityLevel: 0,
    tags: ["Academia", "Nutrição", "Natureza", "São Paulo"],
  },
  {
    id: "4",
    name: "Diego Martins",
    description:
      "Produtor musical e DJ. Apaixonado por música eletrônica e eventos comunitários.",
    affinityLevel: 0,
    tags: ["Música", "Eventos", "Comunidade", "Rio de Janeiro"],
  },
  {
    id: "5",
    name: "Eduarda Costa",
    description:
      "Cientista ambiental envolvida em projetos de sustentabilidade. Gosta de jardinagem e fotografia.",
    affinityLevel: 0,
    tags: ["Meio Ambiente", "Ciência", "Fotografia", "Belo Horizonte"],
  },
  {
    id: "6",
    name: "Felipe Rocha",
    description:
      "Empreendedor focado em tecnologia educacional. Adora ler e jogar xadrez.",
    affinityLevel: 0,
    tags: ["Educação", "Tecnologia", "Leitura", "Rio de Janeiro"],
  },
  {
    id: "7",
    name: "Gabriela Mendes",
    description:
      "Blogueira de viagens que já conheceu mais de 30 países. Apaixonada por intercâmbio cultural e idiomas.",
    affinityLevel: 0,
    tags: ["Viagens", "Escrita", "Idiomas", "Minas Gerais"],
  },
  {
    id: "8",
    name: "Henrique Oliveira",
    description:
      "Desenvolvedor de jogos especializado em games indie. Curte jogos de tabuleiro e romances de fantasia.",
    affinityLevel: 0,
    tags: ["Jogos", "Desenvolvimento", "Fantasia", "Vitória"],
  },
];

// Função para calcular o nível de afinidade com base em interesses e localização
function calculateAffinity(
  userInterest: string,
  userLocation: string,
  match: Match
): number {
  let score = 0;

  // Normaliza os dados para facilitar a comparação
  const interestLower = userInterest.toLowerCase();
  const locationLower = userLocation.toLowerCase();

  // Verifica se o interesse ou a localização do usuário estão nos tags do match
  // e adiciona pontos à pontuação de afinidade
  const hasInterestMatch = match.tags.some(
    (tag) =>
      tag.toLowerCase().includes(interestLower) ||
      interestLower.includes(tag.toLowerCase())
  );

  const hasLocationMatch = match.tags.some(
    (tag) =>
      tag.toLowerCase().includes(locationLower) ||
      locationLower.includes(tag.toLowerCase())
  );

  if (hasInterestMatch) score += 50;
  if (hasLocationMatch) score += 30;

  const randomFactor = Math.floor(Math.random() * 20);
  score += randomFactor;

  // Fator aleatório para simular variação na pontuação
  // O valor mínimo é 30 e o máximo é 98
  return Math.min(Math.max(score, 30), 98);
}

// Função para encontrar os matches com base nos dados do usuário e calcular a afinidade. Retorna os 3 melhores matches.
export function findMatches(userData: {
  name: string;
  interest: string;
  location: string;
}): Match[] {
  const matchesWithAffinity = potentialMatches.map((match) => {
    const affinityScore = calculateAffinity(
      userData.interest,
      userData.location,
      match
    );

    return {
      ...match,
      affinityLevel: affinityScore,
    };
  });

  return matchesWithAffinity
    .sort((a, b) => b.affinityLevel - a.affinityLevel)
    .slice(0, 3);
}
