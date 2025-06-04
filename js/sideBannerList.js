const sideBannerWrap = document.querySelector(".side-banner-wrap");
const sideBannerList = sideBannerWrap.querySelectorAll(".side-banner");
const style = {
  bgColorList: ["#edf4ff", "#def9fe", "#fff6de"],
};
// console.log(sideBannerList);

sideBannerList.forEach((sideBanner, index) => {
  sideBanner.style.backgroundColor = style.bgColorList[index];
});

//뒤에 배경색화면만 다르잖아요. 디자인토큰을  만들어서 디자이너가 줄수가 있다.
//객체안에 이렇게 배열이 있는데. 그거를 개발자가 뽑아 쓴다.
//사이드배너리스트 3개임!
