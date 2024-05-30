import styles from "../../styles.module.css";
import image from "./styles.module.css";
import Link from "next/link";

export default function Month2023() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        rowGap: "3px",
      }}
    >
      <h1 className={styles.date}>2023년 9월 14일</h1>
      <div className={image.img}></div>
      <div style={{ alignSelf: "flex-end" }}>
        <button className={styles.button} disabled>
          ⬅️
        </button>
        <span style={{ fontSize: "18px", fontWeight: "bolder" }}>1/3</span>
        <Link href="./2">
          <button className={styles.button}>➡️</button>
        </Link>
      </div>
    </div>
  );
}
