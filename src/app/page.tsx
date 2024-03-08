import Calendar from "../components/Calendar/Calendar";
import styles from "./globals.module.css";

export default function page() {
  return (
    <main className={styles.app__container}>
      <Calendar />
    </main>
  );
}
