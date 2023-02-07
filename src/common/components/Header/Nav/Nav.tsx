import React, {FC} from 'react'
import s from './Nav.module.scss';

export const Nav: FC = () => {
    return <div className={s.nav}>
        <a className={s.nav_item} href="#main">HOME</a>
        <a className={s.nav_item} href="#skills">Skills</a>
        <a className={s.nav_item} href="#my-works">Works</a>
        <a className={s.nav_item} href="#contacts">Contact</a>
    </div>
}

