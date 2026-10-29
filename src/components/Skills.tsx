import { evidenceLabel, skillGroups, type Evidence } from "../data/skills";
import styles from "./Skills.module.css";

const ORDER: Evidence[] = ["projeto", "trabalho", "estudo"];

export function Skills() {
  return (
    <section id="habilidades" className="section" aria-labelledby="habilidades-titulo">
      <div className="container">
        <header className="section-head">
          <h2 id="habilidades-titulo">Habilidades</h2>
          <p>
            Sem barras de porcentagem. Cada tecnologia mostra onde eu já usei: o que tem bolinha cheia está em algum
            projeto público da seção acima.
          </p>
        </header>

        <ul className={styles.legend} aria-label="Legenda">
          {ORDER.map((e) => (
            <li key={e}>
              <span className={styles.marker} data-evidence={e} aria-hidden="true" />
              {evidenceLabel[e]}
            </li>
          ))}
        </ul>

        <div className={styles.shelves}>
          {skillGroups.map((g, i) => (
            <section key={g.area} className={styles.shelf} aria-labelledby={`skill-${i}`}>
              <h3 id={`skill-${i}`}>{g.area}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s.name}>
                    <span className={styles.marker} data-evidence={s.evidence} aria-hidden="true" />
                    <span className={styles.name}>{s.name}</span>
                    <span className={s.evidence === "projeto" ? "visually-hidden" : styles.evidence}>
                      {evidenceLabel[s.evidence]}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
