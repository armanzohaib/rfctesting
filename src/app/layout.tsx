import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import localFont from "next/font/local";
import AppProvider from "@/providers/AppProvider";
import generateMetadata from "@/lib/metadata";
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";
import MobileOnly from "@/components/ui/MobileOnly";
import DesktopMessage from "@/components/ui/DesktopMessage";

const museo = localFont({
  src: [
    {
      path: "../../public/assets/fonts/MuseoSans-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/MuseoSans-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/MuseoSans-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/MuseoSans-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-museo",
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen font-display bg-background text-primary antialiased",
          museo.variable
        )}
      >
        <MobileOnly>
          <AppProvider>
            <ToastContainer position="top-center" />
            {children}
          </AppProvider>
        </MobileOnly>
        <DesktopMessage />
      </body>
    </html>
  );
}
