
// Запрет скролла //
let element_body = document.querySelector('body');
let js_close = document.querySelectorAll('.js_close');



// LazyLoad //
function scrollPage(myImg, observer) {
    myImg.forEach((e) => {
    if (e.intersectionRatio > 0 && !e.target.dataset.loaded) {
    e.target.src = e.target.getAttribute('data-src');
    e.target.dataset.loaded = true;
    }
    });
}
let observer = new IntersectionObserver(scrollPage, {
root: null,
rootMargin: '150px',
threshold: 0.1
});
const images = document.querySelectorAll('.lazload');
images.forEach((e)=>{
observer.observe(e);
});



// Анимация при скролле //
const animItems = document.querySelectorAll(".anim_items");
if(animItems.length > 0){
    window.addEventListener("scroll", animOnScroll);
function animOnScroll(){
for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    let animItemPoint = window.innerHeight - animItemHeight / 1.5;
    if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / 1.5;
    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("actv");
    }
}
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }   
  animOnScroll();
}


// Слайдер отзывов //
let feed = document.querySelectorAll('.btn_opacity2');
let feedBack__1 = document.querySelectorAll('.feedBack__1');
let btn_feed1 = document.querySelector('.btn_morefeed__1');
let btn_feed2 = document.querySelector('.btn_morefeed__2');
let btn_opacity = document.querySelectorAll('.btn_opacity');

function opacityToggle(numrScroll){
    feedBack__1.forEach((f)=>{
        f.style.left = `${numrScroll}px`;
        feed.forEach((p)=>{
            p.classList.toggle('op_2');
        })
        btn_opacity.forEach((p)=>{
            p.classList.toggle('op_1');
        })
    });
}
function funcEvent2(){
    opacityToggle(0);
    btn_feed2.removeEventListener('click', funcEvent2);
}
btn_feed1.addEventListener('click', ()=>{ 
    opacityToggle(-220);
    btn_feed2.addEventListener('click', funcEvent2);
});




// Главный фильтр //
let wrapp_filter = document.querySelector('.wrapp_Filter_result');
let filter_res = document.querySelector('.filter_list ul');
let adress_list = document.querySelector('.adress_list');
let bron = document.querySelector('.distr_list');
let closeAdr = document.querySelector('.btnCloseAdress');
let container = document.querySelector('.adrList_name input');
let trigger = document.querySelectorAll('.distr_list li');
let elemInput1 = document.querySelectorAll('.span_row input');
let elemInput2 = document.querySelectorAll('.inp_row input');
let res = document.querySelector('#city');
let formBtnSearch = document.querySelector('.formBtnSearch');
elemInput2[0].oninput = function(){ elemInput1[0].value = this.value++; }
elemInput2[1].oninput = function(){ elemInput1[1].value = this.value;}

formBtnSearch.addEventListener('click',()=>{
let radio = document.querySelectorAll('.rad_1');
for(let i = 0; i < radio.length; i++){
if(radio[i].checked){
    f = radio[i].value;break;
}}
wrapp_filter.style.display = 'flex';
element_body.classList.toggle('page_lock');
filter_res.innerHTML = `
<li>Місто: <span>${res.value}</span></li>
<li>Район: <span>${container.value}</span> </li>
<li>Ціна від: <span>${elemInput2[0].value} $</span></li>
<li>Ціна до: <span>${elemInput2[1].value} $</span></li>
<li>Тип житла: <span>${f}</span></li>
`;
js_close.forEach((c)=>{
    c.addEventListener('click', function(){
        element_body.classList.remove('page_lock');
        wrapp_filter.style.display = "none";
    });
})
});

trigger.forEach((e)=>{ 
    e.addEventListener('click', () => {
      container.value = e.textContent;
    });
  });
  closeAdr.addEventListener('click', ()=>{
    bron.style.height = "135px";
    adress_list.addEventListener('mouseleave', ()=>{
      bron.style.height = "1px";
    });
  });



