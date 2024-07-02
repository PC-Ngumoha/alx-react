// const $ = require('jquery');
// const _ = require('lodash');
import $ from 'jquery';
import _ from 'lodash';
import logo from '../assets/holberton-logo.jpg';
import '../css/main.css';

$('body').append("<div id='logo'></div>");
$('#logo').attr('width', '200px');
$('#logo').attr('height', '200px');
$('#logo').css('background-image', logo);

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');


$('button').on('click', _.debounce(updateCounter));

function updateCounter() {
  let text = $('#count').html();
  let count = 0;
  if (text !== '') {
    count = parseInt(text.split(' ')[0]);
  }
  count += 1;
  text = `${count} clicks on the button`;
  $('#count').html(text);
}
