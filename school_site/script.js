const section = document.querySelector('.section') 
const button = document.querySelector('.button')
const image = document.querySelectorAll('.b-wrapper')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const button2 = document.querySelectorAll('.bttn')[0]
const button3 = document.querySelectorAll('.bttn')[1]
const breakfast = document.querySelector('.breakfast')
const way = document.querySelector('.way')
const on_way = document.querySelector('.on_way')
const button4 = document.querySelector('.way_btn')
const school = document.querySelector('.school')
const school_btn = document.querySelector('.school_btn')
const test_wrapper = document.querySelectorAll('.test_wrapper')
const answer_wrapper = document.querySelectorAll('.answer_wrapper')
const open = document.querySelector('.modal_open')
const modal = document.querySelector('.modal')
const close = document.querySelector('.fas')
const buttonBack = document.querySelector('.buttonBack')
const buttonBackWay = document.querySelectorAll('.buttonBack')[1]
const buttonBackSchool = document.querySelectorAll('.buttonBack')[2]
const buttonBacktest= document.querySelectorAll('.buttonBack')[3]

let slideIndex=1
button.addEventListener("click", () => { 
	section.classList.remove("back")
	section.classList.add("up"); });
button2.addEventListener("click", () => { 
	breakfast.classList.remove("back")
	breakfast.classList.add("up"); });
button3.addEventListener("click", () => { 
	way.classList.remove("back")
	way.classList.add("up"); });
button4.addEventListener("click", () => { 
	on_way.classList.remove("back")
	on_way.classList.add("up"); });
school_btn.addEventListener("click", () => { 
	school.classList.remove("back")
	school.classList.add("up"); });
buttonBack.addEventListener("click", () => { 
	breakfast.classList.add("back");
	breakfast.classList.remove("back")
	section.classList.add("back")
	section.classList.remove("up")
});
buttonBackWay.addEventListener("click", () => { 
	way.classList.add("back");
	way.classList.remove("back")
	breakfast.classList.add("back")
	breakfast.classList.remove("up")
});
buttonBackSchool.addEventListener("click", () => { 
	on_way.classList.add("back");
	on_way.classList.remove("back")
	way.classList.add("back")
	way.classList.remove("up")
});
buttonBacktest.addEventListener("click", () => { 
	school.classList.remove("back");
	school.classList.add("back")
	on_way.classList.add("back")
	on_way.classList.remove("up")
	school.classList.remove("back");
});

changeSlide(1)
function changeSlide(n) { if(n < 1) { slideIndex = image.length } if(n > image.length) { slideIndex = 1 } for(let i = 0; i < image.length; i++) { image[i].style.display = 'none' } 
image[slideIndex - 1].style.display = 'block' 
 }
right.addEventListener('click',function(){
    changeSlide(slideIndex+=1)
})
left.addEventListener('click',function(){
    changeSlide(slideIndex-=1)
})

const slider = document.querySelectorAll('.w-wrapper')
 for(const slide of slider) { 
     slide.addEventListener('click', () => { slider.forEach( s => s.classList.remove('active')) 
 slide.classList.add('active') }) }



	const tabContent = document.querySelectorAll('.way_img')
	const tab = document.querySelectorAll('.way_title')
	hideTabsContent(1);	


function hideTabsContent(a){
	for(let i = a; i < tabContent.length; i++){
		tabContent[i].style.display = 'none'
		
	}	
}

document.querySelector('.way_wrapper').onclick = function(event){
	let target = event.target;
	if(target.className == 'way_title'){
		for(let i = 0; i < tab.length; i++){
			if(target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b){
	if(tabContent[b].style.display == 'none'){
		hideTabsContent(0);
		tabContent[b].style.display = 'block'
	
	}
}
function testNumber(t){

    for (let i = 0; i<test_wrapper.length;i++){
        test_wrapper[i].style.display='none'
    }
    test_wrapper[t].style.display='block'
}
testNumber(0)

answer_wrapper[0].addEventListener('click',function(event){
	if(event.target.classList.contains('answer')){
		testNumber(1)
	}
})
answer_wrapper[1].addEventListener('click',function(event){
	if(event.target.classList.contains('answer')){
		testNumber(2)
	}
})
answer_wrapper[2].addEventListener('click',function(event){
	if(event.target.classList.contains('answer')){
		testNumber(3)
	}
})
answer_wrapper[3].addEventListener('click',function(event){
	if(event.target.classList.contains('answer')){
		testNumber(4)
	}
})
answer_wrapper[4].addEventListener('click',function(event){
	if(event.target.classList.contains('answer')){
		testNumber(5)
	}
})
open.addEventListener('click',function(){
    modal.classList.add('active')
})

close.addEventListener('click',function(){
    modal.classList.remove('active')
})