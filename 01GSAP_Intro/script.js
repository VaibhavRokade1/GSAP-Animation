// to == > Initisial to final postion
// gsap.to("#box1", {
//   x: 500,
//   y: 400,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   //   zIndex: 10,
//   borderRadius: 500,
// });

// from ==> final to Initisial position
// gsap.from("#box2", {
//   x: 500,
//   duration: 2,
//   delay: 1,
//   //   borderRadius: 50,
// });

// to ==> Initisial to final postion
// gsap.to("h1", {
//   opacity: 0,
//   y: 200,
//   duration: 2,
//   delay: 1,
// });

// from ==> final to initsial position
// gsap.from("h1", {
//   opacity: 0,
//   y: 100,
//   duration: 1,
//   delay: 1,
//   // multiple element select asel tar pratyek 1-> 1->1 element var same time che animation apply karto
//   //stagger: 1, // start to end jato
//   stagger: -1, // end to start jato
// });

// gsap.from("h1", {
//   opacity: 0,
//   y: 100,
//   duration: 1,
//   deley: 0.3,
//   stagger: -1,
// });

// repeat , rotate , yoyo  properties =>

// gsap.to("#box", {
//   x: 500,
//   duration: 2,
//   // borderRadius: 500,
//   rotate: 360,
//   delay: 1,
//   repeat: -1, //==> continuesly animation chalate
//   yoyo: true, // => bounce back hote
// });

// gsap.to("#box1", {
//   x: 0,
//   duration: 2,
//   rotate: -360,
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
// });

gsap.from("#box2", {
  x: 0,
  rotate: 360,
  duration: 2,
  opacity: 0,
  delay: 3.5,
  // repeat: -1,
  scale: 0.2,
  yoyo: true,
});

// gsap.to("#box3", {
//   x: 0,
//   backgroundColor: "yellow",
//   duration: 2,
//   delay: 6,
//   repeat: -1,
//   yoyo: true,
// });
