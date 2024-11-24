const video = document.getElementById('video');

const playVideoOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
};

const observer = new IntersectionObserver(playVideoOnScroll, {
    threshold: 0.5,
});

observer.observe(document.getElementById('apresentacao'));