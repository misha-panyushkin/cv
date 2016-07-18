import './Picture.less'
import React from 'react'
import _b from 'bem-cn'

export default function Picture ({  }) {
    const block = _b('Picture');

    return (
        <article
            className={block().mix('selectable')}>
            <figure className={block('figure')}>
                <img src="/materials/misha2@2x.jpg" alt="Misha's photo"/>
                <figcaption>
                    <h3 className="cHeader name">Misha Panyushkin</h3>
                    <h4 className="cHeader vocation">Web Product Developer</h4>
                </figcaption>
            </figure>
        </article>
    );
}