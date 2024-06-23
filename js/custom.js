
// last section seeMore open close

const seeBtn = document.querySelector("#seeBtn");
const seeMoremobile = document.querySelector("#seeMoremobile");


seeBtn.addEventListener("click", function(){

	if(seeMoremobile.style.display == "block"){
		seeMoremobile.style.display="none";
		this.childNodes[1].style.transform='rotate(0deg)';

	}else{
seeMoremobile.style.display="block";
this.childNodes[1].style.transform='rotate(180deg)';
	}


})


// collapse text

// var morelessBtn = document.querySelectorAll(".morelessBtn")
const coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
	
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
		this.querySelector(".morelessBtn").style.transform='rotate(0deg)';
      content.style.display = "none";
	
    } else {
		this.querySelector(".morelessBtn").style.transform='rotate(180deg)';
      content.style.display = "block";

    }
  });
}



// our story Expand 


var readmore = document.querySelector(".readMoreBtn");
var osArea1 = document.querySelector("#osArea1");
var osArea2 = document.querySelector("#osArea2");
var shortBtn = document.querySelector(".shortBtn");



osArea2.style.display="none";

readmore.addEventListener("click", function (){
	osArea1.style.display = "none";
	osArea2.style.display="block";


})

shortBtn.addEventListener("click", function (){
	osArea2.style.display="none";
	osArea1.style.display = "block";
	


})


// menu function

const navIcon = document.querySelector(".navIcon i");
const navIcons = document.querySelector(".navIcon");
const navMobile = document.querySelector(".menu");



const menuShow = () => {
    navMobile.classList.toggle("menuHide");
    navIcon.classList.toggle("fa-bars");
    navIcon.classList.toggle("fa-times");
    navIcons.classList.toggle("shadowChange")
    
}


navIcons.addEventListener("click", menuShow);








//Scroll back to top

(function($) { "use strict";

	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	});


	$("#owl-csel1").owlCarousel({
		items: 4,
		autoplay: false,
		autoplayTimeout: 3000,
		startPosition: 0,
		rtl: false,
		loop: true,
		margin: 15,
		dots: true,
		nav: true,
		navText: [
					'<i class="fa fa-angle-left" aria-hidden="true"></i>',
					'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
		navContainer: '.main-content .custom-nav',
		responsive:{
			0: {
				items: 1,						
			},
			767: {
				items: 2,						
			},
			1200: {
				items: 3,						
			}
		}

	});











	
})(jQuery); 







// collapsile slider text

// var morelessBtn = document.querySelectorAll(".morelessBtn")
var collapsibleSliderBtn = document.getElementsByClassName("collapsibleSliderBtn");
var i;

for (i = 0; i < collapsibleSliderBtn.length; i++) {
	collapsibleSliderBtn[i].addEventListener("click", function() {
	// console.log(this.childNodes[1].classList);
    this.childNodes[1].classList.toggle("rotateArrow");
    var content = this.previousElementSibling;
	
    if (content.style.display === "block") {
      content.style.display = "none";
	
    } else {
      content.style.display = "block";
	 

    }
  });
}






















// $('.moreless-button').click(function() {
// 	$('.moretext').slideToggle();
// 	$('.moreless-button').hide();
// });

// $('.moreless-button2').click(function() {
// 	$('.moretext2').slideToggle();
// 	$('.moreless-button2').hide();
// });

// $('.moreless-button3').click(function() {
// 	$('.moretext3').slideToggle();
// 	$('.moreless-button3').hide();
// });



















