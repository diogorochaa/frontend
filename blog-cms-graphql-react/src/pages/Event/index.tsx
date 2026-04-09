import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";
import styles from "./event.module.css";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className={styles["container"]}>
      <Header label="Header" />
      <main className={styles["body"]}>
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}

        <Sidebar />
      </main>
    </div>
  );
}
