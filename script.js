gsap.registerPlugin(ScrollTrigger);

 function animTitle(){
    document.body.style.overflow = 'auto';
    
    gsap.utils.toArray('section').forEach(
        (section, index) => {
        if(section.className === "contact-section" 
        || section.className === "works-section" 
        || section.className ==="skills-section"){

          const w = section.querySelector('.titleContainer');
          const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    
          gsap.fromTo(w, { x }, {
              x: xEnd,
              scrollTrigger: {
                  trigger: "titre-animate",
                  scrub: 01 } 
              });
              }
          }
      )     
}


function animContactText(){

    gsap.from(".contact-section__container--numero",{
        rotation: 360,
        scale: 11,
        scrollTrigger:{
            trigger: "contact-section__container",
            scrub: 1 
        }
    })

    gsap.to("#number69",{
        rotation: 720,
        scrollTrigger:{
            trigger: "hero-section__number",
            scrub: 1 
        }
    })

    gsap.to(".titre-hero",{
        backgroundPosition: "0 -100%",
        scrollTrigger:{
            trigger: "hero-section",
            end: "500px",
            scrub: 0.5,
        }
    })

    // const query = window.matchMedia("(max-width: 500px)")

}

function test(){
    if(window.innerWidth < 500){
        console.log(window.innerWidth)
    
            gsap.to(".code-display", {
                y: "1000px",
                scrollTrigger:{
                    trigger: "grid-1",
                    scrub: 1 
                }
            })
            
        }else{
            console.log("wow")
        }
}
  


 function skills(){
    $(document).ready(function () {
        function hex_initial_animation() {
            $(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
            $(".hex-wrap").velocity("callout.pulse");
            $(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
            }
        hex_initial_animation();

    var hoverdetect = setInterval(function(){ hovernotify() }, 3000);
    function hovernotify() {
        $(".hover-notify").velocity("callout.tada");
    }
    function myStopFunction() {
    $(".hover-notify").velocity('stop', true).velocity("fadeOut");
        clearInterval(hoverdetect);
    }

            $(".hex-init").mouseenter(function () {
                
                myStopFunction();

                var title_color =  $(this).parent().attr("data-color");
                var title_name = $(this).parent().attr("data-title");
                var desc_name = $(this).parent().attr("data-content");

                    function hex_description() {
                        $('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
                        $('.' + desc_name).siblings().removeClass('desc-active');
                            setTimeout(function() {
                                $('.' + desc_name).addClass('desc-active');
                                $('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
                                $('.code-title, .desc-active span').velocity({color: title_color}, { queue: false });
                                $('.code-title').text(title_name)
                            }, 0);
                    }
                    hex_description();

                    $(this).parent().addClass('hexactive'); 
                    $('.hexactive').velocity({scaleX:"1.1",scaleY:"1.1"}, { duration: 200 });

                }).mouseleave(function () {
                    $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
                });
    });
}

//copy number

function copyToClipboard() {
    const str = document.getElementById('item-to-copy').innerText
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    document.execCommand('copy') ? 
    alert('Le num??ro a bien ??t?? copi??, vous pouvez m\'appeler ?? tout moment!') : ""
  }

function customCursor(){
    $(document)
	.mousemove(function(e) {
	$('.your-cursor4')
		.eq(0)
		.css({
		left: e.pageX,
		top: e.pageY
	});
	setTimeout(function() {
		$('.your-cursor4')
			.eq(1)
			.css({
			left: e.pageX,
			top: e.pageY
		});
	}, 400);
	setTimeout(function() {
		$('.your-cursor4')
			.eq(2)
			.css({
			left: e.pageX,
			top: e.pageY
		});
	}, 200);
});
$(document).on("mousemove", function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});
}

//Reload when window size change
$(window).resize(function() {
    location.reload()
});


animTitle()
skills()
animContactText()
test()
copyToClipboard();
customCursor();