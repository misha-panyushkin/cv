var AboutComponent = React.createClass({
	render: function () {
		return (
			<section className="author_about unselectable">
	        	{this.props.with_picture 
	        		? <AvatarWithPictureComponent picture={this.props.picture}/>
	        		: <AvatarWithoutPictureComponent/>
	        	}
		        <article className="ibox experience start">
		            <p className="text_selectable">HTML5, CSS, JavaScript, Ember, ReactJS, NodeJS, Phonegap, Titanium Appcelerator, Grunt, Gulp, GIT, Linux CLI etc.</p>
		        </article>
		        <article className="ibox">
		            <p className="text_selectable">5+ years in web development.</p>
		        </article>
		        <article className="ibox">
		            <p className="text_selectable">Responsible, open minded, self motivated.</p>
		        </article>
		        <article className="ibox author_story">
		            <p className="text_selectable">I'm tought myself to design and build apps in my spare time while studing and working, so I've been coding ever since. When I'm away from the laptop, I can be found searching for St. Petersburg best shot of espresso.</p>
		        </article>
		        <article className="ibox">
		            <p className="text_selectable">Senior front end developer at the one of the largest social network in Russia.</p>
		        </article>
		        <article className="ibox author_links">
		            <ul>
		                <li className="city">
		                    <span className="text_selectable">Saint Petersburg</span>
		                </li>
		                <li className="mail text_selectable">
		                    <a href="mailto:misha.panyushkin@gmail.com">
		                        <span className="text_selectable">misha<b className="red_with_paddings">.</b>panyushkin@gmail.com</span>
		                    </a>
		                </li>
		                <li className="github text_selectable">
		                    <a href="//github.com/misha-panyushkin" target="_blank">
		                        <span className="text_selectable">//github<b className="red_with_paddings">.</b>com/misha-panyushkin</span>
		                    </a>
		                </li>
		            </ul>
		        </article>
		    </section>
		);
	}
});