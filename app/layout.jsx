import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "nexter-car",
  description: "car rental app",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={poppins.className}
    >
      <body>{children}</body>
    </html>
  );
}
