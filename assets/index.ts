import MediaPlayer from './MediaPlayer';
import AutoPlay from '../plugins/AutoPlay';
import AutoPause from '../plugins/AutoPause';
import AdsPlugin from '../plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
  el: video, 
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin(),
  ],
});

const buttonPlay: HTMLElement = document.querySelector('.play');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector('.mute');
buttonMute.onclick = () => player.toggleMute();

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js')
//       .catch(error => {
//         console.log('Service worker registration failed:', error);
//       }
//     );
// } else {
//   console.log('Service workers are not supported.');
// }