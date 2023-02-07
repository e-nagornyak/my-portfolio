import React, {FC} from 'react';
import s from './ContactItem.module.scss'

type PropsType = {
    title: string
}
export const ContactItem: FC<PropsType> = ({title}) => {
    return (
        <div className={s.wrapper}>
            <div>
                <span className={s.title}>{`YOUR ${title.toUpperCase()}:`}</span>
                <span className={s.star}>*</span>
            </div>
            {title !== 'message'
                ? <input className={title === 'subject' ? s.subject : ''} type="text"
                         id='second-input' required/>
                : <textarea className={s.message}/>
            }
        </div>
    );
};

