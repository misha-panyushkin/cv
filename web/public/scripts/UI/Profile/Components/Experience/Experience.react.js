import './Experience.less'
import React from 'react'
import _b from 'bem-cn'
import Article from 'UI/Pure/Article/Article.react'
import ExternalLink from 'UI/Pure/ExternalLink/ExternalLink.react'

export default function Experience ({  }) {
    const block = _b('Experience');
    const blockPlace = _b('Place');

    return (
        <Article title="Experience" _block={block}>
            
            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Founder</h4>
                    <h5 className="cHeader delimiter">at</h5>
                    <h4 className="cHeader">
                        <ExternalLink link="http://aloudly.education/" className="emphasized">
                            Aloudly Education
                        </ExternalLink>
                    </h4>
                    <h6 className="cHeader period">December 2015 - Till now</h6>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">We bring advanced technologies to the academic world. Creating an unique technique for distinguishing and eliminating human speech defects (mispronunciations). It's a startup and we are moving forward every day.</p>
                    <p className="cParagraph">Communication with people from different fields of world learning languages. Users clusterization. Preparing and gathering clients needs. Translation custom needs to technical requirements. Project definition. Project planning. Identifying appropriate architecture. Taking part in full development process including algorithms selecting and code writing. Control testing and deployment processes. Collecting and analyse statistics and users feedback. Searching for different paths. Investigating fields of study. I'm looking forward every day.</p>
                    <p className="cParagraph">Attract attention to the project for those who are interested in modern hi tech world.</p>
                    <p className="cParagraph">Frontend visualization. Backend architecture. Server side tuning. Testing. Research.</p>
                    <p className="cParagraph">Created first Alfa version. Working on second Alfa and first Beta versions.</p>
                </div>
            </div>

            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Lead Frontend Developer</h4>
                    <h5 className="cHeader delimiter">at</h5>
                    <h4 className="cHeader">
                        <ExternalLink link="http://www.embria.ru/" className="emphasized">
                            Embria
                        </ExternalLink>
                    </h4>
                    <h6 className="cHeader period">June 2012 - March 2016</h6>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">Involved in product making at different companies inside Embria group.</p>
                    <p className="cParagraph">Users clusterization. Preparing and gathering clients needs. Communication with business. Identifying appropriate architecture. Investigating and searching for the best fit technologies. Introducing and working on the key project parts. Collecting statistics and users feedback. Translating project needs to the team. Team work. Team building sessions. Scrum planning. Daily meetings. Code review. Team time management. Planning project growth. Lead education sessions.</p>
                    <p className="cParagraph">Analytics and statistics visualization. Big data visualization. Developing SAS systems. Designing API. Mobile development. Powerful web based messenger development. Move from legacy to cutting edge technologies. Creating UI guidelines and UX guidelines.</p>
                    <p className="cParagraph">Created powerful mobile web app for social network. Created mobile messenger app prototype based on Phonegap & Titanium frameworks. Created powerful web based messenger app. Created fast big data visualization dashboards system.</p>
                </div>
            </div>

            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Senior Frontend Developer</h4>
                    <h5 className="cHeader delimiter">at</h5>
                    <h4 className="cHeader">MoreSalonov</h4>
                    <h6 className="cHeader period">March 2012 - May 2016</h6>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">Developing powerful SPA. Big data visualization. Working with API. Communicating with teammates. Daily meetings. Scrum. Refactoring. Code support.</p>
                    <p className="cParagraph">Legacy code elimination. Participated in rebranded version launch.</p>
                </div>
            </div>

            <div className={blockPlace()}>
                <hgroup className={blockPlace('header')}>
                    <h4 className="cHeader">Designer, Full Stack Developer</h4>
                    <h5 className="cHeader delimiter">at</h5>
                    <h4 className="cHeader">ZED Russia</h4>
                    <h6 className="cHeader period">September 2011 - March 2012</h6>
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
                    <h6 className="cHeader period">September 2009 - September 2011</h6>
                </hgroup>
                <div className={blockPlace('body')}>
                    <p className="cParagraph">Communication with business. Identifying appropriate architecture. Introducing and working on the key project parts. Project definition. Project planning. Taking part in full web app development process.</p>
                    <p className="cParagraph">Designing and developing customized websites. Working with Adobe Flash, Adobe Photoshop, Adobe Illustrator, Adobe Premier. Frontend visualization. Backend architecture. Server side tuning. Testing.</p>
                    <p className="cParagraph">Created several projects from zero to the public launch.</p>
                </div>
            </div>

        </Article>
    );
}