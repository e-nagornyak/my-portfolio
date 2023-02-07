import React from 'react';
import './App.css';
import {Main} from "./common/components/Main/Main";
import {Skills} from "./common/components/Skills/Skills";
import {MyProjects} from "./common/components/MyProjects/MyProjects";
import {Contacts} from "./common/components/Contacts/Contacts";
import {Footer} from "./common/components/Footer/Footer";
import {Header} from "./common/components/Header/Header";


export const App = () => {


    return <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyProjects/>
        <Contacts/>
        <Footer/>
    </div>
}
