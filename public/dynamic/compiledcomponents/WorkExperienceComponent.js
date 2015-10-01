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