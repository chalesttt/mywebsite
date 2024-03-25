const musicPlayer = document.getElementById('music-player');
const musicList = [
  {
    src: 'mp3/Dive.mp3',
    cover: 'images/OIP.jpg'
  },
  {
    src: 'mp3/BrunoMars.mp3',
    cover: 'images/OIP (1).jpg'
  },
  {
    src: 'mp3/Sayo.mp3',
    cover: 'images/th.jpg'
  }
]; // Add your music files and cover photos here
let currentMusicIndex = 0;

const music = document.getElementById('music');
const coverPhoto = document.getElementById('cover-photo');
music.src = musicList[currentMusicIndex].src;
coverPhoto.src = musicList[currentMusicIndex].cover;

const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');
const seekBar = document.getElementById('seek-bar');
const volumeSlider = document.getElementById('volume-slider');

playBtn.addEventListener('click', () => {
  music.play();
});

pauseBtn.addEventListener('click', () => {
  music.pause();
});

music.addEventListener('timeupdate', () => {
  seekBar.value = (music.currentTime / music.duration) * 100;
});

seekBar.addEventListener('change', () => {
  music.currentTime = (seekBar.value / 100) * music.duration;
});

volumeSlider.addEventListener('input', () => {
  music.volume = volumeSlider.value;
});

nextBtn.addEventListener('click', () => {
  currentMusicIndex++;
  if (currentMusicIndex >= musicList.length) {
    currentMusicIndex = 0;
  }
  music.src = musicList[currentMusicIndex].src;
  coverPhoto.src = musicList[currentMusicIndex].cover;
  music.play();
});



const videos = [
  {
    title: 'Step`s Coldest Photo',
    src: 'mp4/video1.mp4'
  },
  {
    title: 'Step`s First Ring',
    src: 'mp4/video2.mp4'
  },
  {
    title: 'Step`s Fourth Ring',
    src: 'mp4/video3.mp4'
  }
];

let currentVideo = 0;

const video = document.getElementById('my-video');
const videoTitle = document.getElementById('video-title');
const nextVideo = document.getElementById('next-video');

videoTitle.innerText = videos[currentVideo].title;
video.src = videos[currentVideo].src;

nextVideo.addEventListener('click', () => {
  currentVideo++;
  if (currentVideo >= videos.length) currentVideo = 0;
  video.src = videos[currentVideo].src;
  videoTitle.innerText = videos[currentVideo].title;
  video.load();
  video.play();
});

