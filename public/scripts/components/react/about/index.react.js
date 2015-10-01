import React from 'react';

export class About extends React.Component {

	static propTypes = {}
	static defaultProps = {}

	state = {}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article
				className="about setup-article setup-flex-item select-no">
				<h2
					className="about__header setup-header calligraphy-header select-text">
					About
				</h2>
				<section
					className="setup-section">
					<p
						className="about__paragraph setup-paragraph calligraphy-paragraph select-text">
						I'm tought myself to design and build apps in my spare time while studing and working, so I've been coding ever since. 5+ years in web design & development. When I'm away from the laptop, I can be found searching for <span className="no-words-wrap">St. Petersburg</span> best shot of espresso.
					</p>
				</section>
			</article>
		);
	}

};