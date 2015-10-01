import './addons/core';
import tapPlugin from 'react-tap-event-plugin';

tapPlugin();

import React from 'react';
import {Stage} from'./components/react/stage.react';

class App {
	static start(component, mountingAreaSelector) {
		React.render(
			React.createElement(component), 
			document.getElementById(mountingAreaSelector)
		);
	}
}

App.start(Stage, 'app-mounting-place');