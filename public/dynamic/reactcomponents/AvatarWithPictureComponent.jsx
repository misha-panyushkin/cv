var AvatarWithPictureComponent = React.createClass({
	render: function () {
		return (
            <figure className="author_avatar">
    			<a href="//vk.com/misha.panyushkin" target="_blank" className="avatar">
                    <img src={this.props.picture}/>
                </a>
                <figcaption className="initials text_selectable">
                    <h2 className="name">Misha Panyushkin</h2>
                    <p className="caption">apps developer with passion</p>
                </figcaption>
            </figure>
		);
	}
});