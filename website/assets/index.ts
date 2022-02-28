import MediaPlayer from '@carlosandf/mediaplayer';
import AutoPlay from '@carlosandf/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@carlosandf/mediaplayer/lib/plugins/AutoPause';
import AdsPlugin from '@carlosandf/mediaplayer/lib/plugins/Ads';

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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
      .catch(error => {
        console.log('Service worker registration failed:', error);
      }
    );
} else {
  console.log('Service workers are not supported.');
}