import React, {FC} from 'react'
import {Skill} from "./Skill/Skill";
import {Title} from "../Title/Title";
import {Fade} from "react-awesome-reveal";
import styles from './Skills.module.scss';
import styleContainer from '../../styles/Container.module.css'
import {SKILLS} from "./helpers";


export const Skills: FC = () => {
    return <Fade delay={100} triggerOnce direction={"up"} damping={0.2}>
        <div className={styles.skillsBlock} id={"skills"}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'PROFESSIONAL SKILLS'}/>

                <div className={styles.skills}>
                    {SKILLS?.map((s, index) => <Skill key={index} {...s}/>)}
                </div>
            </div>
        </div>
    </Fade>
}

