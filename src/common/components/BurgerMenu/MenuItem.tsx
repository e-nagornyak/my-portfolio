import * as React from "react";
import {motion} from "framer-motion";
import s from './Styles/BurgerMenu.module.scss'

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({i, title, href, toggle}: any) => {
    return (
        <motion.li
            className={s.burger_li}
            variants={variants}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
        >
            <a className={s.text_placeholder} href={`#${href}`}
               onClick={() => toggle()}
               style={{
                   fontSize: '35px',
                   borderBottom: `2px solid ${colors[i]}`,
                   padding: '0 0 23px 2px',
                   textDecoration: 'none',
                   textAlign: 'center'
               }}>{title}</a>
        </motion.li>
    );
};
