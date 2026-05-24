import { Lato, Cormorant_Garamond, Playfair_Display, Fraunces, Lovers_Quarrel} from "next/font/google";
import "./globals.css";

const lovers = Lovers_Quarrel({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lovers",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // 👈 REQUIRED FIX
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "Rudra Fashion Clubs",
  description: "Rudra Fashion Clubs",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${cormorant.variable} ${lovers.variable} ${playfair.variable} ${fraunces.variable}`}
    >
      <body>
        {children}
        </body>
    </html>
  );
}