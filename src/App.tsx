import React, {useContext, useEffect} from 'react';
import {Main} from "./common/components/Main/Main";
import {Skills} from "./common/components/Skills/Skills";
import {MyProjects} from "./common/components/MyProjects/MyProjects";
import {Contacts} from "./common/components/Contacts/Contacts";
import {Footer} from "./common/components/Footer/Footer";
import {Header} from "./common/components/Header/Header";

import './App.scss';
import {AppContext} from "./contexts/app-context/app-context";

export const App = () => {
    const {loading, setLoading} = useContext(AppContext)

    useEffect(() => {
        setLoading(false)
    }, [setLoading])

    if (loading) {
        return <div className="App loading">
            <span className="loader"></span>
        </div>
    }

    return <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyProjects/>
        <Contacts/>
        <Footer/>
    </div>
}

