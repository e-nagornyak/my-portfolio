import React, {FC} from 'react'
import s from './Project.module.scss';

type ProjectPropsType = {
    title: string
    description: string
    style: object
}

export const Project: FC<ProjectPropsType> = ({title, description, style}) => {
    return <div className={s.project}>
        <div className={s.image} style={style}>
            <a href={''} className={s.viewBtn}>View</a>
        </div>
        <div className={s.projectInfo}>
            <h3 className={s.projectTitle}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    </div>
}

