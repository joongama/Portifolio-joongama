import { profile } from "../data/profile";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className={styles.colophon}>
          Feito com React, TypeScript e Vite. Tipografia em Archivo. O código de barras da etiqueta é um Code 128 real:
          aponte um leitor para ele.
        </p>
        <a className="text-link" href="#inicio">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
