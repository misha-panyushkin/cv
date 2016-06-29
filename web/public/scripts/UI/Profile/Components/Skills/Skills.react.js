import './Skills.less'
import React from 'react'
import _b from 'bem-cn'
import TagsList from 'UI/Pure/TagsList/TagsList.react'
import Article from 'UI/Pure/Article/Article.react'

export default function Skills ({  }) {
    const block = _b('Skills');

    return (
        <Article title="Skills" _block={block}>
            <TagsList list={DATA.list}/>
        </Article>
    )
}

const DATA = {
    name: 'tags',
    list: [
        {
            name: 'User First Approach'
        },
        {
            name: 'Designing SPA'
        },
        {
            name: 'Creative Thinking'
        },
        {
            name: 'Designing API'
        },
        {
            name: 'Component Approach'
        },
        {
            name: 'High Responsibility Sense'
        },
        {
            name: 'Result Oriented'
        },
        {
            name: 'Open Minded'
        },
        {
            name: 'Web 2.0'
        },
        {
            name: 'OS Stats & Trends'
        },
        {
            name: 'Virtual & Physical Diagrams'
        },
        {
            name: 'IAB guidelines'
        }, 
        {
            name: 'SEO'
        },
        {
            name:'App Speed Optimization'
        },
        {
            name: 'Frontend Technologies Pack'
        },
        {
            name: 'Backend Technologies Pack'
        },
        {
            name: 'Test Environments'
        },
        {
            name: 'Before Deploy Builders'
        },
        {
            name: 'Storages'
        },
        {
            name: 'Docker Platform'
        },
        {
            name: 'Images and Video Manipulation Pack'
        },
        {
            name: 'Mobile Pack: Phonegap, Titaniun, React Native'
        },
        {
            name: 'Git'
        },
        {
            name: 'Linux CLI'
        },
        {
            name: 'Scrum'
        },
        {
            name: 'Visual Thinking'
        }
    ]
}