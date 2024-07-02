const $ = require('jquery');
const _ = require('lodash');

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
