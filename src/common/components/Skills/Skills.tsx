import React, {FC} from 'react'
import {Skill} from "./Skill/Skill";
import {Title} from "../Title/Title";
import {Fade} from "react-awesome-reveal";
import styles from './Skills.module.scss';
import styleContainer from '../../styles/Container.module.css'


import react from "../../../assets/image/skills/react.svg"
import redux from "../../../assets/image/skills/redux.svg"
import css from "../../../assets/image/skills/css.svg"
import js from "../../../assets/image/skills/js.png"
import html from "../../../assets/image/skills/html.svg"
import ts from "../../../assets/image/skills/typescript.png"


export const Skills: FC = () => {
    return <Fade delay={100} triggerOnce direction={"up"} damping={0.2}>
        <div className={styles.skillsBlock} id={"skills"}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'PROFESSIONAL SKILLS'}/>

                <div className={styles.skills}>
                    <Skill
                        img={js}
                        title={'JS'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!"}/>
                    <Skill
                        img={css}
                        title={'CSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!'}/>
                    <Skill
                        img={html}
                        title={'HTML'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!'}/>
                    <Skill
                        img={react}
                        title={'REACT'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!'}/>
                    <Skill
                        img={redux}
                        title={'REDUX /       '}
                        subtitle={'REDUX TOOLKIT'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!'}/>
                    <Skill
                        img={ts}
                        title={'TYPESCRIPT'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!'}/>
                </div>
            </div>
        </div>
    </Fade>
}

