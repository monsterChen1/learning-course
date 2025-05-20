import $ from 'jquery';

$(function() {
    $('#myUL>li:nth-child(2n+1)').css('color', 'red');
    $('#myUL>li:nth-child(2n)').css('color', 'green');
});