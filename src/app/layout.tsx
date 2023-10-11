import "./global.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "~/component/ui/avatar";
import { Sidebar } from "~/component/ui/sidebar";

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
      <body className={`${inter.className} container mx-auto`}>
        <div className="border-b ">
          <div className="flex h-16 items-center px-4 ">
            Cloud
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
