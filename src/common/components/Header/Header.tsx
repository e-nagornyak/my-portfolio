import React, {FC} from 'react'
import {Nav} from "./Nav/Nav";
import styleContainer from '../../styles/Container.module.css'
import styles from './Header.module.css';
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";


export const Header: FC = () => {
    return <div className={styles.headerBlock}>
        <div className={`${styleContainer.container} ${styles.header}`}>
            <BurgerMenu/>
            <Nav/>
        </div>
    </div>
}
