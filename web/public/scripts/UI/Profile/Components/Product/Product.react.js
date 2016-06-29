import './Product.less'
import React from 'react'
import _b from 'bem-cn'
import Article from 'UI/Pure/Article/Article.react'

export default function Product ({  }) {
    const block = _b('Product');

    return (
        <Article title="Product">
            <p className="cParagraph"></p>
        </Article>
    );
}