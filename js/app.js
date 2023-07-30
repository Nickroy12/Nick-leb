var nav = document.querySelector('.nav');  

window.addEventListener('scroll', function(){
  if (window.pageYOffset > 100){
    nav.classList.add('bg-dark','shadow');
  }else {
    nav.classList.remove('bg-dark','shadow');
  }
});
AOS.init();
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener('mouseover',function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor2.style.left = x + "px";
  cursor2.style.top = y + "px";
 })

var typed = new Typed('.first-text', {
strings: ['Coder', 'Student', 'Writer','Philoshoper'],
typeSpeed: 150,
backSpeed:150,
loop:true
});
myBtn = document.getElementById("backtop");
window.onscroll = function(){
if(document.body.scrollTop > 20|| document.documentElement.scrollTop > 20){
  myBtn.style.display = "block"
}else{
  myBtn.style.display = "none"
}
}
function topScroll(){
window.scrollTo({
  top:0,
  right:0,
  behavior:"smooth"
})
}
window.onscroll = function(){
  var pos = document.documentElement.scrollTop;
  var calcHight = document.documentElement.scrollHeight-
                document.documentElement.clientHeight;
     var scroll = pos * 100 / calcHight;
     document.getElementById('progresse').style.width = scroll + "%";
     

}
let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
        else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);
var preloader = document.getElementById('loader');
function myfuntion(){
    preloader.style.display = 'none'
}