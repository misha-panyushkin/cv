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