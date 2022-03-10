class AutoPlay {
    constructor() { }
    run(player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}
export default AutoPlay;
