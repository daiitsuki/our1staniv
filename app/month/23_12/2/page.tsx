import styles from "../../styles.module.css";
import image from "./styles.module.css";
import Link from "next/link";

export default function M230615() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        rowGap: "3px",
      }}
    >
      <h1 className={styles.date}>2023년 12월 19일</h1>
      <div className={image.img}></div>
      <div style={{ alignSelf: "flex-end" }}>
        <Link href="./1">
          <button className={styles.button}>⬅️</button>
        </Link>
        <span style={{ fontSize: "18px", fontWeight: "bolder" }}>2/5</span>
        <Link href="./3">
          <button className={styles.button}>➡️</button>
        </Link>
      </div>
    </div>
  );
}
