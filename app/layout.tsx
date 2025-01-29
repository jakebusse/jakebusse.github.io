"use client";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Jake Busse</title>
      </head>
      <body>
        {/* Page Content */}
        <section className="">
          {children}
        </section>
      </body>
    </html>
  );
}
