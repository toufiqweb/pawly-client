import "./globals.css";
import { Provider } from "./providers/Provider";
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Pawly - Pet Adoption",
  description: "Find your perfect pet companion",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} bg-background text-foreground`}>
        <Provider>{children}</Provider>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "var(--card)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              padding: "12px 20px",
              fontSize: "0.9rem",
              fontWeight: "500",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              maxWidth: "420px",
            },
            success: {
              iconTheme: {
                primary: "var(--primary)",
                secondary: "#000000",
              },
            },
            error: {
              iconTheme: {
                primary: "var(--destructive)",
                secondary: "var(--destructive-foreground)",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
