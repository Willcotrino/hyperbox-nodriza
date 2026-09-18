import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYPERBOX by Nodriza · Innovación abierta empresa–escuela",
  description:
    "Los retos de la cadena de valor de su empresa, resueltos por semilleros de investigación escolares. El pago capitaliza el token Nexon: aprender paga.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="nav">
          <a className="nav-marca" href="/">
            HYPERBOX <span>by Nodriza</span>
          </a>
          <div className="nav-enlaces">
            <a href="/#modelo">Modelo</a>
            <a href="/#semilleros">Semilleros</a>
            <a href="/#circuito">Token</a>
            <a href="/casos">Casos de uso</a>
          </div>
          <span className="sello">N4NA_V3.0</span>
        </nav>
        {children}
        <footer>
          <div className="envoltura">
            <p>
              HYPERBOX by Nodriza · N4na Digital · Economía educativa tokenizada
            </p>
            <p style={{ marginTop: 8, color: "var(--gris-claro)" }}>
              Aprender paga. Que lo pague quien recibe el valor.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
