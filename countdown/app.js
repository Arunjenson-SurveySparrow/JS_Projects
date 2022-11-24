const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveway');
const deadline = document.querySelector ('.deadline');

const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2022,11,3,9,0,0);
// console.log(futureDate)

let year = futureDate.getFullYear();
let month = futureDate.getMonth();
let hours = futureDate.getHours();
let mins = futureDate.getMinutes();
const date = futureDate.getDate();
let day = futureDate.getDay();

day = weekdays[day]

month = months[month];

giveaway.textContent = ` Giveaway Ends on  ${day},${date} ${month} ${year} ${hours}:${mins}PM` ;


const futureTime = futureDate.getTime();

const getRemainingTime = () =>{
const today = new Date().getTime();
const t = futureTime - today;

// 1s = 1000ms
//1min = 60s
// 1hr = 60min
//1 day = 24hr

// values in ms

const oneDay = 24 * 60 * 60 *1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

// calcucalte all values

let days = t / oneDay;

days = Math. floor(days);
let hours = Math. floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor((t % oneMinute) / 1000);

// set values array;

const values = [days, hours, minutes, seconds];

const format = (item)=> {
if (item < 10) { 
return (item = `0${item}`);
}
return item;

}

items. forEach( (item, index)=> {
item.innerHTML = format(values [index] );

});
if( t < 0){
  clearInterval(countdown);
  deadline.innerHTML = (`<h4 class="expired">Your IA have started..</h4>`)
}

}
//countdown
let countdown = setInterval(getRemainingTime,1000);


getRemainingTime();