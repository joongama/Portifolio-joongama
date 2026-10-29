import type { ProjectVisual as Kind } from "../data/projects";
import styles from "./ProjectVisual.module.css";

/**
 * Ilustrações técnicas dos projetos, feitas só com informações reais dos
 * repositórios (endpoints, regras, fluxos). Servem também de substituto
 * quando não há captura de tela.
 */
export function ProjectVisual({ kind }: { kind: Kind }) {
  switch (kind) {
    case "stock-flow":
      return <StockFlow />;
    case "endpoints":
      return <Endpoints />;
    case "grimoire":
      return <Grimoire />;
    case "pipeline":
      return <Pipeline />;
  }
}

function StockFlow() {
  return (
    <div
      className={styles.panel}
      role="img"
      aria-label="Fluxo do estoque: o produto sai do estoque quando é reservado no carrinho, volta ao estoque se for removido e é confirmado no checkout. O estoque baixo gera um alerta."
    >
      <p className={styles.caption} aria-hidden="true">
        Fluxo do estoque
      </p>
      <ol className={styles.flow} aria-hidden="true">
        <li className={styles.node}>
          <span className={styles.nodeTitle}>Estoque</span>
          <span className={styles.nodeNote}>CRUD de produtos</span>
          <span className={styles.alert}>Alerta de estoque baixo</span>
        </li>
        <li className={styles.edge}>
          <span className={styles.edgeForward}>reserva e baixa automática</span>
          <span className={styles.edgeBack}>item removido volta</span>
        </li>
        <li className={styles.node}>
          <span className={styles.nodeTitle}>Carrinho</span>
          <span className={styles.nodeNote}>itens reservados</span>
        </li>
        <li className={styles.edge}>
          <span className={styles.edgeForward}>finaliza</span>
        </li>
        <li className={`${styles.node} ${styles.nodeEnd}`}>
          <span className={styles.nodeTitle}>Checkout</span>
          <span className={styles.nodeNote}>compra concluída</span>
        </li>
      </ol>
    </div>
  );
}

const ENDPOINTS: { method: string; path: string; status: string }[] = [
  { method: "GET", path: "/pessoas", status: "200" },
  { method: "GET", path: "/pessoas/busca?q=", status: "200" },
  { method: "GET", path: "/pessoas/{username}", status: "200 / 404" },
  { method: "POST", path: "/pessoas", status: "201 / 400" },
  { method: "PUT", path: "/pessoas/{username}", status: "200" },
  { method: "DELETE", path: "/pessoas/{username}", status: "204" },
];

function Endpoints() {
  return (
    <div className={`${styles.panel} ${styles.console}`}>
      <p className={styles.caption}>Rotas da API</p>
      <table className={styles.routes}>
        <caption className="visually-hidden">Endpoints da API de dados pessoais e códigos de resposta</caption>
        <thead className="visually-hidden">
          <tr>
            <th scope="col">Método</th>
            <th scope="col">Caminho</th>
            <th scope="col">Respostas</th>
          </tr>
        </thead>
        <tbody>
          {ENDPOINTS.map((e) => (
            <tr key={e.method + e.path}>
              <td>
                <span className={styles.method} data-method={e.method}>
                  {e.method}
                </span>
              </td>
              <td className={styles.path}>{e.path}</td>
              <td className={styles.statusCode}>{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SPELLS = [
  { name: "Fogo", el: "fire" },
  { name: "Água", el: "water" },
  { name: "Terra", el: "earth" },
  { name: "Vento", el: "wind" },
] as const;

function Grimoire() {
  return (
    <div className={`${styles.panel} ${styles.grimoire}`}>
      <p className={styles.caption}>Personagem inicial</p>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span>Vida</span>
          <span className={styles.statValue}>175</span>
          <span className={styles.bar} aria-hidden="true">
            <span style={{ width: `${(175 / 225) * 100}%` }} data-kind="hp" />
          </span>
        </div>
        <div className={styles.stat}>
          <span>Mana</span>
          <span className={styles.statValue}>225</span>
          <span className={styles.bar} aria-hidden="true">
            <span style={{ width: "100%" }} data-kind="mp" />
          </span>
        </div>
      </div>

      <p className={styles.caption}>Grimório</p>
      <ul className={styles.spells}>
        {SPELLS.map((s) => (
          <li key={s.name} data-el={s.el}>
            <span className={styles.glyph} aria-hidden="true" />
            {s.name}
          </li>
        ))}
      </ul>

      <p className={styles.caption}>Inimigos, em ordem</p>
      <ol className={styles.enemies}>
        <li>Goblin Feiticeiro</li>
        <li aria-label="segundo inimigo" />
        <li aria-label="terceiro inimigo" />
        <li>Lich</li>
      </ol>
    </div>
  );
}

function Pipeline() {
  return (
    <div
      className={`${styles.panel} ${styles.planned}`}
      role="img"
      aria-label="Esboço do projeto planejado: dados do Excel carregados no MySQL e analisados em um painel no Power BI."
    >
      <ol className={styles.pipe} aria-hidden="true">
        <li>Excel</li>
        <li>MySQL</li>
        <li>Power BI</li>
      </ol>
    </div>
  );
}
