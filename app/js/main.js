$(function () {

  let dateUTC = new Date();
  let hourUTC = dateUTC.getUTCHours();
  let minutesUTC = dateUTC.getUTCMinutes();
  let video = document.querySelector('.video__block');
  let banner = document.querySelector('.banner');
  hourUTC += 2;
  function lookTime() {
    if (hourUTC >= 18) {
    if (minutesUTC >= 0 && minutesUTC <= 20) {
      video.style.display = "block";
      banner.style.display = "none";
    }
  };
  
    if (hourUTC >= 18 && minutesUTC >= 20 && hourUTC < 21 ||
    hourUTC >= 19 && minutesUTC >= 0 && hourUTC < 21) {
    video.style.display = "block";
    banner.style.display = "block";
  };

    if (hourUTC > 21 || hourUTC  < 18) {
    video.style.display = "none";
    banner.style.display = "none";
  };
  };

  setInterval(lookTime, 1000);
  


  
  console.log(hourUTC);
  console.log(minutesUTC);
  console.log(dateUTC);


    





























  // let testBtn = document.querySelector('.test-btn');

  // console.log(testBtn);


  // testBtn.addEventListener("click", () => {
  //   let dateInObj = document.querySelector('.test');

  //   let date = new Date(dateInObj.value);
  //   console.log(dateInObj.value);
  //   let x = date.getTime();

  //   console.log(date);
  //   console.log(x);
//  });












  // let min = 60 * 1000;
  // let hour = min * 60;
  // let time = Date.now();
  // let myTime = new Date().getTimezoneOffset();

  // let UTCNull = time + myTime * min;

  // let myUTC = UTCNull / (hour);

  // console.log(time);
  // console.log(myTime);
  // console.log(UTCNull);
  // console.log("myUTC" + myUTC);
});