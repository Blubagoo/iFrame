
let dataObject = {
	website: ''
}
const showIFrame = (link) => {
	console.log('showing i frame,', link);
	dataObject.website = link
	$('#i-frame').show();
}
const eventListener = () => {
	$('#resume').on('click', (e) => {
		console.log('e', e)
		dataObject.website = 'https://jim-tisdale.herokuapp.com/';
		showIFrame(e.target.href);
	});
	$('.body').on('click','#full-site', (e) => {
		window.location = dataObject.website
	})
	$('.body').on('click','#icon', (e) => {
		$('#i-frame').hide();
	})
}



$(eventListener);