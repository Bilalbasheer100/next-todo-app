import "./globals.css";


export const metadata = {
  title: "Todo App",
  description: "Todo App using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
