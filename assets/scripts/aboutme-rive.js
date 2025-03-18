const knightanim = new rive.Rive({
    src: riveanimpath,
    canvas: document.getElementById("birdknight-anim"),
    autoplay: true,
    stateMachines: "knight",
    artboard:"aboutme-art",
    onLoad: () => {
      knightanim.resizeDrawingSurfaceToCanvas();
    },
});
window.setInterval(() => {knightanim.resizeDrawingSurfaceToCanvas()},100);


const knightobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

    }
    else {


    }
  })
})