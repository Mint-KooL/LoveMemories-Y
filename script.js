const galleryImage = document.getElementById('gallery-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const images = [
    'images/Luv1.jpg',
    'images/Luv2.jpg',
    'images/Luv3.jpg',
    'images/Luv4.jpg',
    'images/Luv5.jpg',
    'images/Luv6.jpg',
    'images/Luv7.jpg',
    'images/Luv8.jpg',
    'images/Luv9.jpg',
    'images/Luv10.jpg',
    'images/Luv11.jpg',
    'images/Luv12.jpg',
    'images/Luv13.jpg',
    'images/Luv14.jpg',
    'images/Luv15.jpg',
    'images/Luv16.jpg',
    'images/Luv17.jpg',
    'images/Luv18.jpg',
    'images/Luv19.jpg',
    'images/Luv20.jpg',
    'images/Luv21.jpg',
    'images/Luv22.jpg',
    'images/Luv23.jpg',
    'images/Luv24.jpg',
    'images/LuvM1.jpg',
    'images/LuvM2.jpg',
    'images/LuvM3.jpg',
    'images/LuvM4.jpg',
    'images/LuvM5.jpg',
];

let currentImageIndex = 0;

function updateImage() {
    console.log('Updating image to:', images[currentImageIndex]);
    galleryImage.src = images[currentImageIndex];
    galleryImage.alt = `Our memory ${currentImageIndex + 1}`;
}

prevBtn.addEventListener('click', () => {
    console.log('Previous button clicked');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    console.log('Next button clicked');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

// Log initial state
console.log('Initial gallery image src:', galleryImage.src);
console.log('Images array:', images);



// Time Counter
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');

const startDate = new Date('2024-02-17T00:00:00');

function updateCounter() {
    const now = new Date();
    const difference = now.getTime() - startDate.getTime();

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    monthsEl.textContent = months;
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
}

setInterval(updateCounter, 1000);
updateCounter();

// Music Player
const playPauseBtn = document.getElementById('play-pause-btn');
const audioPlayer = document.getElementById('audio-player');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        playPauseBtn.textContent = 'Play';
        audioPlayer.pause(); // Pause the audio
    } else {
        playPauseBtn.textContent = 'Pause';
        audioPlayer.play(); // Play the audio
    }
    isPlaying = !isPlaying; // Toggle the playing state
});