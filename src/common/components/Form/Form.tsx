import React, {FormEvent} from 'react';
import s from './Form.module.scss'

export const Form = () => {

    const formSend = (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log(e);
    }


    return <div className={s.wrapper}>
        <div onSubmit={formSend} className={s.form}>
            <form action="#" id="form" className={s.form__body}>

                <h1 className={s.form__title}>Відправити дані на пошту</h1>
                <div className={s.form__item}>
                    <label htmlFor='formName' className={s.form__label}>Ім'я*:</label>
                    <input id="formName" type="text" name='name' className={s.form__input}/>
                </div>
                <div className={s.form__item}>
                    <label htmlFor='formEmail' className={s.form__label}>E-mail*:</label>
                    <input id="formEmail" type="text" name='email' className={s.form__input}/>
                </div>
                <div className={s.form__item}>
                    <div className={s.form__label}>Лівша чи правша?</div>
                    <div className={s.options}>
                        <div className={s.options__item}>
                            <input id='formRightHanded' checked type="radio" value='right' name='hand'
                                   className={s.options__input}/>
                            <label htmlFor="formRightHanded" className={s.options__label}><span>Правша</span></label>
                        </div>
                        <div className={s.options__item}>
                            <input id='formLeftHanded' type="radio" value='left' name='hand'
                                   className={s.options__input}/>
                            <label htmlFor="formLeftHanded" className={s.options__label}><span>Лівша</span></label>
                        </div>
                    </div>
                </div>
                <div className={s.form__item}>
                    <label htmlFor='formMessage' className={s.form__label}>Повідомлення:</label>
                    <textarea className={s.form__input} id='formMessage' name='message'/>
                </div>
                <div className={s.form__item}>
                    <div className={s.form__label}>Вік:</div>
                    <select name="age" className={s.select}>
                        <option value='від 18 до 25' selected>Молодий</option>
                        <option value='від 25 до 45'>Старий</option>
                        <option value='від 45'>Супер стар</option>
                    </select>
                </div>
                <div className={s.form__item}>
                    <div className={s.form__label}>Прикріпити фото</div>
                    <div className={s.file}>
                        <div className={s.file__item}>
                            <input id='formImage' accept='.jpg, .png, .gif' type="file" name='image'
                                   className={s.file__input}/>
                            <div className={s.file__button}>Вибрати</div>
                        </div>
                        <div className={s.file__preview}></div>
                    </div>
                </div>
                <div className={s.form__item}>
                    <div className={s.checkbox}>
                        <input id='formAgreement' type="checkbox" name='agreement' className={s.checkbox__input}/>
                        <label htmlFor="formAgreement" className={s.checkbox__label}>Я даю згоду на обробку персональних
                            даних</label>
                    </div>
                </div>
                <button type='submit' className={s.form__button}>Відправити</button>
            </form>
        </div>
    </div>
};

