import { PRIMARIAS, APOYO, SOLUCIONES, CIRCUITO, REDENCION, RUTAS } from "@/lib/modelo";
import { CASOS } from "@/lib/casos";

export default function Inicio() {
  return (
    <main>
      {/* ---------------------------------------------- portada */}
      <section className="hero">
        <div className="envoltura">
          <p className="eyebrow">SYSTEM_INIT // HYPERBOX</p>
          <h1 style={{ marginTop: 18 }}>
            Aprender
            <br />
            no debe <span className="tachado">doler</span>
          </h1>
          <p className="bajada">
            El problema que hoy le cuesta dinero a su empresa es el mejor material
            educativo del país. Publíquelo como reto. Un semillero escolar lo resuelve.
            Usted paga por la solución, y ese pago se convierte en mercado, ropa y
            conectividad para un estudiante.
          </p>
          <div className="acciones">
            <a className="btn btn-p" href="#modelo">Ver el modelo de retos</a>
            <a className="btn btn-s" href="/casos">Casos de uso de la plataforma</a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- cifras */}
      <section>
        <div className="envoltura">
          <div className="rejilla c3">
            <div>
              <div className="cifra">3–7%</div>
              <p>de la facturación anual se pierde en reprocesos, mermas y paradas no planeadas</p>
            </div>
            <div>
              <div className="cifra">70%</div>
              <p>del valor del token llega directo al estudiante y su hogar</p>
            </div>
            <div>
              <div className="cifra">USD 10 M</div>
              <p>de inversión ejecutada en innovación educativa, reconocida por APC Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- Porter */}
      <section id="modelo">
        <div className="envoltura">
          <div className="enc">
            <p className="eyebrow">PORTER // MAPA DE RETOS</p>
            <h2 style={{ marginTop: 12 }}>El mapa de retos: cadena de valor</h2>
            <p>
              Todo reto se clasifica en una actividad primaria o de apoyo. Esa clasificación
              define qué competencias se convocan, a qué semilleros se notifica y con qué
              rúbrica se evalúa la solución.
            </p>
          </div>

          <div className="porter">
            {APOYO.map((a) => (
              <div key={a.cod} className="porter-apoyo">
                <span className="cod">{a.cod}</span>
                <strong>{a.nombre}</strong>
                <span className="mono plomo" style={{ fontSize: 12.5 }}>{a.alcance}</span>
              </div>
            ))}
          </div>

          <div className="porter-fila">
            {PRIMARIAS.map((p) => (
              <div key={p.cod} className="tarjeta" style={{ padding: 18 }}>
                <span className="cod">{p.cod}</span>
                <h3 style={{ fontSize: 15, marginTop: 6 }}>{p.nombre}</h3>
                <ul className="dolores">
                  {p.dolores.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="rejilla c2" style={{ marginTop: 36 }}>
            {APOYO.map((a) => (
              <div key={a.cod} className="tarjeta">
                <span className="cod" style={{ color: "var(--morado)" }}>{a.cod}</span>
                <h3 style={{ marginTop: 6 }}>{a.nombre}</h3>
                <ul className="dolores">
                  {a.dolores.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- semilleros */}
      <section id="semilleros">
        <div className="envoltura">
          <div className="enc">
            <p className="eyebrow">QUIÉN RESUELVE</p>
            <h2 style={{ marginTop: 12 }}>Semilleros de investigación escolares</h2>
            <p>
              Grupos de estudiantes con un docente tutor que trabajan con método científico
              sobre un problema real durante un ciclo completo. No son mano de obra barata:
              son equipos que aprenden haciendo, acompañados por mentores y por la propia
              empresa retadora.
            </p>
          </div>

          <div className="rejilla c3">
            {RUTAS.map(([r, nom, desc, nex]) => (
              <div key={r} className="tarjeta">
                <h3>{r} · {nom}</h3>
                <p style={{ marginTop: 10 }}>{desc}</p>
                <div className="franja" style={{ marginTop: 18, fontSize: 13 }}>{nex} NEXONS</div>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 48, marginBottom: 18 }}>Qué puede postular un semillero</h3>
          <div className="rejilla c4">
            {SOLUCIONES.map(([t, d]) => (
              <div key={t} className="tarjeta" style={{ padding: 18 }}>
                <h3 style={{ fontSize: 14.5 }}>{t}</h3>
                <p style={{ marginTop: 7, fontSize: 12 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- circuito */}
      <section id="circuito">
        <div className="envoltura">
          <div className="enc">
            <p className="eyebrow">CIRCUITO ECONÓMICO</p>
            <h2 style={{ marginTop: 12 }}>Del dolor de la empresa al mercado del hogar</h2>
            <p>
              El pago empresarial capitaliza la reserva que respalda al Nexon. El estudiante
              lo redime en bienes esenciales: el token nunca se convierte en efectivo.
            </p>
          </div>

          <div className="rejilla c3">
            {CIRCUITO.map(([n, t, d]) => (
              <div key={n} className="tarjeta paso">
                <div className="num">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>

          <div className="franja">EL VALOR VUELVE AL ORIGEN: LA EMPRESA RESUELVE, EL ESTUDIANTE COBRA</div>

          <h3 style={{ marginTop: 48, marginBottom: 18 }}>¿En qué se redime el token?</h3>
          <div className="rejilla c3">
            {REDENCION.map(([t, d]) => (
              <div key={t} className="tarjeta" style={{ padding: 18 }}>
                <h3 style={{ fontSize: 15 }}>{t}</h3>
                <p style={{ marginTop: 7 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- plataforma */}
      <section>
        <div className="envoltura">
          <div className="enc">
            <p className="eyebrow">HYPERBOX // PLATAFORMA</p>
            <h2 style={{ marginTop: 12 }}>La infraestructura que sostiene el circuito</h2>
            <p>
              N4na Digital aporta la economía educativa y la pedagogía. HYPERBOX aporta la
              gobernanza, la trazabilidad y el mercado. La especificación funcional cubre{" "}
              {CASOS.length} casos de uso en 16 bloques.
            </p>
          </div>
          <div className="acciones" style={{ marginTop: 0 }}>
            <a className="btn btn-p" href="/casos">Ver los {CASOS.length} casos de uso</a>
          </div>
        </div>
      </section>
    </main>
  );
}
