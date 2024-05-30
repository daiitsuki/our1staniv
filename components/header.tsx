"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login === "true") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  const path = usePathname();
  console.log(path);
  return login ? (
    <ul className={styles.container}>
      <Link href="/">
        <li>🏠</li>
      </Link>
      <Link href="/month/23_6/1">
        <li>2023년 6월</li>
      </Link>
      <Link href="/month/23_7/1">
        <li>7월</li>
      </Link>
      <Link href="/month/23_8/1">
        <li>8월</li>
      </Link>
      <Link href="/month/23_9/1">
        <li>9월</li>
      </Link>
      <Link href="/month/23_10/1">
        <li>10월</li>
      </Link>
      <Link href="/month/23_11/1">
        <li>11월</li>
      </Link>
      <Link href="/month/23_12/1">
        <li>12월</li>
      </Link>
      <li> </li>
      <Link href="/month/24_1/1">
        <li>2024년 1월</li>
      </Link>
      <Link href="/month/24_2/1">
        <li>2월</li>
      </Link>
      <Link href="/month/24_3/1">
        <li>3월</li>
      </Link>
      <Link href="/month/24_4/1">
        <li>4월</li>
      </Link>
      <Link href="/month/24_5/1">
        <li>5월</li>
      </Link>
      <Link href="/month/24_6/1">
        <li>6월</li>
      </Link>
    </ul>
  ) : (
    <></>
  );
}
