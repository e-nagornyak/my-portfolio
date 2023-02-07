import React, {FC} from "react";
import styleContainer from '../../styles/Container.module.css'
import s from './Contacts.module.scss';
import {ContactImgItem} from "./ContactImgItem/ContactImgItem";
import {ContactItem} from "./ContactItem/ContactItem";
import {Fade} from "react-awesome-reveal";
import {Title} from "../Title/Title";


export const Contacts: FC = () => {
    return <Fade delay={300} triggerOnce direction={"up"} damping={0.2}>
        <div className={s.contactsBlock} id={"contacts"}>
            <div className={`${styleContainer.container} ${s.contacts}`}>
                <Title title={'CONTACT ME'}/>
                <div>
                    <span style={{color: "#f26522", fontStyle: 'italic', fontSize: '20px'}}>Let`s </span>
                    <span className={s.about}>to talk about ideas</span>
                </div>
                <div className={s.contacts__wrapper}>
                    <div className={s.contact_icons}>
                        <ContactImgItem title={'Address'} subTitle={'Ukraine, Kiev'}
                                        img={'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'}/>
                        <ContactImgItem title={'Freelance'} subTitle={'Available Right Now'}
                                        img={'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'}/>
                        <ContactImgItem title={'Email'} subTitle={'dolkiv@gmail.com'}
                                        img={'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'}/>
                        <ContactImgItem title={'Phone'} subTitle={'+380976133311'}
                                        img={'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'}/>
                    </div>
                    <form action={''} className={s.form}>
                        <div className={s.aboutInto}>
                            <ContactItem title={'full name'}/>
                            <ContactItem title={'email address'}/>
                        </div>
                        <div>
                            <ContactItem title={'subject'}/>
                        </div>
                        <div>
                            <ContactItem title={'message'}/>
                        </div>
                        <div className={s.btn_wrapper}>
                            <button type="submit" className={s.send}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Fade>
}

