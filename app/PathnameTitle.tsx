"use client"; // This must be a client component

import { usePathname } from "next/navigation";

export default function PathnameTitle() {
  const pathname = usePathname();
  const isWinXPPage = pathname === "/busse-xp";

  return (
    <title>
      {isWinXPPage
        ? "Jake Busse - Busse XP"
        : "Jake Busse - A Jake of all trades"}
    </title>
  );
}
