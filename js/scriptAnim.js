export function scriptAnim(){

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);


    gsap.from('.titleContainer', { 
    x: 700,
    duration: 3,
    ScrollTrigger: {
        trigger: ".titleContainer",
        scrub: true,

    }
    });
}

