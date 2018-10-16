$.ajax({
		url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${USER_QUERY}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${next_Page_Token}`,
		method: 'GET',
		success: function(data) {
           
		},
		error: function() {
 			console.log("error");
		} 
	});