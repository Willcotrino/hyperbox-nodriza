"use client";

import { useMemo, useState } from "react";
import { CASOS } from "@/lib/casos";
import { BLOQUES } from "@/lib/modelo";

export default function Casos() {
  const [bloque, setBloque] = useState("");
  const [busca, setBusca] = useState("");

  const lista = useMemo(
    () =>
      CASOS.filter((c) => {
        if (bloque && c.bloque !== bloque) return false;
        if (busca.trim()) {
          const t = `${c.id} ${c.titulo} ${c.actor} ${c.flujo} ${c.resultado}`.toLowerCase();
          if (!t.includes(busca.toLowerCase())) return false;
        }
        return true;
      }),
    [bloque, busca],
  );

  const claves = Object.keys(BLOQUES);

  return (
    <main>
      <section style={{ paddingBottom: 40 }}>
        <div className="envoltura">
          <p className="eyebrow">ESPECIFICACIÓN FUNCIONAL</p>
          <h1 style={{ marginTop: 16, fontSize: "clamp(32px,4.6vw,56px)" }}>
            Casos de uso de HYPERBOX
          </h1>
          <p className="bajada">
            Los {CASOS.length} casos que definen el comportamiento de la plataforma, de la
            identidad del estudiante a la redención del token. Cada caso declara su actor,
            su disparador, sus rutas alternativas y la regla transversal que lo gobierna.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, borderBottom: "none" }}>
        <div className="envoltura">
          <input
            className="chip"
            style={{ width: "100%", maxWidth: 380, padding: "11px 16px", marginBottom: 16, cursor: "text" }}
            placeholder="Buscar por código, actor o flujo"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            aria-label="Buscar casos de uso"
          />

          <div className="filtros">
            <button className="chip" data-activo={bloque === "" ? "si" : "no"} onClick={() => setBloque("")}>
              Todos · {CASOS.length}
            </button>
            {claves.map((b) => {
              const n = CASOS.filter((c) => c.bloque === b).length;
              if (!n) return null;
              return (
                <button
                  key={b}
                  className="chip"
                  data-activo={bloque === b ? "si" : "no"}
                  title={BLOQUES[b]}
                  onClick={() => setBloque(b)}
                >
                  {b} · {n}
                </button>
              );
            })}
          </div>

          {bloque && (
            <p className="mono plomo" style={{ fontSize: 13, marginBottom: 20 }}>
              {BLOQUES[bloque]}
            </p>
          )}

          {lista.map((c) => (
            <article key={c.id} className="caso">
              <div className="caso-cab">
                <span className="cod">{c.id}</span>
                <h3>{c.titulo}</h3>
              </div>
              <dl className="caso-campos">
                <dt>Actor</dt><dd>{c.actor}</dd>
                <dt>Precondición</dt><dd>{c.precondicion}</dd>
                <dt>Disparador</dt><dd>{c.disparador}</dd>
                <dt>Flujo principal</dt><dd>{c.flujo}</dd>
                <dt>Alternativas</dt><dd>{c.alternativas}</dd>
                <dt>Resultado</dt><dd style={{ fontWeight: 500 }}>{c.resultado}</dd>
                <dt>Reglas</dt>
                <dd>{c.reglas.map((r) => <span key={r} className="regla">{r}</span>)}</dd>
              </dl>
            </article>
          ))}

          {lista.length === 0 && (
            <p className="mono plomo" style={{ padding: "60px 0", textAlign: "center" }}>
              Sin resultados para ese criterio.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
