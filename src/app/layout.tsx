import "./global.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud library",
  description: "Cloud library app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b container mx-auto">
          <div className="flex h-16 items-center px-4">
            Hi
            <div className="ml-auto flex items-center space-x-4" />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
