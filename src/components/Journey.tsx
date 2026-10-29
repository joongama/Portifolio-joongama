import { journey } from "../data/journey";
import styles from "./Journey.module.css";

const KIND_LABEL = { trabalho: "Trabalho", formação: "Formação", curso: "Curso" } as const;

export function Journey() {
  return (
    <section id="trajetoria" className={`section ${styles.section}`} aria-labelledby="trajetoria-titulo">
      <div className="container">
        <header className="section-head">
          <h2 id="trajetoria-titulo">Trajetória</h2>
          <p>Início de carreira: um emprego, a graduação em andamento e um workshop.</p>
        </header>

        <ol className={styles.timeline}>
          {journey.map((item) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.when}>
                {item.period ?? <span className={styles.todo}>Data a preencher</span>}
              </div>
              <div className={styles.what}>
                <span className={styles.kind}>{KIND_LABEL[item.kind]}</span>
                <h3>{item.title}</h3>
                <p className={styles.place}>{item.place}</p>
                <ul>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
