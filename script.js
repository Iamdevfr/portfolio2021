

//////////////////////////////////////////////////////////////
/////////////////////////// MENU TOGGLE //////////////////////
/////////////////////////////////////////////////////////////
 function nav() {
    
    (function($) {

        $(document).ready(function(){
        $('.toggle-nav').on('click', function() {
            toggleNavigation($(this), $('.nav-pane'));
            changeLetters($(this));
        });
    
        function toggleNavigation(btn, nav) {
            btn.toggleClass('open');
            nav.toggleClass('open');
        }
    
        function changeLetters(btn) {
            var m = $('.toggle-nav span.m');
            var e = $('.toggle-nav span.e');
            var n = $('.toggle-nav span.n');
            var u = $('.toggle-nav span.u');
    
            e.toggleClass('btn-close');
    
            if(btn.hasClass('open'))
            {
            m.text("E");
            n.text("I");
            u.text("T");
            }
            else
            {
            m.text("M");
            n.text("N");
            u.text("U");
            }
        }
        });
    
    })(jQuery);
}

 function scriptAnim(){

    gsap.registerPlugin(ScrollTrigger);


    gsap.fromTo('.titleContainer', {x: 1500}, {x: -500, duration:3 });

    // gsap.from(".title-animate", {
    //     scrollTrigger: ".title-animate", // start the animation when ".box" enters the viewport (once)
    //     x: -500
    //   });
}

    // ScrollTrigger: {
    //     trigger: ".titleContainer",
    //     scrub: true,

    // }
  


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


nav()
scriptAnim()
skills()
