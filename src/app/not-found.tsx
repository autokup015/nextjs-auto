import Link from "next/link";
import React from "react";

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
          }}
        >
          NotFound Page - 404
        </h1>
        <br />
        <Link href="/">
          <button
            type="button"
            style={{
              padding: 10,
            }}
          >
            Pai na Home gun kup
          </button>
        </Link>
      </div>
    </div>
  );
}
