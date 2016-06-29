import './TagsList.less'
import React from 'react'
import _b from 'bem-cn'

export default function TagsList ({ list }) {
    const block = _b('TagsList');

    return (
        <ul className={block()}>
            {list.map((itemData, index) => 
                <li key={index}
                    className={block('item')}>
                    {itemData.name}
                </li>
            )}
        </ul>
    );
}