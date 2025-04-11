function logWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // document.getElementById('width').innerText = width;
    // document.getElementById('height').innerText = height;
    console.log("Width: " + width, "Height: " + height);
}

window.addEventListener('resize', logWindowSize);

// Log the window size initially when the page loads
logWindowSize();