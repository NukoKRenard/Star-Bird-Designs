const riveanimpath = "https://nukokrenard.github.io/Sun-Bird-Designs/assets/rive/homepage-anims.riv"

const processworkanim = new rive.Rive({
    src: riveanimpath,
    canvas: document.getElementById("processwork-anim"),
    autoplay: true,
    stateMachines: "papers",
    artboard:"processwork",
    onLoad: () => {
      processworkanim.resizeDrawingSurfaceToCanvas();
    },
});
window.setInterval(() => {processworkanim.resizeDrawingSurfaceToCanvas()},100);

const portfolioanim = new rive.Rive({
  src: riveanimpath,
  canvas: document.getElementById("portfolio-anim"),
  autoplay: true,
  stateMachines: "painting",
  artboard:"portfolio",
  onLoad: () => {
    portfolioanim.resizeDrawingSurfaceToCanvas();
  },
});
window.setInterval(() => {portfolioanim.resizeDrawingSurfaceToCanvas()},100);

const aboutmeanim = new rive.Rive({
  src: riveanimpath,
  canvas: document.getElementById("aboutme-anim"),
  autoplay: true,
  stateMachines: "crow",
  artboard:"aboutme",
  onLoad: () => {
    portfolioanim.resizeDrawingSurfaceToCanvas();
  },
});
window.setInterval(() => {aboutmeanim.resizeDrawingSurfaceToCanvas()},100);