$(function () {

  function lookTime() {

  let dateUTC = new Date();
  let hourUTC = dateUTC.getUTCHours();
  const minutesUTC = dateUTC.getUTCMinutes();
  const videoBlock = document.querySelector('.video__block');
  const banner = document.querySelector('.banner');
  const video = document.querySelector('.video');
  hourUTC += 2;
    
    if (hourUTC >= 20) {
    if (minutesUTC >= 0 && minutesUTC == 26) {
      videoBlock.style.display = "block";
      banner.style.display = "none";
      video.style.opacity = "1";
    }
  };
  
    if (hourUTC >= 18 && minutesUTC >= 20 && hourUTC < 21 ||
    hourUTC >= 19 && minutesUTC >= 0 && hourUTC < 21) {
      videoBlock.style.display = "block";
      banner.style.display = "flex";
      setInterval(function interval() {
        video.style.opacity = "1";
      }, 1000);
  };

    if (hourUTC >= 20 || hourUTC  < 18) {
      banner.style.display = "none";
      setInterval(function interval() {
        video.style.opacity = "1";
      }, 1000);
    };
  };
  lookTime();
 
  


    





























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