"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github } from "../utils/icons";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full py-4 flex items-center justify-end">
      <div className="search-container flex gap-2 sm:w-fit">
        <Button
          className="source-code-btn flex items-center gap-2"
          onClick={() => router.push("https://github.com")}
        >
          {github}
          Source
        </Button>
      </div>
    </div>
  );
}

// =========================
// UI
// =========================