import React from 'react';

export class Places extends React.Component {

	static propTypes = {}
	static defaultProps = {}

	state = {}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article
				className="places setup-article setup-flex-item select-no">
				<h2
					className="places__header setup-header calligraphy-header select-text">
					Places
				</h2>
				<section
					className="setup-section">
					<ul
						className="places__list">
						<li
							className="places__list-item">
							<a
								className="places__list-item__link"
								href="mailto:misha.panyushkin@gmail.com">
								<i className="fa fa-envelope-o"></i>
							</a>
						</li>
						<li
							className="places__list-item">
							<a
								className="places__list-item__link"
								href="//github.com/misha-panyushkin"
								target="_blank">
								<i className="fa fa-github-alt"></i>
							</a>
						</li>
						<li
							className="places__list-item">
							<a
								className="places__list-item__link"
								href="//facebook.com/mi.panyushkin"
								target="_blank">
								<i className="fa fa-facebook-f"></i>
							</a>
						</li>
						<li
							className="places__list-item">
							<a
								className="places__list-item__link"
								href="//vk.com/misha.panyushkin"
								target="_blank">
								<i className="fa fa-vk"></i>
							</a>
						</li>
						<li
							className="places__list-item">
							<a
								className="places__list-item__link"
								href="//en.wikipedia.org/wiki/Saint_Petersburg"
								target="_blank">
								<i className="fa fa-map-marker"></i>
								<span 
									className="places__list-item__label">
									Saint Petersburg
								</span>
							</a>
						</li>
					</ul>
				</section>
			</article>
		);
	}

};