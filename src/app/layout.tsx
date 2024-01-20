import { PrimeReactProvider } from "primereact/api";
import "../styles/global.sass";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export const metadata = {
  title: "LeadMe",
  description: "Leads qualifificado para o seu negócio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <PrimeReactProvider>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
