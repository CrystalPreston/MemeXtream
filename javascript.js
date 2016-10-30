	function playVid() {
		var video = $('#sky_vid');
		video[0].paused ? video[0].play() : video[0].pause();
		$('#play').toggleClass('glyphicon-pause glyphicon-play');
	}
	
	function fastforwardVid() {
		var now = $('#sky_vid')[0].currentTime;
		$('#sky_vid')[0].currentTime=now+0.1;
	}
	
	function rewindVid() {
		var now = $('#sky_vid')[0].currentTime;
		$('#sky_vid')[0].currentTime=now-0.1;
	}
	
	function loadCanvas() {
		$('#light_box').show(200);
		$('#light_box_bk').show(500);
	}
	
	function hideCanvas() {
		$('#light_box').hide(500);
		$('#light_box_bk').hide(200);
	}
	
var canvas = $('#sky_canv')[0];
var ctx    = canvas.getContext('2d');
var video  = $('#sky_vid')[0];

/*function preview() {
var canvas = $('#sky_canv')[0];
var context    = canvas.getContext('2d');
var video  = $('#sky_vid')[0];

var top_text = $('#top_text').val();
context.font = 'bold 10pt Calibri';
  context.fillText('Hello World!', 150, 100);
  context.font = 'italic 40pt Times Roman';
  context.fillStyle = 'blue';
  context.fillText('Hello World!', 200, 150);
  context.font = '60pt Calibri';
  context.lineWidth = 4;
  context.strokeStyle = 'blue';
  context.strokeText('Hello World!', 70, 70);
return false;
}*/

$(function() {
var canvas = $('#sky_canv')[0];
var ctx    = canvas.getContext('2d');
var video  = $('#sky_vid')[0];

$('.alert-success').hide();

	$('#top_text').keyup(function() {
		ctx.font="bold 100px Arial";
		ctx.fillStyle = "white";
		ctx.fillText($(this).val(), 85, 100);
		ctx.strokeText($(this).val(), 85, 100);
	});
	
		$('#bottom_text').keyup(function() {
		ctx.font="bold 100px Arial";
		ctx.fillStyle = "white";
		ctx.fillText($(this).val(), 200, 670);
		ctx.strokeText($(this).val(), 200, 670);
	});
	
	$('#feedPost').click(function() {
		$('.alert-success').show();
	});
 


	return false;
});

	function exportImage() {
		var myImage = $('#sky_canv')[0].toDataURL("image/png");
		var formData = new FormData();
formData.append("username", "Groucho");
formData.append("image", myImage);
		var request = new XMLHttpRequest();
request.open("POST", "ajax/uploadFile.php");
request.send(formData);
	}

video.addEventListener('play', function () {
    var $this = this; //cache
	$('#sky_canv').attr('width', $('#sky_vid').get(0).videoWidth);
	$('#sky_canv').attr('height', $('#sky_vid').get(0).videoHeight);
    (function loop() {
        if (!$this.ended && !$this.paused) {
            ctx.drawImage($this, 0, 0);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
    })();
	
}, 0);
	