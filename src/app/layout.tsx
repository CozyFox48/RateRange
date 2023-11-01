"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import {QueryProvider} from "./../utilz/queryContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className="dark:bg-black">
        <Providers>
          <QueryProvider>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </QueryProvider>

        </Providers>
      </body>
    </html>
  );
}


