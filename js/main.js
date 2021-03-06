var instance = new vidbg('.video', {
    mp4: 'video/world.mp4', // URL or relative path to MP4 video
    webm: 'video/world.webm', // URL or relative path to webm video
    poster: 'video/world.jpg', // URL or relative path to fallback image
    overlay: false // Boolean to display the overlay or not
})

var rellax = new Rellax('.rocket');
window.addEventListener("resize", () => {
    if (document.body.clientWidth < 576) {
        rellax.destroy();
    }
})
if (document.body.clientWidth < 576) {
    rellax.destroy();
}
AOS.init()