"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function IndexPage({}: Props) {
  const router = useRouter();

  const [count, setCount] = useState(0);

  const goAboutPage = (): void => {
    router.push("/about");
  };

  return (
    <div>
      IndexPage
      <hr />
      count : {count}
      <br />
      <button type="button" onClick={() => setCount(count + 1)}>
        count ++
      </button>
      <br />
      <button type="button" onClick={goAboutPage}>
        go about pages
      </button>
    </div>
  );
}
