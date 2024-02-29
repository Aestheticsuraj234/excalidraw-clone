import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ConvexCLientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Excalidraw Next.js App",
  description: "Excalidraw Next.js App with Convex",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading/>}>
        <ConvexCLientProvider>
          <Toaster />
          <ModalProvider/>
          {children}
          </ConvexCLientProvider>
          </Suspense>
      </body>
    </html>
  );
}
