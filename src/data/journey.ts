/**
 * Linha do tempo, da mais recente para a mais antiga.
 * `period: null` mostra o aviso "data a preencher". Preencha antes de publicar.
 */
export type JourneyItem = {
  period: string | null;
  title: string;
  place: string;
  kind: "trabalho" | "formação" | "curso";
  points: string[];
};

export const journey: JourneyItem[] = [
  {
    period: "Set 2025 – hoje",
    title: "Jovem Aprendiz, estoque",
    place: "Caraigá Veículos Ltda",
    kind: "trabalho",
    points: [
      "Registro de entradas e saídas de mercadorias",
      "Inventário e conferência de estoque",
      "Controle em planilhas Excel",
      "Atendimento a outros setores e a clientes",
    ],
  },
  {
    period: "Em andamento, conclusão prevista em dez 2027",
    title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    place: "Senac",
    kind: "formação",
    points: [
      "Programação orientada a objetos e estruturas de dados em Java",
      "Desenvolvimento de sistemas web com Spring Boot",
      "Redes, arquitetura de computadores e Linux",
    ],
  },
  {
    // TODO: informe o mês/ano do workshop
    period: null,
    title: "Workshop Apple Developer Academy",
    place: "Apple Developer Academy | Senac",
    kind: "curso",
    points: ["Desafio final: RPG de turnos em Swift (está na seção Projetos)"],
  },
];
