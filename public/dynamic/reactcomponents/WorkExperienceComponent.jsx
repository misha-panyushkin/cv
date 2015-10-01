var WorkExperience = React.createClass({

	carriedgeShiftToTheEnd: function (event) {
		event.currentTarget.value = event.currentTarget.value;
	},

	render: function () {
		return (
			<section id='work_experience' className='work_experience'>

				<article className='job future'>
					<h2 className='position_and_place'><span className='position'>frontend architect</span><input className='place' autoFocus='true' type='text' onFocus={this.carriedgeShiftToTheEnd} value='the near future'/></h2>
					<p>What am I looking for is working at a product. The work where I could make better web applications. The services that makes people's lives easier. Save people's time and makes them come back. The web developer work more fascinating and less tidious. The apps architecture scalable and extensible. The API that has low barriers to go with and secure for the users.</p>
					<p>It's time to active use web 3.0 concepts and move towards web 4.0 ones.</p>
				</article>

				<article className='job'>
					<h2 className='position_and_place'><span className='position'>lead frontend developer</span><a href='//fotostrana.ru/' target='_blank' className='place'>embria, fotostrana</a></h2>
					<p>Developing, implementation and supporting web apps at main website. Taking part in api development and user interfaces designing. Code review.</p>
					<p>Taking part in mobile web version development. Taking part in native mobile app development as part of web messenger application. Rich web messenger application development. developing native mobile app for chat and developing mobile web version native cover app using Phonegap and later Titanium Appcelerator.</p>
					<p>Embedding task runners in client side developers workflow. Moving towards component paradigm. Using ReactJS at production environment.</p>
				</article>

				<article className='job'>
					<h2 className='position_and_place'><span className='position'>frontend developer</span><a href='//moresalonov.ru/' target='_blank' className='place'>more salonov</a></h2>
					<p>Developing fresh services. Working with API. Working and develop maps and other client widgets. Refactoring and code support.</p>
				</article>

				<article className='job'>
					<h2 className='position_and_place'><span className='position'>designer, frontend developer</span><a href='//www.zed.com/' target='_blank' className='place'>zed</a></h2>
					<p>Designing user interfaces. Developing SPA. Communication with API.</p>
				</article>

				<article className='job'>
					<h2 className='position_and_place'><span className='position'>designer, full-cycle developer</span><span className='place'>freelance</span></h2>
					<p>Designing and developing customized websites. Working with flash.</p>
				</article>

			</section>
		);
	}
});