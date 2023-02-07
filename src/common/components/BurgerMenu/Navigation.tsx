import * as React from "react";
import {motion} from "framer-motion";
import {MenuItem} from "./MenuItem";
import s from './Styles/BurgerMenu.module.scss'

const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};

export const Navigation = (props: any) => (
    <motion.ul className={s.burger_ul} variants={variants}>
        {itemIds.map(i => (
            <MenuItem toggle={props.toggle} i={i.id} key={i.id} title={i.title} href={i.href}/>
        ))}
    </motion.ul>
);

const itemIds = [
    {id: 0, title: 'Main', href: 'main'},
    {id: 1, title: 'Skills', href: 'skills'},
    {id: 2, title: 'MyProjects', href: 'my-works'},
    {id: 3, title: 'Contacts', href: 'contacts'}];
