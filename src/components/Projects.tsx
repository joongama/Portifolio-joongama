import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { ProjectVisual } from "./ProjectVisual";
import styles from "./Projects.module.css";

export function Projects() {
  const done = projects.filter((p) => p.status === "concluido");
  const planned = projects.filter((p) => p.status === "em-planejamento");

  return (
    <section id="projetos" className={`section ${styles.section}`} aria-labelledby="projetos-titulo">
      <div className="container">
        <header className="section-head">
          <h2 id="projetos-titulo">Projetos</h2>
          <p>
            Três projetos públicos: um em equipe, um de disciplina e um de workshop. Em cada um, o problema, o que foi
            feito e onde está o código.
          </p>
        </header>

        <div className={styles.list}>
          {done.map((p) => (
            <ProjectEntry key={p.id} project={p} />
          ))}
        </div>

        {planned.map((p) => (
          <PlannedEntry key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  if (project.image && !failed) {
    return (
      <img
        className={styles.image}
        src={project.image.src}
        alt={project.image.alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }
  return <ProjectVisual kind={project.visual} />;
}

function ProjectEntry({ project }: { project: Project }) {
  const titleId = `${project.id}-titulo`;
  return (
    <article className={styles.entry} aria-labelledby={titleId}>
      <div className={styles.body}>
        <p className={styles.context}>{project.context}</p>
        <h3 id={titleId} className={styles.title}>
          {project.title}
        </h3>
        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.block}>
          <h4>O problema</h4>
          <p>{project.problem}</p>
        </div>

        {project.role && (
          <div className={`${styles.block} ${styles.role}`}>
            <h4>Minha parte</h4>
            <p>{project.role}</p>
          </div>
        )}

        <div className={styles.block}>
          <h4>Funcionalidades</h4>
          <ul className={styles.features}>
            {project.features.map((f) => (
              <li key={f}>
                <Check aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.details && (
          <details className={styles.details}>
            <summary>{project.details.label}</summary>
            <ul>
              {project.details.items.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </details>
        )}

        <ul className={styles.stack} aria-label="Tecnologias">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className={styles.links}>
            {project.links.map((l) => (
              <a key={l.href} className="btn" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
                <span className="visually-hidden"> (abre em nova aba)</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className={styles.media}>
        <ProjectMedia project={project} />
      </div>
    </article>
  );
}

function PlannedEntry({ project }: { project: Project }) {
  return (
    <article className={styles.planned} aria-labelledby={`${project.id}-titulo`}>
      <div>
        <p className={styles.context}>
          <span className={styles.badge}>Em planejamento</span>
          {project.context}
        </p>
        <h3 id={`${project.id}-titulo`} className={styles.plannedTitle}>
          {project.title}
        </h3>
        <p className={styles.plannedText}>{project.summary}</p>
        <p className={styles.plannedNote}>{project.problem}</p>
      </div>
      <ProjectVisual kind={project.visual} />
    </article>
  );
}
