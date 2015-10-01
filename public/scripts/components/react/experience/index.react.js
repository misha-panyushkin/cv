import React from 'react';

export class Experience extends React.Component {

	static propTypes = {}
	static defaultProps = {}

	state = {}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article
				className="experience setup-article setup-flex-item select-no">
				
				<h2
					className="experience__header setup-header calligraphy-header select-text">
					Experience
				</h2>

				<section
					className="setup-section">
					<hgroup
						className="experience__headers">
						<h3
							className="experience__header setup-header calligraphy-header select-text">
							frontend architect
						</h3>
						<h4
							className="experience__header setup-header calligraphy-header select-text">
							searching for..
						</h4>
					</hgroup>
					<p
						className="experience__paragraph setup-paragraph calligraphy-paragraph select-text">
						What am I looking for is working at a product. The work where I could make better web applications. The services that makes people's lives easier. Save people's time and makes them come back. The web developer work more fascinating and less tidious. The apps architecture scalable and extensible. The API that has low barriers to go with and secure for the users.
					</p>
					<p
						className="experience__paragraph setup-paragraph calligraphy-paragraph select-text">
						It's time to active use web 3.0 concepts and move towards web 4.0 ones.
					</p>
				</section>

				<section
					className="setup-section">
					<hgroup
						className="experience__headers">
						<h3
							className="experience__header setup-header calligraphy-header select-text">
							lead frontend developer
						</h3>
						<h4
							className="experience__header setup-header calligraphy-header select-text">
							3.5 years
						</h4>
					</hgroup>
					<p
						className="experience__paragraph setup-paragraph calligraphy-paragraph select-text">
						Developing, implementation and supporting web apps at main website. Taking part in api development and user interfaces designing. Code review.
					</p>
					<p
						className="experience__paragraph setup-paragraph calligraphy-paragraph select-text">
						Taking part in mobile web version development. Taking part in native mobile app development as part of web messenger application. Rich web messenger application development. Developing native mobile app for chat and developing mobile web version native cover app using Phonegap and later Titanium Appcelerator.
					</p>
					<p
						className="experience__paragraph setup-paragraph calligraphy-paragraph select-text">
						Embedding task runners in client side developers workflow. Moving towards component paradigm. Using ReactJS at production environment.
					</p>
				</section>

				<section
					className="setup-section">
					<hgroup
						className="experience__headers">
						<h3
							className="experience__header setup-header calligraphy-header select-text">
							senior frontend developer
						</h3>
						<h4
							className="experience__header setup-header calligraphy-header select-text">
							3 months
						</h4>
					</hgroup>
					<p
						className="experience__paragraph setup-paragraph calligraphy-paragraph select-text">
						Developing fresh services. Working with API. Working and develop maps and other client widgets. Refactoring and code support.
					</p>
				</section>

				<section
					className="setup-section">
					<hgroup
						className="experience__headers">
						<h3
							className="experience__header setup-header calligraphy-header select-text">
							designer, frontend developer
						</h3>
						<h4
							className="experience__header setup-header calligraphy-header select-text">
							6 months
						</h4>
					</hgroup>
					<p
						className="experience__paragraph setup-paragraph calligraphy-paragraph select-text">
						Designing user interfaces. Developing SPA. Communication with API.
					</p>
				</section>

				<section
					className="setup-section">
					<hgroup
						className="experience__headers">
						<h3
							className="setup-header calligraphy-header select-text">
							designer, full-cycle developer
						</h3>
						<h4
							className="experience__header setup-header calligraphy-header select-text">
							1.5 years
						</h4>
					</hgroup>
					<p
						className="experience__paragraph setup-paragraph calligraphy-paragraph select-text">
						Designing and developing customized websites. Working with flash.
					</p>
				</section>

			</article>
		);
	}

};