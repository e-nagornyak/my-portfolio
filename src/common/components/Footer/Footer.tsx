import React, {FC} from 'react'
import styleContainer from '../../styles/Container.module.css'
import s from './Footer.module.scss';

export const Footer: FC = () => {
    return <div className={s.footerBlock}>
        <div className={`${styleContainer.container} ${s.footer}`}>
            <h4 className={s.name}>Evhen Nahorniak</h4>
            <div className={s.icons}>
                <div className={s.icon}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2504/2504941.png" alt=""/>
                </div>
                <div className={s.icon}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt=""/>
                </div>
                <div className={s.icon}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt=""/>
                </div>
                <div className={s.icon}>
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt=""/>
                </div>
            </div>
            <h4 className={s.rights}>© 2023 all rights reserved</h4>
        </div>
    </div>
}