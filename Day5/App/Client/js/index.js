// $(document).ready(function() {
// 	$.ajax({
// 		url: 'http://localhost:6969/question',
// 		method: 'GET',
// 		success: function(data) {
// 			console.log("Success!", data.question);
// 			// $('h1').replaceWith(data);
// 			$('h1').html(data.question);
// 			$('.answer').attr("data-id",data.question.id);
// 		},
// 		error: function() {
// 			console.log("FAIL !!!");
// 		}
// 	});

// 	$('.answer').on('click', function(e) {
// 		let answer = $(e.target).attr('data-answer');
// 		let questionId = $(e.target).attr('data-id');
// 		console.log(answer, questionId);
// 	});
// })
$(document).ready(function() {
  $.ajax({
    url: 'http://localhost:6969/question',
    method: 'GET',
    success: function(data) {
      $('h1').text(data.question.questionContent);
      $('.answer').attr("data-id", data.question.id);
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
  			console.log("Success!");
  		},
  		error: function() {
  			console.log("fail!");
  		}
  	});
  });

  // $.ajax({
  //       url: 'http://localhost:6969/answer',
  //       method: 'POST',
  //       dataType: 'JSON',
  //       success: function (data) {
  //           $('h1').text(data.question.questionContent);
  //           $('h3').attr('data-id', data.question.id)
  //       },
  //       error: function () {
  //           console.log("error!");
  //       }
  //   });
});

