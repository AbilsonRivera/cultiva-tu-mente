import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from './components/NavBar';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Cultiva tu mente",
  description: "Plataforma de concientización sobre salud mental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} font-poppins`}
      >
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
