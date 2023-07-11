import React, {FC, useMemo} from 'react'
import {Fade} from "react-awesome-reveal";

import {Title} from "../Title/Title";
import {Project} from "./Project/Project";
import {PROJECTS} from "./helpers";

import styleContainer from 'common/styles/Container.module.css'
import styles from './MyProjects.module.scss';

export const MyProjects:FC = () => {

    const projects = useMemo(() => PROJECTS.map((p) => {
        return {...p, style: {backgroundImage: `url(${p.styles})`}}
    }), [])

    return <Fade delay={100} triggerOnce direction={"up"} damping={0.2}>
        <div className={styles.myProjectsBlock} id={"my-works"}>
            <div className={`${styleContainer.container} ${styles.myProjectsContainer}`}>
                <Title title={'MY WORKS'}/>
                <div className={styles.project}>
                    {projects?.map((p, i) => <Project key={i} {...p}/>)}
                </div>
            </div>
        </div>
    </Fade>
}

