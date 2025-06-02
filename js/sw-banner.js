const swBanner = new Swiper(".sw-banner", {
  centeredSlides: true,
  loop: true,
  speed: 300,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".banner-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `
    <span class="${currentClass}"></span>
    <span class="${totalClass}"></span>`;
    },
  },
  navigation: {
    nextEl: ".next-bnt",
    prevEl: ".prev-btn",
  },
});

const playStationBtn = document.querySelector(".play-stop-btn");
let isStop = false;

playStationBtn.addEventListener("click" ()=> {
  if(!isStop){
    swBanner.autoplay.stop();
    playStopBtn.style.backgroundImage = `url(../../images/main/homepage/slider_stop.svg)`;
    isStop = true;
  }
})
