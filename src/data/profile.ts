/**
 * Dados pessoais do portfólio. Tudo aqui foi tirado do README do perfil
 * (github.com/joongama) ou informado pelo João. Edite à vontade.
 *
 * Campos marcados com `null` não aparecem na página até serem preenchidos.
 */
export const profile = {
  name: "João Pedro Gama Nascimento",
  shortName: "João Pedro Gama",
  role: "Estudante de Análise e Desenvolvimento de Sistemas no Senac",
  focus: "Dados, BI e desenvolvimento",
  location: "São Paulo, SP",
  /** Mostrado no topo da página e na etiqueta. Mude para false se não estiver buscando vaga. */
  openToWork: true,
  target: "Estágio em Análise de Dados ou BI",

  email: "joaopedrogama2704@gmail.com",
  github: { user: "joongama", url: "https://github.com/joongama" },
  linkedin: {
    user: "joaopedrogamanascimento",
    url: "https://www.linkedin.com/in/joaopedrogamanascimento",
  },

  /** TODO: coloque o PDF em public/curriculo.pdf e troque para "/curriculo.pdf". */
  resumeUrl: null as string | null,

  /** Texto usado no código de barras da etiqueta (Code 128, pode ser lido por leitor). */
  barcode: "joongama",
} as const;

export const facts: { term: string; detail: string }[] = [
  { term: "Formação", detail: "Tecnologia em Análise e Desenvolvimento de Sistemas, Senac. Conclusão prevista para dezembro de 2027." },
  { term: "Trabalho atual", detail: "Jovem Aprendiz no estoque da Caraigá Veículos, desde setembro de 2025." },
  { term: "Busco", detail: "Estágio em Análise de Dados ou BI. Também tenho interesse em desenvolvimento e outras vagas de entrada em TI." },
  { term: "Idiomas", detail: "Inglês intermediário, espanhol básico." },
  { term: "Disponibilidade", detail: "São Paulo - SP" },
];

export const learningNow = [
  "SQL e modelagem de banco de dados com MySQL",
  "Dashboards no Power BI",
  "Java orientado a objetos e APIs REST com Spring Boot",
];
