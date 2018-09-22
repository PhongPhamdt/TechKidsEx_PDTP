$(document).ready(function () {
    var i = 0;
    $('#newRow').on('click', function () {

        $("#myTable").append(`<tr>
    <td>round ${++i}</td>
    <td><input type='text' ></td>
    <td><input type='text' ></td>
    <td><input type='text' ></td>
    <td><input type='text' ></td>
    </tr>`);
        console.log("12412213");
    });
    
    $('#submit').on('click', function(e) {
        let ename1 = $('#name1').val();
        let ename2 = $('#name2').val();
        let ename3 = $('#name3').val();
        let ename4 = $('#name4').val();
        $("#myTable").append(`<tr>
        <th></th>
        <th>${ename1}</th>
        <th>${ename2}</th>
        <th>${ename3}</th>
        <th>${ename4}</th>
        </tr>`);
        console.log(ename1);
    });

});