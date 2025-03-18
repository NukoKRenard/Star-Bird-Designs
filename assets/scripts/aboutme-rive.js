const knightanim = new rive.Rive({
    src: riveanimpath,
    canvas: document.getElementById("birdknight-anim"),
    autoplay: true,
    stateMachines: "knight",
    artboard:"aboutme-art",
    onLoad: (_) => {
      knightanim.resizeDrawingSurfaceToCanvas();

      const knightinputs = knightanim.stateMachineInputs("knight");
      
      const startknightanim = knightinputs.find((input) => input.name === "animate")
      const resetknightanim = knightinputs.find((input) => input.name === "reset")

      const knightobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startknightanim.fire();
          }
          else {
            resetknightanim.fire();
          }
        }
      )
      },{root: document,rootMargin: "0px",threshold: .5})

      knightobserver.observe(document.getElementById("birdknight-anim"));
    },
});
window.setInterval(() => {knightanim.resizeDrawingSurfaceToCanvas()},100);