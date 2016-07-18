import './Teaching.less'
import React from 'react'
import _b from 'bem-cn'
import ExternalLink from 'UI/Pure/ExternalLink/ExternalLink.react'
import Article from 'UI/Pure/Article/Article.react'

export default function Teaching ({  }) {
    const block = _b('Teaching');

    return (
        <Article title="Teaching">
            <p className="cParagraph">Have been teaching web development basics at <ExternalLink link="http://epixx.ru/" className="emphasized">Epic Skills</ExternalLink> for a few years. Conducted students through series of practical <ExternalLink link="http://misha-panyushkin.github.io/js_learning/lesson2.html" className="emphasized">lessons</ExternalLink>. Developed unique course for beginners.</p>
        </Article>
    );
}