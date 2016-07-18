import './About.less'
import React from 'react'
import _b from 'bem-cn'
import Article from 'UI/Pure/Article/Article.react'

export default function About ({  }) {
    const block = _b('About');

    return (
        <Article title="About">
            <p className="cParagraph">Fighting fit. Play in all team sports. Swim well. Keen on neural networks and artificial intelligence. Also I could be found searching for best city shot of espresso.</p>
            <p className="cParagraph">Be something from nothing or create something from nothing is the idea of the process called life.</p>
            <p className="cParagraph">Responsible for the business in which I participate.</p>
        </Article>
    );
}