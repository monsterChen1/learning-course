import $ from 'jquery';
import '../css/index.css';
import '../less/index.less';

$(function() {
    $('#myUL>li:nth-child(2n+1)').css('color', 'red');
    $('#myUL>li:nth-child(2n)').css('color', 'green');
});