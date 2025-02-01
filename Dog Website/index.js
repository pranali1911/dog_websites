// Toggle collapsible menu
document.querySelector('.toggle-menu').addEventListener('click', () => {
    document.querySelector('.left-menu').classList.toggle('collapsed');
});

// Adjust scaling based on screen width
function adjustScaling() {
    const screenWidth = window.innerWidth;
    const content = document.querySelector('.scaled-content');
    let scale = 1;

    if (screenWidth > 992 && screenWidth <= 1600) {
        scale = 0.9;
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        scale = 0.8;
    } else if (screenWidth >= 600 && screenWidth < 700) {
        scale = 0.75;
    } else if (screenWidth < 600) {
        scale = 0.5;
    }

    content.style.transform = `scale(${scale})`;
    content.style.width = `${100 / scale}%`;
    content.style.height = `${100 / scale}%`;
}

// Event listeners
window.addEventListener('resize', adjustScaling);
window.addEventListener('load', adjustScaling);