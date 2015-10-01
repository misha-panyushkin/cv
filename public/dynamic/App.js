var App = function (c) {

	function App () {}

	App.prototype = {

		start: function (DOM_node) {
			this.mounting_place = DOM_node;
			this.component = React.render(React.createElement(AppComponent, {
				picture: document.location + "/public/materials/misha2x.jpg"
			}), this.mounting_place);
			return this.showWelcomeMessageForCurious();
		},

		showWelcomeMessageForCurious: function () {
			if (c.console) {
				c.console.clear();
				c.console.log("Welcome my backstage! \n\nPlease look through all the sources and make choose what to do. If you wanna hire me, please contact me on the word. If you wanna teach me, contact me. If you wanna show me something, do the same thing - conact me! \n\nMail to: misha.panyushkin@gmail.com");
			}
			return this;
		}

	};

	return function () {
		return new App;
	};

} (this);