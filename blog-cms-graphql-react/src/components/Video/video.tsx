import { Player, Youtube, DefaultUi } from "@vime/react";
import "@vime/core/themes/default.css";
import {
  DiscordLogo,
  Lightning,
  CaretRight,
  FileArrowDown,
} from "phosphor-react";
import { useQuery } from "@apollo/client";
import { GET_LESSON_BY_SLUG_QUERY } from "../../fragments/LessonSlug";
import { Button } from "../Button";
import { Card } from "../Card";

import styles from "./video.module.css";

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      name: string;
      avatarURL: string;
      bio: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: { slug: props.lessonSlug },
  });

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["container-video"]}>
        <div className={styles["video"]}>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className={styles["container-text"]}>
        <div className={styles["body"]}>
          <div className={styles["div-text"]}>
            <h1 className={styles["title"]}>{data.lesson.title} </h1>
            <p className={styles["paragraph"]}>{data.lesson.description}</p>
            <div className={styles["container-avatar"]}>
              <img
                src={data.lesson.teacher.avatarURL}
                alt="avatar"
                className={styles["image"]}
              />
              <div className="text-body">
                <strong className={styles["teacher"]}>
                  {data.lesson.teacher.name}
                </strong>
                <span className={styles["bio"]}>{data.lesson.teacher.bio}</span>
              </div>
            </div>
          </div>

          <div className={styles["container-buttons"]}>
            <Button label=" Comunidade do discord" variant="primary">
              <DiscordLogo size={24} />
            </Button>
            <Button label=" Acesse o desafio" variant="secondary">
              <Lightning size={24} />
            </Button>
          </div>
        </div>
        <div>
          <div className={styles["container-cards"]}>
            <Card
              title="Material complementar"
              description="Acesse o material complementar para acelerar o seu desenvolvimento"
              icon={<CaretRight size={24} />}
              children={<FileArrowDown size={40} />}
            />
            <Card
              title="Wallpapers exclusivos"
              description="Baixe os wallpapers exclusivos para acelerar o seu desenvolvimento"
              icon={<CaretRight size={24} />}
              children={<FileArrowDown size={40} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
