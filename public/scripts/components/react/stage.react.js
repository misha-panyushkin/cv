import React from 'react';
import {Column} from './papers/column.react';

import {MainPhoto} from './main_photo/index.react';
import {About} from './about/index.react';
import {Skills} from './skills/index.react';
import {Experience} from './experience/index.react';
import {Places} from './places/index.react';

export class Stage extends React.Component {

	static propTypes = {}
	static defaultProps = {}

	state = {}

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div
				className="app-stage setup-row calligraphy-paper theme-light">
				<Column
					className="setup-item">
					<MainPhoto/>
					<About/>
					<Skills/>
				</Column>
				<Column
					className="setup-item">
					<Experience/>
					<Places/>
				</Column>
			</div>
		);
	}
};