import React, {FC} from "react";
import * as yup from "yup";
import styleContainer from '../../styles/Container.module.css'
import s from './Contacts.module.scss';
import {ContactImgItem} from "./ContactImgItem/ContactImgItem";
import {Fade} from "react-awesome-reveal";
import {Title} from "../Title/Title";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {TextField} from "@mui/material";
import styleC from './ContactItem/ContactItem.module.scss'
import {sendMessage} from "./Api";

import home from '../../../assets/image/contacts/home.svg'
import phone from '../../../assets/image/contacts/phone-call.svg'
import email from '../../../assets/image/contacts/email.svg'

export const formSchema = yup.object({
    fullName: yup
        .string()
        .required('This field is required')
        .min(3),
    email: yup
        .string()
        .required('This field is required')
        .email('Email must be a valid'),
    subject: yup
        .string()
        .required('This field is required')
        .min(5),
    message: yup
        .string()
        .required()
})
type FormData = yup.InferType<typeof formSchema>;

export const Contacts: FC = () => {
    const {register, handleSubmit, reset, formState: {errors, touchedFields}} = useForm<FormData>({
        resolver: yupResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        sendMessage(data)
        reset()
    }

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
                                        img={home}/>
                        <ContactImgItem title={'Email'} subTitle={'dolkiv@gmail.com'}
                                        img={email}/>
                        <ContactImgItem title={'Phone'} subTitle={'+380973333333'}
                                        img={phone}/>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                        <div className={s.aboutInto}>
                            <div className={styleC.wrapper}>
                                <TextField {...register('fullName')}
                                           label={"Full name"}
                                           id={"outlined-error-helper-text"}
                                           variant="outlined"
                                           fullWidth
                                           helperText={errors.fullName?.message}
                                           error={touchedFields.fullName && !!errors.fullName}
                                />
                            </div>
                            <div className={styleC.wrapper}>
                                <TextField {...register('email')}
                                           label={"Email"}
                                           id={"outlined-error-helper-text"}
                                           variant="outlined"
                                           fullWidth
                                           helperText={errors.email?.message}
                                           error={touchedFields.email && !!errors.email}
                                />
                            </div>
                        </div>
                        <div className={styleC.wrapper}>
                            <TextField {...register('subject')}
                                       label={"Subject"}
                                       fullWidth
                                       id={"outlined-error-helper-text"}
                                       helperText={errors.subject?.message}
                                       error={touchedFields.subject && !!errors.subject}
                            />
                        </div>
                        <div>
                                <textarea  {...register('message')} placeholder={'Your message'}
                                           style={{border: `${!!errors.message ? '1px solid red' : ''}`}}
                                           className={styleC.message}/>
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

