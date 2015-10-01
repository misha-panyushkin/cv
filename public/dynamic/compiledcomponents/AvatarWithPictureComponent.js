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