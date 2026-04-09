import { useQuery } from "@apollo/client";
import { Lesson } from "../Lesson";
import { GET_LESSONS_QUERY } from "../../fragments/Lesson";
import styles from "./sidebar.module.css";

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: string;
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  return (
    <aside className={styles["container"]}>
      <span className={styles["span"]}>Cronograma de Aulas</span>
      <div className={styles["lessons"]}>
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
