import "./globals.css";
export const metadata = {
  title: "Reyansh Energy | Solar Solutions in India",
  description:
    "Affordable solar panel installation for homes and businesses. Save electricity bills with Reyansh Energy.",
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