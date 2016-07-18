import './Education.less'
import React from 'react'
import _b from 'bem-cn'
import ExternalLink from 'UI/Pure/ExternalLink/ExternalLink.react'
import Article from 'UI/Pure/Article/Article.react'

export default function Education ({  }) {
    const block = _b('Education');

    return (
        <Article title="Education">
            <p className="cParagraph">Graduated from <ExternalLink link="//english.spbstu.ru/" className="emphasized">St. Petersburg State Polytechnic University</ExternalLink> at 2009. Studied at the <ExternalLink link="http://amd.stu.neva.ru/" className="emphasized">Department of Applied Mathematics</ExternalLink>.</p>
            <p className="cParagraph">Subject of graduate thesis: <i className="emphasized">"Rapid methods for solving maritime routing task"</i>.</p>
        </Article>
    )
}