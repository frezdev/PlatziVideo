import MediaPlayer from "../node_modules/@carlosandf/mediaplayer/lib/MediaPlayer.js";
import AutoPlay from "../node_modules/@carlosandf/mediaplayer/lib/plugins/AutoPlay.js";
import AutoPause from "../node_modules/@carlosandf/mediaplayer/lib/plugins/AutoPause.js";
import AdsPlugins from "../node_modules/@carlosandf/mediaplayer/lib/plugins/Ads/index.js";

const video = document.querySelector('video');
const player = new MediaPlayer["default"]({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new AdsPlugins(),
    ]
});

var buttonPlay = document.querySelector('.play');
buttonPlay.onclick = function () { return player.togglePlay(); };

var buttonMute = document.querySelector('.mute');
buttonMute.onclick = function () { return player.toggleMute(); };

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')["catch"](function (error) {
        console.log('Service worker registration failed:', error);
    });
}
else {
    console.log('Service workers are not supported.');
}
