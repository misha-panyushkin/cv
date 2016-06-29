import './App.less'
import React from 'react'
import Vocation from 'UI/Vocation/Vocation.react'

export default function App ({ children }) {
    return (
        <section
            className={'App cPaper unselectable'}>
            { children }
        </section>
    );
}