import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./lesson.module.css";
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: string;
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableAtFormatted = format(
    props.availableAt,
    "EEEE' - 'd' de 'MMMM' - 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link to={`/event/lesson/${props.slug}`}>
      <span className={styles["date"]}>{availableAtFormatted}</span>
      <div className={styles["container"]}>
        <header className={styles["header"]}>
          {isLessonAvailable ? (
            <span className={styles["icon-check"]}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={styles["icon-lock"]}>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={styles["type"]}>
            {props.type === "live " ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className={styles["title"]}>{props.title}</strong>
      </div>
    </Link>
  );
}
