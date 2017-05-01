var prompt = require('prompt-sync')();

function getSleepHours(day) {
  var hours = Number(prompt('How many hours of sleep did you get ' + day + '? '));
  return hours;
}

function getActualSleepHours() {
  var total = 0;
  total += getSleepHours('Monday');
  total += getSleepHours('Tuesday');
  total += getSleepHours('Wednesday');
  total += getSleepHours('Thursday');
  total += getSleepHours('Friday');
  total += getSleepHours('Saturday');
  total += getSleepHours('Sunday');
  return total;
}

function getIdealSleepHours() {
  var idealHours = Number(prompt('What is your ideal amount of hours to sleep every night? '));
  return idealHours * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  var over = 0;
  var under = 0;
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You slept the perfect amount of hours!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got some extra sleep this week!');
    over += (actualSleepHours - idealSleepHours);
    console.log('You slept ' + over + ' extra hours this week.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some more sleep!');
    under += (idealSleepHours - actualSleepHours);
    console.log('You slept ' + under + ' hours less than your ideal amount of hours.');
  }
}

calculateSleepDebt();
