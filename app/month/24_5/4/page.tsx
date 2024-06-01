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
      <h1 className={styles.date}>2024년 5월 24일</h1>
      <div className={image.img}></div>
      <div style={{ alignSelf: "flex-end" }}>
        <Link href="./3">
          <button className={styles.button}>⬅️</button>
        </Link>
        <span style={{ fontSize: "18px", fontWeight: "bolder" }}>4/4</span>

        <button className={styles.button} disabled>
          ➡️
        </button>
      </div>
    </div>
  );
}
