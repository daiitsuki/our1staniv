"use client";

import { useEffect, useState } from "react";
import LoginPage from "../../components/login";
import Link from "next/link";
import { BlockList } from "net";

export default function Main() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login === "true") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return login ? (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "64px" }}>
        ❣️우리의❣️
        <br />
        <br />
        🎉1년 돌아보기🎉
      </h1>
      <Link
        style={{
          display: "block",
          color: "black",
          textAlign: "center",
          width: "100%",
          marginTop: "50px",
          fontSize: "24px",
          fontWeight: "border",
        }}
        href="./month/23_6/1/"
      >
        <span>시작!</span>
      </Link>
    </div>
  ) : (
    <LoginPage />
  );
}
