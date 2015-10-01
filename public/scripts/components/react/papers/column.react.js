import React from 'react';

export class Column extends React.Component {

	static propTypes = {}
	static defaultProps = {}

	state = {}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				{...this.props}
				className={'setup-column '.concat(this.props.className ? '' + this.props.className : '')}>
				{this.props.children}
			</div>
		);
	}

};