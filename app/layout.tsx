import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galleria | Home",
  description: "Welcome to the Galleria by Jay",
  keywords: [
    "design system",
    "react-snippets",
    "games",
    "tic-tac-toe",
    "blog",
    "side-project",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen dark:bg-gray-950`}>
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
