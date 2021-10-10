const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const map = document.querySelector("#map");
let myMap;

const endDate = new Date("Oct 15, 2021 12:00:00").getTime();

const timer = setInterval(() => {
  let now = new Date().getTime();

  let time = endDate - now;

  if (time >= 0) {
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = ("0" + hours).slice(-2);
    minutesElement.textContent = ("0"+ mins).slice(-2);
    secondsElement.textContent = ("0"+ secs).slice(-2);
  }

}, 1000);


ymaps.ready(init);

function init() {
  myMap = new ymaps.Map("map", {
    center: [44.609975, 33.516242],

    zoom: 18,
    });

    myPlacemark1 = new ymaps.Placemark([44.609975, 33.516242], {
      balloonContent: 'Наш чудесный салон',
      preset: 'islands#blueIcon'
    }, {
      iconLayout: 'default#image',
      iconImageClipRect: [[0,0], [28, 41]],
      iconImageSize: [16, 32],
      iconImageOffset: [-15, -27],
    }),
  
  myMap.geoObjects.add(myPlacemark1)
};