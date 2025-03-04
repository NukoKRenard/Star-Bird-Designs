const r = new rive.Rive({
    src: "https://nukokrenard.github.io/Sun-Bird-Designs/assets/rive/process-anim.riv",
    // OR the path to a discoverable and public Rive asset
    // src: '/public/example.riv',
    canvas: document.getElementById("index.html"),
    autoplay: true,
    // artboard: "Arboard", // Optional. If not supplied the default is selected
    stateMachines: "raise-paper",
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
});

window.setInterval(() => {r.resizeDrawingSurfaceToCanvas()},100);