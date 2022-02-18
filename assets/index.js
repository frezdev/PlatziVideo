import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';
import AutoPause from '../plugins/AutoPause.js';
const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ],
});
const buttonPlay = document.querySelector('.play');
buttonPlay.onclick = () => player.togglePlay();
const buttonMute = document.querySelector('.mute');
buttonMute.onclick = () => player.toggleMute();
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .catch(error => {
        console.log('Service worker registration failed:', error);
    });
}
else {
    console.log('Service workers are not supported.');
}