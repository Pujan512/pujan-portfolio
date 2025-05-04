
import "./globals.css";


export const metadata = {
  title: "Pujan Shrestha | Full-Stack Developer",
  description: "Portfolio of Pujan Shrestha, a computer science student and full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-poppins bg-gray-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