// Анимация подсчет продаж //
function timer_call() {
    let min = 2357;
    let timerId = setInterval(()=> {
        min++;
        document.querySelector(".timerSec").textContent = `${min} людей`;
        if (min >= 2500) {
        clearInterval(timerId);
        document.querySelector(".timerSec").textContent = "2500 людей";
        document.querySelector(".newText").textContent = "Знайшли житло !";
        document.querySelector(".tex2").style.transform = "translate(35%, 60%)";
        }
    }, 100);
    let anim1 = document.querySelector("#pl1 circle");
    anim1.style.strokeDashoffset = 1;
    }
if(window.innerWidth > 950){
    timer_call() 
}
let countUpElement = document.querySelector(".block11");
let isVisible = false;
window.addEventListener("scroll", () => {
    if(window.innerWidth < 950){
window.addEventListener('scroll', ()=>{
    if(scrollY > 450){
        if (!isVisible) {
            timer_call();
          isVisible = true;
        }
    }
});
}
});




// Слайдер //
let img_Block_line = document.querySelector(".img_Block_line");
let posRadio = 0;
function abc(){
posRadio = posRadio - 100.5;
img_Block_line.style.marginLeft = posRadio + "%";
if(posRadio < -200){
  posRadio = 100.5;
}
}
setInterval(abc, 4500);




// Боковое меню // 
let asideMenu = document.querySelector(".asideMenu");
let btnMenu = document.querySelector(".btnMenu");
let btn_closeM = document.querySelector(".btnCloseMenu");

function funcEvent(){
    element_body.classList.toggle('page_lock');
    asideMenu.classList.toggle('hide');
    btn_closeM.removeEventListener('click', funcEvent);
}
btnMenu.addEventListener('click', ()=>{ 
    element_body.classList.toggle('page_lock');
    asideMenu.classList.toggle('hide');
    btn_closeM.addEventListener('click', funcEvent);
});





// Переключение темы //
let xElem = document.documentElement;
let dayCircle = document.querySelector(".dayCircle");
dayCircle.addEventListener('click',(e)=>{
    e.target.parentElement.classList.toggle('theme_on');
    xElem.classList.toggle('dTheme');
});






// Выпадающий список (Шапка) //
let btnList = document.querySelectorAll(".btnList");
btnList.forEach((i)=>{
    let block_list_btn = document.querySelectorAll(".block_list_btn");
    i.addEventListener("click", ()=>{
        console.log(i.parentElement);
        const sosed = i.parentElement;
        sosed.style.cssText = `height: 170px;`;
    });
    block_list_btn.forEach((w)=>{
        w.addEventListener('mouseleave', ()=>{
            const sosed = i.parentElement;
            sosed.style.cssText = `height: 50px;`;
        });
    });
});



// Выпадающий список (Боковое меню) //
let listDownElements = document.querySelectorAll('.wrapp_listDown');
listDownElements.forEach((f) => {
  const list = f.querySelector('.list_select');   
  const listAll = document.querySelectorAll('.list_select');
  const downButton = f.querySelector('.btn_down_js');
  downButton.addEventListener('click', (e) => {
    listAll.forEach((e)=>{ e.style.height = '0px';})
    list.style.height = 'auto';
  });
  list.addEventListener('mouseleave', ()=>{
    list.style.height = '0px';
  });
});



// Выпадающий список (Футер меню) //
let listServise2 = document.querySelectorAll(".listJS_Up2");
listServise2.forEach((i)=>{
    let wrapListServ2 = document.querySelectorAll(".wrapListJS2");
    i.addEventListener("click", ()=>{
      const son = i.lastChild;
      son.style.cssText = `transform: rotate(0deg);`;
      wrapListServ2.forEach((e)=>{
        e.style.cssText = `height: 0px;`;
      });
      const sosed2 = i.nextElementSibling;
      sosed2.style.cssText = `height: auto;`;
    });
    wrapListServ2.forEach((w)=>{
        w.addEventListener('mouseleave', ()=>{
          const son = i.lastChild;
          son.style.cssText = `transform: rotate(-90deg);`;
          const sosed2 = i.nextElementSibling;
          sosed2.style.cssText = `height: 0px;`;
        });
    });
});
