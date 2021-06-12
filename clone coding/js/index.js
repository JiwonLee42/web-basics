const $scrollToTop = document.querySelector(".scrollToTop")

$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


window.addEventListener("scroll", function (){
  // 만약 스크롤 위치가 850이상이라면 
  console.log(window.scrollY)
   if (window.scrollY >= 850)
    {$scrollToTop.style.opacity = 1}// scrollToTop 버튼이 보이게 한다.
   else{$scrollToTop.style.opacity = 0} // 아니라면 안보이게 한다. 
});


//슬라이더
const $sliderRight = document.querySelector(".next") //오른쪽 화살표
const $slide = document.querySelector(".listarea") //웹툰 리스트
let current = 0; 
const slideWidth = 135;

$sliderRight.addEventListener("click",function() {
  if (current<15){ //마지막 웹툰 이미지 전까지만 current값을 1씩 더한다. 
    current++
    $slide.style.transform = "translate3d(-" + (slideWidth * current) + "px, 0px, 0px)"} //마지막 전까지 current값과 웹툰 이미지 너비값을 곱한 만큼 이동한다. 
  })


  