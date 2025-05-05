
import "./globals.css";
import { Poppins } from 'next/font/google'


export const metadata = {
  title: "Pujan Shrestha | Full-Stack Developer",
  description: "Portfolio of Pujan Shrestha, a computer science student and full-stack developer",
};

const poppins = Poppins({
  weight: ['100','200','300', '400','500','600','700','800','900'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${poppins.className} bg-gray-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
