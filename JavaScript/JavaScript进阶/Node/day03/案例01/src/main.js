import $ from 'jquery';
import '../css/index.css';

$(function() {
    $('#myUL>li:nth-child(2n+1)').css('color', 'red');
    $('#myUL>li:nth-child(2n)').css('color', 'green');
});