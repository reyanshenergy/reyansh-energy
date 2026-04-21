import "./globals.css";
export const metadata = {
  title: "Reyansh Energy",
  description: "Solar Energy Traders in India - Clean, Affordable, Sustainable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}