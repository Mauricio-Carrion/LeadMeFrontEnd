import { PrimeReactProvider } from "primereact/api";
import "../styles/global.sass";

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
        <body className="bg-gray">{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
