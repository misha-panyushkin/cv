import './Contacts.less'
import React from 'react'
import _b from 'bem-cn'
import Article from 'UI/Pure/Article/Article.react'
import CustomLink from 'UI/Pure/CustomLink/CustomLink.react'

export default function Contacts ({  }) {
    const block = _b('Contacts');

    return (
        <Article title="Contacts" _block={block}>

            <i  className={block('bookmark').mix('fa fa-bookmark')} 
                aria-hidden="true">
            </i>

            <CustomLink link="https://www.lonelyplanet.com/russia/st-petersburg" 
                        className="selectable emphasized"
                        faClassName="fa-map-marker"
                        blank={true}>
                Saint Petersburg, Russia
            </CustomLink>

            <CustomLink link="tel:+7-905-255-1002" 
                        className="selectable emphasized"
                        faClassName="fa-phone">
                +7 (905) 255-1002
            </CustomLink>

            <CustomLink link="mailto:misha.panyushkin@gmail.com" 
                        className="selectable emphasized"
                        faClassName="fa-envelope-o">
                misha.panyushkin@gmail.com
            </CustomLink>

            <CustomLink link="https://github.com/misha-panyushkin" 
                        className="selectable emphasized"
                        faClassName="fa-github-alt"
                        blank={true}>
                misha-panyushkin
            </CustomLink>

        </Article>
    );
}