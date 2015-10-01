import React from 'react';

export class MainPhoto extends React.Component {

	static propTypes = {}
	static defaultProps = {}

	state = {}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article
				className="main-photo setup-article setup-flex-item select-no">
				<figure
					className="main-photo__figure">
					<img
						className="setup-photo" 
						src="/materials/images/self.jpg"/>
					<figcaption
						className="main-photo__figcaption">
						<h3
							className="main-photo-name setup-header calligraphy-header select-text">Misha Panyushkin</h3>
						<h4
							className="main-photo-slogan setup-header calligraphy-header select-text">
							developer with passion
						</h4>
					</figcaption>
				</figure>
			</article>
		);
	}

};