import './Vocation.less'
import React from 'react'
import _b from 'bem-cn'

export default function Vocation ({  }) {
    const block = _b('Vocation');

    return (
        <article
            className={block().mix('selectable')}>
            <h2 className={block('title').mix('cHeader')}>Product Developer</h2>
            <h3 className={block('subtitle').mix('cHeader')}>Solutions Architect</h3>
        </article>
    );
}