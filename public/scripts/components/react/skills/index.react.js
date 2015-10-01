import React from 'react';

export class Skills extends React.Component {

	static propTypes = {}
	static defaultProps = {}

	state = {}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article
				className="skills setup-article setup-flex-item select-no">
				<h2
					className="skills__header setup-header calligraphy-header select-text">
					Skills
				</h2>
				<section
					className="setup-section">
					<p
						className="skills__paragraph setup-paragraph calligraphy-paragraph tags">
						<span className="tags__item tags__item-bright select-text">User First Approach</span>
						<span className="tags__item tags__item-bright select-text">Result Oriented</span>
						<span className="tags__item tags__item-bright select-text">Open Minded</span>
						<span className="tags__item tags__item-bright select-text">Creative Thinking</span>
						<span className="tags__item tags__item-bright select-text">High Responsibility Sense</span>

						<span className="tags__item tags__item-bright select-text">Designing API</span>
						<span className="tags__item tags__item-bright select-text">Component Approach</span>
						<span className="tags__item tags__item-bright select-text">Designing SPA</span>

						<br/>

						<span className="tags__item select-text">JavaScript</span>
						<span className="tags__item select-text">HTML5</span>
						<span className="tags__item select-text">CSS</span>
						
						<span className="tags__item select-text">ReactJS</span>
						<span className="tags__item select-text">JS Hint</span>
						<span className="tags__item select-text">JS Lint</span>
						<span className="tags__item select-text">Grunt</span>
						<span className="tags__item select-text">Gulp</span>
						<span className="tags__item select-text">WebPack</span>
						
						<span className="tags__item select-text">NPM</span>
						<span className="tags__item select-text">Bower</span>

						<span className="tags__item select-text">Git</span>

						<span className="tags__item select-text">Node.js</span>
						<span className="tags__item select-text">Express.js</span>
						<span className="tags__item select-text">Python</span>
						<span className="tags__item select-text">Django</span>

						<span className="tags__item select-text">PostgreSQL</span>
						<span className="tags__item select-text">MySQL</span>
						<span className="tags__item select-text">Redis</span>

						<span className="tags__item select-text">Docker</span>

						<span className="tags__item select-text">Phonegap</span>
						<span className="tags__item select-text">Titanium Appcelerator</span>
						
						<span className="tags__item select-text">Linux CLI</span>
					</p>
				</section>
			</article>
		);
	}

};