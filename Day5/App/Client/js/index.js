$(document).ready(function() {
  $.ajax({
    url: 'http://localhost:6969/question',
    method: 'GET',
    success: function(data) {
      $('#questionContent').text(data.question.content);
      $('.answer').attr("data-id", data.question._id);
    },
    error: function() {
      console.log("fail!");
    }
  });

	$('.answer').on('click', function(e) {
	let answer = $(e.target).attr('data-answer');
	let questionId = $(e.target).attr('data-id');
	console.log(answer, questionId);
	$.ajax({
			url: 'http://localhost:6969/answer',
			method: 'PUT',
			data : {
	            answer,
	            questionId,
	        },
			success: function(data) {
				// console.log("Success!");
				if(data.question){
					let totalVote = data.question.yes + data.question.no; 
					$('#vote').text(totalVote);
					$('#voteYes').text(((data.question.yes/totalVote)*100).toFixed(2));
					$('#voteNo').text(((data.question.no/totalVote)*100).toFixed(2));
					$('.questionInfo').css('display', 'block');
					$('.answers').css('display', 'none');
				}
			},
			error: function() {
				console.log("fail!");
			}
		});
	});
	$('#viewQuestionInfo').on('click', function (e) {
		let questionId = $('.answer:first-child').attr('data-id');
		$.ajax({
			url: `http://localhost:6969/question/${questionId}`,
			// url: 'http://localhost:6969/question/'+,     cách 2
			method: 'GET',
			success: function (data) {
				if (data.question) {
					let totalVote = data.question.yes + data.question.no;
					$('#vote').text(totalVote);
					$('#voteYes').text(((data.question.yes / totalVote) * 100).toFixed(2));
					$('#voteNo').text(((data.question.no / totalVote) * 100).toFixed(2));
					if(totalVote==0){
					// console.log("cc ="+ ((data.question.yes / totalVote) * 100).toFixed(2));
						$('.question_result_yes').css('width', '50%');
						$('.question_result_no').css('width', '50%');
					}else{
						$('.question_result_yes').css('width', ((data.question.yes / totalVote) * 100).toFixed(2)+"%");
						$('.question_result_no').css('width', ((data.question.no / totalVote) * 100).toFixed(2)+"%");
					}
					$('.questionInfo').css('display', 'block');
					$('.answers').css('display', 'none');
				}
			},
			error: function (error) {
			console.log(error);
			}
		})
	});
});