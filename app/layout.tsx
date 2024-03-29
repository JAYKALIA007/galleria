import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Games Galleria | Home",
  description: "Welcome to the Games Galleria by Jay",
  keywords: ["games", "wordle", "tic-tac-toe", "blog", "side-project"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="lg:w-1/2 mx-auto">
            <Header />
            <main className="text-sm">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
