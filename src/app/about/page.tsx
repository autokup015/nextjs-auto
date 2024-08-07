"use client";
import React from "react";

import { useRouter } from "next/navigation";

type Props = {};

export default function AboutPage({}: Props) {
  const router = useRouter();

  const goHomePage = (): void => {
    router.push("/");
  };

  return (
    <div>
      AboutPage
      <br />
      <button type="button" onClick={goHomePage}>
        goHomePage
      </button>
    </div>
  );
}
