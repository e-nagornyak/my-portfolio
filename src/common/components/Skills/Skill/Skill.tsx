import React, {FC} from 'react'
import styles from './Skill.module.scss';
import Tilt from 'react-parallax-tilt';

type SkillPropsType = {
    img: string
    title: string
    description: string
    subtitle?: string
}

export const Skill: FC<SkillPropsType> = ({img, description, title, subtitle}) => {
    return <Tilt>
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img className={styles.icon_logo} src={img} alt=""/>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    </Tilt>
}

