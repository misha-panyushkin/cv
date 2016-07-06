import './Product.less'
import React from 'react'
import _b from 'bem-cn'
import Article from 'UI/Pure/Article/Article.react'

export default function Product ({  }) {
    const block = _b('Product');

    return (
        <Article title="Product">
            <p className="cParagraph plain">Product development subdivides into two main flows for me.</p>
            <p className="cParagraph capital">The first one is product design flow. We look at variety of different issues. From classical to modern, from complex to pure and simple, high-quality and infusive ones. At the project start we develop different concepts. The designing process is changing the product from start to end. We always rely on basics and give us ability to make a difference during this time. The worthul product coming through discussion, brainstorming and team work.</p>
            <p className="cParagraph capital">The second one is model programming flow. Here we look through possibilities we have in modern world. Collect the most suitable ones for the product. Sometimes looking for specific approach, sometimes for more common one. Scalability and speed are always as standard.</p>
            <p className="cParagraph">The flows are combining each other and its ratio is project dependent. But the very first step is an idea. The key principles are printed from the first flow.</p>
        </Article>
    );
}