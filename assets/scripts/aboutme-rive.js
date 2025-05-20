function loadaboutmerive(Path2D, canvasid, statemachine, artboard)
{
const knightanim = new rive.Rive({
    src: riveanimpath,
    canvas: document.getElementById(canvasid),
    autoplay: true,
    stateMachines: statemachine,
    artboard:artboard,
    onLoad: (_) => {
      knightanim.resizeDrawingSurfaceToCanvas();

      const knightinputs = knightanim.stateMachineInputs(statemachine);
      
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
      },{root: document,rootMargin: "0px",threshold: .7})

      knightobserver.observe(document.getElementById(canvasid));
    },
});
window.setInterval(() => {knightanim.resizeDrawingSurfaceToCanvas()},100);
}

loadaboutmerive(riveanimpath,"birdknight-anim","knight","aboutme-art")
loadaboutmerive(riveanimpath,"handshake-anim","handshake","aboutme-users")
loadaboutmerive(riveanimpath,"money-anim","money","aboutme-profits")