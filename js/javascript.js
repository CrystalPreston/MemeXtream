var canvas = document.getElementById('sky_canvas');
var ctx    = canvas.getContext('2d');
var video  = document.getElementById('player');

video.addEventListener('play', function () {
    var $this = this; //cache
    (function loop() {
        if (!$this.paused && !$this.ended) {
            ctx.drawImage($this, 0, 0);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
    })();
	
}, 0);

$(function() {
    $('#player').click(function() {
        this.paused ? this.play() : this.pause();
    });
});
//var rewind = document.getElementById('rewind');
//var fastforward = document.getElementById('fastforward');
//var play = document.getElementById('play');
//var go = document.getElementById('go');
