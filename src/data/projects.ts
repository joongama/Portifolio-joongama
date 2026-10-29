/**
 * Projetos exibidos na seção "Projetos". As informações foram tiradas dos
 * repositórios públicos e do README do perfil. Nada aqui é inventado: se um
 * campo não tem fonte, ele fica de fora.
 *
 * Para adicionar uma captura de tela, coloque o arquivo em public/projetos/
 * e preencha `image`. Se a imagem não carregar, a página mostra a ilustração
 * técnica (`visual`) no lugar.
 */
export type ProjectVisual = "stock-flow" | "endpoints" | "grimoire" | "pipeline";

export type Project = {
  id: string;
  title: string;
  context: string;
  status: "concluido" | "em-planejamento";
  summary: string;
  problem: string;
  role?: string;
  features: string[];
  stack: string[];
  details?: { label: string; items: string[] };
  links: { label: string; href: string }[];
  image?: { src: string; alt: string };
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    id: "ecommerce-calcados",
    title: "E-commerce de calçados",
    context: "Projeto acadêmico em equipe, Grupo 9",
    status: "concluido",
    summary:
      "Loja virtual feita em Angular que consome uma API REST simulada com JSON Server.",
    problem:
      "Uma loja precisa vender sem deixar o estoque mentir: o produto reservado no carrinho não pode ser vendido duas vezes, e o item removido precisa voltar para a prateleira.",
    role:
      "Fiquei com a parte de estoque: o CRUD do inventário, os alertas de estoque baixo, a reserva no carrinho com baixa automática, a devolução ao remover um item e o checkout.",
    features: [
      "Cadastro, listagem, edição e exclusão de produtos",
      "Alerta quando o estoque de um produto fica baixo",
      "Reserva no carrinho com baixa automática do estoque",
      "Devolução ao estoque quando o item sai do carrinho",
      "Finalização da compra (checkout)",
    ],
    stack: ["Angular", "TypeScript", "JSON Server", "API REST", "Git em equipe"],
    links: [
      {
        label: "Ver minha branch no GitHub",
        href: "https://github.com/kaua-sousa12/Grupo-9-Cal-ados-Turma-A/tree/joongama",
      },
    ],
    visual: "stock-flow",
  },
  {
    id: "api-dados-pessoais",
    title: "API de dados pessoais",
    context: "Projeto da disciplina de Desenvolvimento de Sistemas Web, Senac",
    status: "concluido",
    summary:
      "API REST em Spring Boot para cadastrar, buscar, alterar e remover pessoas e seus conhecimentos.",
    problem:
      "Um cadastro só é confiável se recusa dados ruins na entrada e responde com clareza quando algo não existe.",
    features: [
      "CRUD completo em /pessoas, com busca por termo",
      "Validação com Bean Validation e uma anotação própria, @SenhasIguais",
      "Respostas HTTP corretas: 201 com Location, 204 na exclusão, 404 com ProblemDetail",
      "Relacionamento muitos-para-muitos entre pessoa e conhecimento com JPA",
      "Duas implementações do serviço: em memória (Map) e com banco (JPA)",
    ],
    stack: ["Java 25", "Spring Boot 4", "Spring Data JPA", "H2", "Bean Validation", "Lombok"],
    details: {
      label: "Conceitos praticados",
      items: [
        "Separação em controller, serviço, DTO, entidade e repositório",
        "Injeção de dependência e troca de implementação pela interface PessoaService",
        "Validador customizado (ConstraintValidator)",
        "Tratamento de exceção com @ExceptionHandler",
      ],
    },
    links: [{ label: "Ver repositório no GitHub", href: "https://github.com/joongama/dados-pessoais" }],
    visual: "endpoints",
  },
  {
    id: "rpg-swift",
    title: "RPG Swift: Academia de Magia",
    context: "Desafio final do workshop Apple Developer Academy | Senac",
    status: "concluido",
    summary:
      "RPG de turnos no terminal. Você é um aprendiz de magia e precisa derrotar quatro criaturas usando os feitiços do grimório.",
    problem:
      "Transformar regras de jogo (dano, custo de mana, recuperação entre batalhas) em classes e fluxos que não quebram com entradas inválidas.",
    features: [
      "Quatro feitiços (Fogo, Água, Terra e Vento), cada um com dano e custo de mana",
      "Quatro inimigos em sequência, do Goblin Feiticeiro ao chefe final, o Lich",
      "Recuperação parcial de vida e mana após cada vitória",
      "Validação da entrada do jogador e dano com aleatoriedade",
    ],
    stack: ["Swift", "POO", "Lógica de programação"],
    details: {
      label: "Próximos passos registrados no README",
      items: [
        "Fraquezas e resistências entre elementos",
        "Inicializadores nas classes",
        "Voltar ao menu depois de uma derrota",
        "Dividir o código em vários arquivos",
      ],
    },
    links: [{ label: "Ver repositório no GitHub", href: "https://github.com/joongama/RPG-swift" }],
    visual: "grimoire",
  },
  {
    id: "projeto-dados",
    title: "Projeto de dados: Excel, MySQL e Power BI",
    context: "Próximo projeto",
    status: "em-planejamento",
    summary:
      "Um projeto que liga planilhas Excel, um banco MySQL e um painel no Power BI para responder perguntas práticas de uma empresa.",
    problem:
      "Ainda em planejamento. Esta ficha será atualizada com o problema, os dados usados e o link do repositório quando o projeto for publicado.",
    features: [],
    stack: ["Excel", "MySQL", "Power BI"],
    links: [],
    visual: "pipeline",
  },
];
