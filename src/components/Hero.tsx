import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { StockTag } from "./StockTag";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-titulo">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          {profile.openToWork && (
            <p className={styles.status}>
              <span className={styles.dot} aria-hidden="true" />
              Buscando {profile.target.charAt(0).toLowerCase() + profile.target.slice(1)}
            </p>
          )}

          <h1 id="hero-titulo" className={styles.title}>
            {profile.name}
          </h1>

          <p className={styles.role}>
            {profile.role}, com foco em análise de dados e BI.
          </p>

          <p className={styles.pitch}>
            No trabalho, cuido de estoque: registro entradas e saídas, faço inventário e mantenho as planilhas em dia.
            Foi lá que comecei a querer transformar esses registros em indicadores. Na faculdade, aprendo a construir o
            software que organiza esses dados.
          </p>

          <div className={styles.ctas}>
            <a className="btn btn--primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn" href="#contato">
              <Mail aria-hidden="true" />
              Entrar em contato
            </a>
          </div>

          <ul className={styles.social} aria-label="Perfis">
            <li>
              <a href={profile.github.url} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                <span>
                  GitHub<span className="visually-hidden"> (abre em nova aba)</span>
                </span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                <span>
                  LinkedIn<span className="visually-hidden"> (abre em nova aba)</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.visual}>
          <StockTag />
        </div>
      </div>
    </section>
  );
}
