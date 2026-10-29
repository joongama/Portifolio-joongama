import { facts, learningNow } from "../data/profile";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-titulo">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h2 id="sobre-titulo" className={styles.heading}>
            Sobre
          </h2>
          <p className={styles.lead}>
            Sou o João Pedro, estudante de Análise e Desenvolvimento de Sistemas no Senac, em São Paulo.
          </p>
          <p>
            Desde setembro de 2025 trabalho como Jovem Aprendiz no estoque da Caraigá Veículos. Registro entradas e
            saídas, faço inventário, mantenho planilhas no Excel e atendo outros setores e clientes. Foi esse contato
            diário com planilhas e controles que me levou a querer transformar dados operacionais em indicadores.
          </p>
          <p>
            Por isso meu foco é análise de dados e BI. Ao mesmo tempo, a faculdade me colocou para construir software
            de verdade: uma API em Spring Boot, a parte de estoque de um e-commerce em Angular feito em equipe e um
            jogo em Swift num workshop da Apple Developer Academy. Também tenho interesse em vagas de desenvolvimento.
          </p>

          <div className={styles.now}>
            <h3>O que estou estudando agora</h3>
            <ul>
              {learningNow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className={styles.card} aria-label="Resumo">
          <dl>
            {facts.map((f) => (
              <div key={f.term} className={styles.row}>
                <dt>{f.term}</dt>
                <dd>{f.detail}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
