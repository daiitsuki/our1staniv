"use client";

import { useState } from "react";
import styles from "../styles/login.module.css";

export default function LoginPage() {
  const [pwd, setPwd] = useState("");

  function checkPwd() {
    if (pwd === "2364") {
      localStorage.setItem("login", "true");
      alert("로그인 완료❤️");
      window.location.href = "/";
    } else {
      alert("비밀번호를 다시 확인해!");
    }
  }
  return (
    <div className={styles.container}>
      <h1>♥우리의 비밀번호♥ 힌트: 4자리</h1>
      <div className={styles.pwdForm}>
        <input type="text" value={pwd} className={styles.inputText} readOnly />
        <button onClick={() => setPwd((p) => p.slice(0, -1))}>🔙</button>
        <button onClick={checkPwd}>✅</button>
      </div>
      <div className={styles.keyPad}>
        <button onClick={() => setPwd((p) => p + "1")}>1</button>
        <button onClick={() => setPwd((p) => p + "2")}>2</button>
        <button onClick={() => setPwd((p) => p + "3")}>3</button>
        <button onClick={() => setPwd((p) => p + "4")}>4</button>
        <button onClick={() => setPwd((p) => p + "5")}>5</button>
        <button onClick={() => setPwd((p) => p + "6")}>6</button>
        <button onClick={() => setPwd((p) => p + "7")}>7</button>
        <button onClick={() => setPwd((p) => p + "8")}>8</button>
        <button onClick={() => setPwd((p) => p + "9")}>9</button>
        <button onClick={() => setPwd((p) => p + "0")}>0</button>
      </div>
    </div>
  );
}
