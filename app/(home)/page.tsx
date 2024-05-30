"use client";

import { useEffect, useState } from "react";
import LoginPage from "../../components/login";

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

  return login ? <h1>1111111</h1> : <LoginPage />;
}
