const processworkanim = new rive.Rive({
    src: riveanimpath,
    canvas: document.getElementById("birdknight-anim"),
    autoplay: true,
    stateMachines: "Pull sword",
    artboard:"aboutme-art",
    onLoad: () => {
      processworkanim.resizeDrawingSurfaceToCanvas();
    },
});
window.setInterval(() => {processworkanim.resizeDrawingSurfaceToCanvas()},100);