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
      <body className={`${inter.className} dark:bg-[#030712]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full lg:w-1/2 lg:mx-auto">
            <Header />
            <main className="m-2 text-sm p-4 lg:p-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
