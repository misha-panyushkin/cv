import './Profile.less'
import React, { Component } from 'react'
import classNames from 'classnames'
import _b from 'bem-cn'

import {
    Product,
    Picture,
    About,
    Teaching,
    Education,
    Skills,
    Contacts,
    Experience
} from './Components'

export default class Profile extends Component {
    constructor (props) {
        super(props);
        this.boxClassName = 'Profile';
        this.block = _b(this.boxClassName);
    }

    render () {
        return (
            <section
                className={ this.block() }>
                <section className={ this.block('section') }>
                    <Picture/>
                    <Product/>
                    <Education/>
                    <Teaching/>
                    <About/>
                    <Skills/>
                    <Contacts/>
                </section>
                <aside className={ this.block('aside') }>
                    <Experience/>
                </aside>
            </section>
        )
    }
}