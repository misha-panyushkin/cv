import './Product.less'
import React from 'react'
import _b from 'bem-cn'
import Article from 'UI/Pure/Article/Article.react'

export default function Product ({  }) {
    const block = _b('Product');

    return (
        <Article title="Product">
            <p className="cParagraph plain">Product development subdivides into two main flow for me.</p>
            <p className="cParagraph capital">Product design is the first flow. I look at variety of different issues: from classical to modern, from complex to simple, to high-quality and the most shining example of them. At the beginning, when a project starts i develop different concepts. The designing process changes the product from start to end. I rely on basics. But it is always creative process. How does the product change during the time (from start to end) - is important question for me. Great product is coming out of discussion, brainstorming and team collaboration.</p>
            <p className="cParagraph capital">Programming is the second flow. Here I look at possibilities we have in modern world. Collecting the most suitable technologies for the product. Sometimes I looking for the specific approach, sometimes more common one. Scalability and clusterization are always as main for me.</p>
            <p className="cParagraph">Flows mix with each other and turn into the product at the end of mixture. But the very first step is an idea. The key principles become visible from the first flow.</p>
        </Article>
    );
}