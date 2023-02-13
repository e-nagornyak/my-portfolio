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
                    <p className={s.about}>Hello, I am a person who has a strong passion for programming that inspires
                        me every day. I am responsible for assigned tasks. Furthermore, I have experience in creating
                        SPA with React/Redux/TypeScript.
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

