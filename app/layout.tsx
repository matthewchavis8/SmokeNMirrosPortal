import type { Metadata } from "next";
import Navbar from "@/components/NavBar/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smoke N Mirros",
  description: "Not sure yet",
  icons: {
    icon: "/SmokeAndMirrors.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          
        </div>
      </body>
    </html>
  );
}
