function MediaPlayer(config) {
  this.media = config.el;
  this.plugis = config.plugis || [];
  
  this._initPlugins(); 
}
MediaPlayer.prototype._initPlugis = function() {
  this.plugis.forEach(plugin => {
    plugin.run()!;
  });
}
MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

export default MediaPlayer;
