import React, {FC} from "react";
import styles from "./Title.module.scss";

type TitlePropsType = { title: string }

export const Title: FC<TitlePropsType> = ({title}) => {
    return <div className={styles.title}>
        <h2>{title}</h2>
    </div>
}