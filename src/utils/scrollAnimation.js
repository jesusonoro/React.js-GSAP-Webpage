import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Power3 } from "gsap/gsap-core";

export const scrollAnimation = (
  _ref,
  animCommand,
  delay,
  opacity,
  smallIcon
) => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation commands:
  // up, down, grow

  // Y Animation
  const yMove = animCommand
    ? animCommand === "up"
      ? 50
      : "down"
      ? -50
      : 0
    : 0;

  // Scale Animation
  const initScale = animCommand === "grow" ? 0.5 : 1;

  if (_ref.current) {
    var scrollTriggerOptions = {
      trigger: _ref.current,
      once: false,
      toggleActions: "play reverse play none",
      start: "top bottom",
      end: "bottom top"
    };

    // Avoid small icons go away too soon
    if(smallIcon) {
      scrollTriggerOptions.end  = "top -400";
    }

    gsap.fromTo(
      _ref.current,
      {
        opacity: opacity ? opacity : 0,
        y: yMove,
        ease: Power3.easeOut,
        scale: initScale,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: delay,
        scrollTrigger: scrollTriggerOptions,
      }
    );
  }
};
