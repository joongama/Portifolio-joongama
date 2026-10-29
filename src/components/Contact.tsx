import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, FileText, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import styles from "./Contact.module.css";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Alternativa para navegadores/contextos sem a Clipboard API
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

export function Contact() {
  const [copied, setCopied] = useState<"idle" | "ok" | "fail">("idle");
  const timer = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onCopy = async () => {
    const ok = await copyText(profile.email);
    setCopied(ok ? "ok" : "fail");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied("idle"), 2400);
  };

  return (
    <section id="contato" className={`section ${styles.section}`} aria-labelledby="contato-titulo">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2 id="contato-titulo" className={styles.title}>
            Contato
          </h2>
          <p className={styles.text}>
            Estou aberto a oportunidades de estágio e a conversas sobre dados e tecnologia. O jeito mais rápido de falar
            comigo é por e-mail ou pelo LinkedIn.
          </p>
        </div>

        <div className={styles.channels}>
          <div className={styles.emailRow}>
            <a className={styles.email} href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            <button type="button" className={styles.copy} onClick={onCopy}>
              {copied === "ok" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              {copied === "ok" ? "Copiado" : "Copiar e-mail"}
            </button>
            <p className="visually-hidden" role="status" aria-live="polite">
              {copied === "ok" ? "E-mail copiado para a área de transferência." : ""}
              {copied === "fail" ? "Não foi possível copiar. Selecione o endereço e copie manualmente." : ""}
            </p>
          </div>

          <ul className={styles.list}>
            <li>
              <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                <span className={styles.label}>LinkedIn</span>
                <span className={styles.handle}>/in/{profile.linkedin.user}</span>
                <ArrowUpRight aria-hidden="true" className={styles.arrow} />
                <span className="visually-hidden"> (abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a href={profile.github.url} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                <span className={styles.label}>GitHub</span>
                <span className={styles.handle}>@{profile.github.user}</span>
                <ArrowUpRight aria-hidden="true" className={styles.arrow} />
                <span className="visually-hidden"> (abre em nova aba)</span>
              </a>
            </li>
            {profile.resumeUrl && (
              <li>
                <a href={profile.resumeUrl} download>
                  <FileText aria-hidden="true" />
                  <span className={styles.label}>Currículo</span>
                  <span className={styles.handle}>PDF</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
