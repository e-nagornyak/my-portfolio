import React, {FC} from 'react';
import s from './ContactImgItem.module.scss'

type PropsType = {
    title: string,
    subTitle: string,
    img: string
}
export const ContactImgItem: FC<PropsType> = ({title, subTitle, img}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.img}>
                <div className={s.img__wrapper}>
                    <img src={img} alt="logo"/>
                </div>
            </div>
            <div className={s.title_wrapper}>
                <h3 className={s.title}>{title}</h3>
                <span>{subTitle}</span>
            </div>
        </div>
    );
};

