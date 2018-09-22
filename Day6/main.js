// let USER_QUERY=" ";
let next_Page_Token = '';
let isLoadingMore = false;
let getVideoTimeout;

$(document).ready(function() {
	// var USER_QUERY=" ";
	// var next_Page_Token= " ";
	$('#search').on('input', function(e) {
		e.preventDefault();
		$('.lds-grid').css('display', 'inline-block');
		const USER_QUERY = $('#keyword').val();
		$('#result-list').empty();
		if(getVideoTimeout)
			clearTimeout(getVideoTimeout);
		getVideoTimeout = setTimeout(function() {
			getVideoItem(USER_QUERY);
		}, 1000);
	});

	$(window).on('scroll', function() {
		if (($(document).height() - ($(window).height() + $(window).scrollTop())) < 400) {
			const USER_QUERY = $('#keyword').val();
			if(!isLoadingMore && next_Page_Token !== '') {
                isLoadingMore = true;
                getVideoItem(USER_QUERY);
            }
		}
	});
});

function getVideoItem(USER_QUERY){
	console.log(next_Page_Token);
	$.ajax({
		url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${USER_QUERY}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${next_Page_Token}`,
		method: 'GET',
		success: function(data) {
            if(data.items && data.items.length > 0) {
				let videoListItem = data.items.map(function(videoItem) {
					return `
						<a class="col-md-12" href='https://www.youtube.com/watch?v=${videoItem.id.videoId}?autoplay=true'>
						<img src="${videoItem.snippet.thumbnails.high.url}">
						<div class="video_info">
						<h2 class="title">${videoItem.snippet.title}</h2>
						<p class="description">${videoItem.snippet.description}</p>
						<span>View</span>
						</div>
					`;
				});
				$('#result-list').append(videoListItem);
				if(data.nextPageToken) 
					next_Page_Token = data.nextPageToken;
            	isLoadingMore = false;	
	            if(data.items.length === 0 || !data.nextPageToken) {
	                next_Page_Token = '';
	                $('#result-list').append('<h3>No more!</h3>');
	            }
	        }
		},
		error: function() {
 			console.log("error");
 			isLoadingMore = false;
		} 
	});
}