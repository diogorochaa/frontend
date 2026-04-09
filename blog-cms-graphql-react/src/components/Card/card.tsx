import styles from "./card.module.css";
import cn from "clsx";

interface CardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const Card = ({
  title,
  className,
  children,
  description,
  icon,
}: CardProps) => {
  return (
    <a className={cn(className, styles["-card--container"])}>
      <div className={styles["-card--content"]}>{children}</div>
      <div className={styles["-card--text-container"]}>
        <strong className={styles["-card--title"]}>{title}</strong>
        <p className={styles["-card--description"]}>{description}</p>
      </div>
      <div className={styles["-card--icon"]}>{icon}</div>
    </a>
  );
};
