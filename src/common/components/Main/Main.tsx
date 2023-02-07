import React, {FC} from 'react'
import s from './Main.module.scss';
import styleContainer from '../../styles/Container.module.css'
import avatar from '../../../assets/image/avatar.png'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Particle} from "../../Particle";


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
                    <p className={s.about}>From Ukraine, Kiev. I have rich experience in web design, also I am good at
                        wordpress. I love to talk with you about our unique.</p>
                    <div className={s.btn_wrapper}>
                        <button>DOWNLOAD CV</button>
                        <p>MY SKILLS</p>
                    </div>
                </div>
                    <img className={s.photo} src={avatar} alt=""/>
            </div>
        </div>
    </Fade>

}

