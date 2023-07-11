import React, {FC} from 'react'
import s from './Main.module.scss';
import styleContainer from '../../styles/Container.module.css'
import avatar from '../../../assets/image/avatar.png'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Particle} from "../../Particle";
import cv2 from '../../../assets/CV2.png'

export const Main: FC = () => {
    return <Fade cascade direction={"down"} triggerOnce damping={0.2}>
        <div className={s.mainBlock} id={"main"}>
            <Particle/>
            <div className={styleContainer.container + ' ' + s.wrapper}>
                <div className={s.text}>
                    <div className={s.fullName}>
                        <span>HELLO, </span>
                        <span className={s.accent_name}>MY NAME IS</span>
                    </div>
                    <h1 className={s.name}>Evhen Nahorniak</h1>
                    <div className={s.aboutDev}>
                        <span>I am, </span>
                        <ReactTypingEffect className={s.accent_dev} text={'Frontend developer'}/>
                    </div>
                    <p className={s.about}>Hi, I'm front-end developer with 1.7 years of experience building
                        SPA and SSR using React-Redux/RTK, Next and TypeScript.
                        Knowledgeable in user interface, testing, and debugging
                        processes. Able to effectively self-manage during independent
                        projects, as well as collaborate in a team setting. Eager to learn
                        new technologies (Node.js) and develop myself on a daily basis. If
                        you have any suggestions, projects, or even if you want to say
                        Hello.
                        <br/>
                            <br/>
                        There are no impossible tasks - there is a lack of time to solve them!</p>
                    <div className={s.btn_wrapper}>
                        <a target={'_blank'} download={'CV-E.N.pdf'} href={cv2}>
                            <button>DOWNLOAD CV</button>
                        </a>
                        <p>MY SKILLS</p>
                    </div>
                </div>
                <img className={s.photo} src={avatar} alt=""/>
            </div>
        </div>
    </Fade>

}

