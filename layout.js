export const metadata = {
  title: "Pesquisa Rápida — Prevvine",
  description: "Motor de auxílio à auditoria Médica otimizado por I.A.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
