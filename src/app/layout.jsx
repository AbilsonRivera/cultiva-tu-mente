import "./globals.css";


export const metadata = {
  title: "Cultiva tu mente",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={""}
      >
        {children}
      </body>
    </html>
  );
}
