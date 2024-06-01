import { url } from "inspector";
import styles from "../../styles.module.css";
import image from "./styles.module.css";
import Link from "next/link";

export default function Month2024() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        rowGap: "3px",
      }}
    >
      <h1 className={styles.date}>2024년 2월 7일</h1>
      <div className={image.img}></div>
      <div style={{ alignSelf: "flex-end" }}>
        <button className={styles.button} disabled>
          ⬅️
        </button>
        <span style={{ fontSize: "18px", fontWeight: "bolder" }}>1/5</span>
        <Link href="./2">
          <button className={styles.button}>➡️</button>
        </Link>
      </div>
    </div>
  );
}
