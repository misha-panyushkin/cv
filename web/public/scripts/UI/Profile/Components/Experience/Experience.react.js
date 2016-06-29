import './Experience.less'
import React from 'react'
import _b from 'bem-cn'
import Article from 'UI/Pure/Article/Article.react'

export default function Experience ({  }) {
    const block = _b('Experience');
    const blockPlace = _b('Place');

    return (
        <Article title="Experience" _block={block}>
            
            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Founder</h4>
                    <h5 className="cHeader delimiter">at</h5>
                    <h4 className="cHeader">Aloudly Education</h4>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">We are bringing cutting edge technology to the academic world. Creating an unique technique for distinguish and eliminating human mispronunciations. It's a startup and we are moving forward every day.</p>
                    <p className="cParagraph">Communication with people from different fields of the language learning world. Users clusterization. Preparing and gathering clients needs. Translation custom needs to technical requirements. Project definition. Project planning. Identifying appropriate architecture. Taking part in full development process including algorithms selecting and code writing. Control testing and deployment processes. Collecting and analyse statistics and users feedback. Searching for different paths. Investigating field of study. Looking forward every day.</p>
                    <p className="cParagraph">Limelighting project for those who are interested in modern hi tech world.</p>
                    <p className="cParagraph">Frontend visualization. Backend architecture. Server side tuning. Testing. Research making.</p>
                    <p className="cParagraph">Created first Alfa version. Working on second Alfa and first Beta versions.</p>
                </div>
            </div>

            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Lead Frontend Developer</h4>
                    <h5 className="cHeader delimiter">at</h5>
                    <h4 className="cHeader">Embria</h4>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">Had been involved in products making at different companies inside Embria group.</p>
                    <p className="cParagraph">Users clusterization. Preparing and gathering clients needs. Communication with business. Identifying appropriate architecture. Investigating and searching for the best fit technologies. Introducing and working on the key project parts. Collecting statistics and users feedback. Translating project needs to the team. Team work. Team building sessions. Scrum planning. Daily meetings. Code review. Team time management. Planning project growth. Lead education sessions.</p>
                    <p className="cParagraph">Analytics and statistics visualization. Big data visualization. Developing SAS systems. Designing API. Mobile development. Powerful web based messenger development. Move from legacy to cutting edge technologies. Creating UI guidelines and UX guidelines.</p>
                    <p className="cParagraph">Created powerful social network mobile version web app. Created mobile messenger app prototype based on Phonegap & Titanium frameworks. Created powerful web based messenger app. Created fast big data visualization dashboards system.</p>
                </div>
            </div>

            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Senior Frontend Developer</h4>
                    <h5 className="cHeader delimiter">at</h5>
                    <h4 className="cHeader">MoreSalonov</h4>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">Developing powerful SPA. Big data visualization. Working with API. Communicating with teammates. Daily meetings. Scrum. Refactoring. Code support.</p>
                    <p className="cParagraph">Get rid of project legacy code. Participated in rebranded version launch.</p>
                </div>
            </div>

            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Designer, Full Stack Developer</h4>
                    <h5 className="cHeader delimiter">at</h5>
                    <h4 className="cHeader">ZED Russia</h4>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">Designing user interfaces. Developing SPA. Creating UI & UX proposals. Communicating with API. Gathering business needs.</p>
                    <p className="cParagraph">Designed SPA. Created SPA. Worked on optimization.</p>
                </div>
            </div>

            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Designer, Full Stack Developer</h4>
                    <h5 className="cHeader delimiter">as</h5>
                    <h4 className="cHeader">Freelancer</h4>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">Communication with business. Identifying appropriate architecture. Introducing and working on the key project parts. Project definition. Project planning. Taking part in full development process.</p>
                    <p className="cParagraph">Designing and developing customized websites. Working with Adobe Flash, Adobe Photoshop, Adobe Illustrator, Adobe Premier. Frontend visualization. Backend architecture. Server side tuning. Testing.</p>
                    <p className="cParagraph">Created several projects from zero to the public launch.</p>
                </div>
            </div>

        </Article>
    );
}