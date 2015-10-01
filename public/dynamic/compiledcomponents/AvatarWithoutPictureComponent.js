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