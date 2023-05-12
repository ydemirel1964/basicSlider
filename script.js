var sliderSettings = {
  duration: 1500,
  random: true,
};

var sliderDatas = [
  {
    name: "slider1",
    content: "slider1 content",
  },
  {
    name: "slider2",
    content: "slider2 content",
  },
  {
    name: "slider3",
    content: "slider3 content",
  },
  {
    name: "slider4",
    content: "slider4 content",
  },
  {
    name: "slider5",
    content: "slider5 content",
  },
];

document.querySelector(".card-title").textContent = sliderDatas[0].name;
document.querySelector(".card-text").textContent = sliderDatas[0].content;

var index = 0;
init(sliderSettings);
var sliderCount = sliderDatas.length;
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
  });

function init(sliderSettings) {
    console.log(sliderSettings.duration);
 interval = setInterval(() => {
    if (sliderSettings.random) {
        index = Math.floor(Math.random()* sliderCount);
    }else
    {

    }
    
    showSlide(index);
  }, sliderSettings.duration);
}

function showSlide(i) {
  if (i <= 0) {
    index = sliderCount - 1;
  }
  if (i >= sliderCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = sliderDatas[index].name;
  document.querySelector(".card-text").textContent = sliderDatas[index].content;
}

document.querySelectorAll(".arrow").forEach(function (item){
    item.addEventListener('click',function (){
        clearInterval(interval);
    });
});


