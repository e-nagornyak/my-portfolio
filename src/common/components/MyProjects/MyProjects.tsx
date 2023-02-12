import React from 'react'
import {Project} from "./Project/Project";
import {Title} from "../Title/Title";
import styles from './MyProjects.module.scss';
import styleContainer from '../../styles/Container.module.css'
import todoImage from "../../../assets/image/todolist.jpg";
import socialImage from "../../../assets/image/socialNetwork.png";
import {Fade} from "react-awesome-reveal";

export const MyProjects = () => {
    const todolist = {backgroundImage: `url(${todoImage})`}
    const socialNetwork = {backgroundImage: `url(${socialImage})`}

    return <Fade delay={100} triggerOnce direction={"up"} damping={0.2}>
        <div className={styles.myProjectsBlock} id={"my-works"}>
            <div className={`${styleContainer.container} ${styles.myProjectsContainer}`}>
                <Title title={'MY WORKS'}/>
                <div className={styles.project}>
                    <Project
                        style={socialNetwork}
                        title={'Social network'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                    <Project
                        style={todolist}
                        title={'Todolist'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                    <Project
                        style={todolist}
                        title={'Cards game'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                </div>
            </div>
        </div>
    </Fade>
}

