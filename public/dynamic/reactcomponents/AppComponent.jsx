var AppComponent = React.createClass({

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
				<div id='scene' className='scene'>
					<AboutComponent with_picture={this.state.with_picture} picture={this.props.picture}/>
					<WorkExperience/>
				</div>
			)
			: <img className="red_energy" src="/materials/spinner.svg"/>;
	}
});