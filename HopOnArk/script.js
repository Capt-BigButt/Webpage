const cursorTrail = document.getElementById('cursor-trail');
const cursorGif = 'assets/images/IslandBoysHopOnARK.gif';

document.addEventListener('mousemove', (e) => {
    const img = new Image();
    img.src = cursorGif;
    img.classList.add('cursor-gif');
    img.style.left = e.pageX + 'px';
    img.style.top = e.pageY + 'px';
    cursorTrail.appendChild(img);

    // Remove the image after a certain time (e.g., 1 second)
    setTimeout(() => {
        cursorTrail.removeChild(img);
    }, 1000);
});
