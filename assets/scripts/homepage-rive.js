let processanim = new rive.Rive({
    src:"assets/rive/process-anim.riv",
    stateMachines:"raise-paper",

    canvas: document.getElementById("processwork-anim"),
    autoplay:false,

    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      }
})