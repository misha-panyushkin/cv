var AboutComponent = React.createClass({displayName: "AboutComponent",
	render: function () {
		return (
			React.createElement("section", {className: "author_about unselectable"}, 
	        	this.props.with_picture 
	        		? React.createElement(AvatarWithPictureComponent, {picture: this.props.picture})
	        		: React.createElement(AvatarWithoutPictureComponent, null), 
	        	
		        React.createElement("article", {className: "ibox experience start"}, 
		            React.createElement("p", {className: "text_selectable"}, "HTML5, CSS, JavaScript, Ember, ReactJS, NodeJS, Phonegap, Titanium Appcelerator, Grunt, GIT, Linux CLI etc.")
		        ), 
		        React.createElement("article", {className: "ibox"}, 
		            React.createElement("p", {className: "text_selectable"}, "5+ years in web development.")
		        ), 
		        React.createElement("article", {className: "ibox"}, 
		            React.createElement("p", {className: "text_selectable"}, "Responsible, open minded, self motivated.")
		        ), 
		        React.createElement("article", {className: "ibox author_story"}, 
		            React.createElement("p", {className: "text_selectable"}, "I'm tought myself to design and build apps in my spare time while studing and working, so I've been coding ever since. When I'm away from the laptop, I can be found searching for St. Petersburg best shot of espresso.")
		        ), 
		        React.createElement("article", {className: "ibox"}, 
		            React.createElement("p", {className: "text_selectable"}, "Senior front end developer at the one of the largest social network in Russia.")
		        ), 
		        React.createElement("article", {className: "ibox author_links"}, 
		            React.createElement("ul", null, 
		                React.createElement("li", {className: "city"}, 
		                    React.createElement("span", {className: "text_selectable"}, "Saint Petersburg")
		                ), 
		                React.createElement("li", {className: "mail text_selectable"}, 
		                    React.createElement("a", {href: "mailto:misha.panyushkin@gmail.com"}, 
		                        React.createElement("span", {className: "text_selectable"}, "misha", React.createElement("b", {className: "red_with_paddings"}, "."), "panyushkin@gmail.com")
		                    )
		                ), 
		                React.createElement("li", {className: "github text_selectable"}, 
		                    React.createElement("a", {href: "//github.com/misha-panyushkin", target: "_blank"}, 
		                        React.createElement("span", {className: "text_selectable"}, "//github", React.createElement("b", {className: "red_with_paddings"}, "."), "com/misha-panyushkin")
		                    )
		                )
		            )
		        )
		    )
		);
	}
});
var AppComponent = React.createClass({displayName: "AppComponent",

	getInitialState: function () {
		return {			
			ready: 0,
			with_picture: 0
		};
	},

	componentWillMount: function () {
		var img;
		if (this.props.picture) {
			img = new Image;
			img.onload = this.handleSuccessPictureLoading;
			img.onerror = this.handleErrorPictureLoading;
			img.src = this.props.picture;
		} else {
			this.setState({
				ready: 1
			});
		}
	},

	handleSuccessPictureLoading: function () {
		this.setState({
			ready: 1,
			with_picture: 1
		});
	},

	handleErrorPictureLoading: function () {
		this.setState({
			ready: 1,
			with_picture: 0
		});	
	},

	render: function () {
		return this.state.ready 
			? (
				React.createElement("div", {id: "scene", className: "scene"}, 
					React.createElement(AboutComponent, {with_picture: this.state.with_picture, picture: this.props.picture}), 
					React.createElement(WorkExperience, null)
				)
			)
			: React.createElement("img", {className: "red_energy", src: "/materials/spinner.svg"});
	}
});
var AvatarWithPictureComponent = React.createClass({displayName: "AvatarWithPictureComponent",
	render: function () {
		return (
            React.createElement("figure", {className: "author_avatar"}, 
    			React.createElement("a", {href: "//vk.com/misha.panyushkin", target: "_blank", className: "avatar"}, 
                    React.createElement("img", {src: this.props.picture})
                ), 
                React.createElement("figcaption", {className: "initials text_selectable"}, 
                    React.createElement("h2", {className: "name"}, "Misha Panyushkin"), 
                    React.createElement("p", {className: "caption"}, "apps developer with passion")
                )
            )
		);
	}
});
var AvatarWithoutPictureComponent = React.createClass({displayName: "AvatarWithoutPictureComponent",
	render: function () {
		return (
			React.createElement("article", {className: "noavatar initials text_selectable"}, 
                React.createElement("h2", {className: "name"}, React.createElement("a", {href: "//vk.com/misha.panyushkin", target: "_blank"}, "Misha Panyushkin")), 
                React.createElement("p", {className: "caption"}, "apps developer with passion")
            )
		);
	}
});
var WorkExperience = React.createClass({displayName: "WorkExperience",

	carriedgeShiftToTheEnd: function (event) {
		event.currentTarget.value = event.currentTarget.value;
	},

	render: function () {
		return (
			React.createElement("section", {id: "work_experience", className: "work_experience"}, 

				React.createElement("article", {className: "job future"}, 
					React.createElement("h2", {className: "position_and_place"}, React.createElement("span", {className: "position"}, "frontend architect"), React.createElement("input", {className: "place", autoFocus: "true", type: "text", onFocus: this.carriedgeShiftToTheEnd, value: "the near future"})), 
					React.createElement("p", null, "What am I looking for is working at a product. The work where I could make better web applications. The services that makes people's lives easier. Save people's time and makes them come back. The web developer work more fascinating and less tidious. The apps architecture scalable and extensible. The API that has low barriers to go with and secure for the users."), 
					React.createElement("p", null, "It's time to active use web 3.0 concepts and move towards web 4.0 ones.")
				), 

				React.createElement("article", {className: "job"}, 
					React.createElement("h2", {className: "position_and_place"}, React.createElement("span", {className: "position"}, "lead frontend developer"), React.createElement("a", {href: "//fotostrana.ru/", target: "_blank", className: "place"}, "embria, fotostrana")), 
					React.createElement("p", null, "Developing, implementation and supporting web apps at main website. Taking part in api development and user interfaces designing. Code review."), 
					React.createElement("p", null, "Taking part in mobile web version development. Taking part in native mobile app development as part of web messenger application. Rich web messenger application development. developing native mobile app for chat and developing mobile web version native cover app using Phonegap and later Titanium Appcelerator."), 
					React.createElement("p", null, "Embedding task runners in client side developers workflow. Moving towards component paradigm. Using ReactJS at production environment.")
				), 

				React.createElement("article", {className: "job"}, 
					React.createElement("h2", {className: "position_and_place"}, React.createElement("span", {className: "position"}, "frontend developer"), React.createElement("a", {href: "//moresalonov.ru/", target: "_blank", className: "place"}, "more salonov")), 
					React.createElement("p", null, "Developing fresh services. Working with API. Working and develop maps and other client widgets. Refactoring and code support.")
				), 

				React.createElement("article", {className: "job"}, 
					React.createElement("h2", {className: "position_and_place"}, React.createElement("span", {className: "position"}, "designer, frontend developer"), React.createElement("a", {href: "//www.zed.com/", target: "_blank", className: "place"}, "zed")), 
					React.createElement("p", null, "Designing user interfaces. Developing SPA. Communication with API.")
				), 

				React.createElement("article", {className: "job"}, 
					React.createElement("h2", {className: "position_and_place"}, React.createElement("span", {className: "position"}, "designer, full-cycle developer"), React.createElement("span", {className: "place"}, "freelance")), 
					React.createElement("p", null, "Designing and developing customized websites. Working with flash.")
				)

			)
		);
	}
});