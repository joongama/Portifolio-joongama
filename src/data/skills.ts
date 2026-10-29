/**
 * Tecnologias agrupadas por área. Em vez de barras de porcentagem, cada item
 * diz ONDE a tecnologia foi usada, algo que um recrutador pode conferir.
 *
 * - "projeto":  aparece em um projeto público (link na seção Projetos)
 * - "trabalho": uso no dia a dia do trabalho
 * - "estudo":   em estudo, ainda sem projeto público
 */
export type Evidence = "projeto" | "trabalho" | "estudo";

export const evidenceLabel: Record<Evidence, string> = {
  projeto: "Usei em projeto",
  trabalho: "Uso no trabalho",
  estudo: "Estudando",
};

export type SkillGroup = { area: string; items: { name: string; evidence: Evidence }[] };

export const skillGroups: SkillGroup[] = [
  {
    area: "Dados e BI",
    items: [
      { name: "Excel", evidence: "trabalho" },
      { name: "SQL", evidence: "estudo" },
      { name: "MySQL", evidence: "estudo" },
      { name: "Power BI", evidence: "estudo" },
      { name: "H2 Database", evidence: "projeto" },
    ],
  },
  {
    area: "Linguagens",
    items: [
      { name: "Java", evidence: "projeto" },
      { name: "TypeScript", evidence: "projeto" },
      { name: "Swift", evidence: "projeto" },
      { name: "JavaScript", evidence: "estudo" },
    ],
  },
  {
    area: "Back-end",
    items: [
      { name: "Spring Boot", evidence: "projeto" },
      { name: "APIs REST", evidence: "projeto" },
      { name: "Spring Data JPA", evidence: "projeto" },
      { name: "Bean Validation", evidence: "projeto" },
      { name: "JSON Server", evidence: "projeto" },
    ],
  },
  {
    area: "Front-end",
    items: [
      { name: "Angular", evidence: "projeto" },
      { name: "HTML", evidence: "projeto" },
      { name: "CSS", evidence: "projeto" },
    ],
  },
  {
    area: "Ferramentas",
    items: [
      { name: "Git", evidence: "projeto" },
      { name: "GitHub", evidence: "projeto" },
      { name: "Maven", evidence: "projeto" },
      { name: "Linux", evidence: "estudo" },
    ],
  },
];
