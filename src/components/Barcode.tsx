import { useMemo } from "react";
import { barsFromWidths, encodeCode128B } from "../lib/code128";

type Props = { value: string; className?: string };

/** Código de barras Code 128 real, desenhado em SVG. */
export function Barcode({ value, className }: Props) {
  const { bars, total } = useMemo(() => {
    const widths = encodeCode128B(value);
    return { bars: barsFromWidths(widths), total: widths.reduce((a, b) => a + b, 0) };
  }, [value]);

  const quiet = 10; // zona de silêncio exigida pelo padrão
  return (
    <svg
      className={className}
      viewBox={`0 0 ${total + quiet * 2} 40`}
      preserveAspectRatio="none"
      role="img"
      aria-label={`Código de barras com o texto ${value}`}
    >
      {bars.map((b, i) => (
        <rect key={i} x={b.x + quiet} y={0} width={b.w} height={40} fill="currentColor" />
      ))}
    </svg>
  );
}
