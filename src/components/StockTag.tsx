import { profile } from "../data/profile";
import { Barcode } from "./Barcode";
import styles from "./StockTag.module.css";

/**
 * Elemento visual do hero: uma etiqueta de estoque, como as que o João
 * usa no trabalho, com os dados dele como "item". O código de barras é real.
 */
export function StockTag() {
  return (
    <figure className={styles.wrap} aria-labelledby="etiqueta-legenda">
      <div className={styles.hook} aria-hidden="true" />
      <div className={styles.swing}>
        <svg className={styles.string} viewBox="0 0 40 120" aria-hidden="true">
          <path d="M20 0 C 14 40, 26 80, 20 120" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        <div className={styles.tag}>
          <span className={styles.hole} aria-hidden="true" />

          <dl className={styles.fields}>
            <div className={styles.fieldWide}>
              <dt>Item</dt>
              <dd className={styles.item}>{profile.name}</dd>
            </div>
            <div className={styles.fieldWide}>
              <dt>Categoria</dt>
              <dd>Estudante de ADS, Senac</dd>
            </div>
            <div>
              <dt>Origem</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Previsão</dt>
              <dd>Dez 2027</dd>
            </div>
            <div className={styles.fieldWide}>
              <dt>Destino</dt>
              <dd>{profile.target}</dd>
            </div>
          </dl>

          <div className={styles.code}>
            <Barcode value={profile.barcode} className={styles.barcode} />
            <div className={styles.codeRow}>
              <span className={styles.codeText} aria-hidden="true">
                {profile.barcode}
              </span>
              {profile.openToWork && (
                <span className={styles.stamp} aria-hidden="true">
                  Disponível
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <figcaption id="etiqueta-legenda" className="visually-hidden">
        Etiqueta de estoque ilustrativa com os dados de {profile.name}: estudante de ADS no Senac, em{" "}
        {profile.location}, com previsão de formatura em dezembro de 2027, buscando {profile.target.toLowerCase()}.
      </figcaption>
    </figure>
  );
}
