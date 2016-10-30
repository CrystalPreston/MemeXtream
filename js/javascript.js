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
		var $video = $('#sky_vid')[0];
		if($video.paused) {
			$('#light_box').show(200);
			$('#light_box_bk').show(500);
		}
	}
	
	function hideCanvas() {
		$('#light_box').hide(500);
		$('#light_box_bk').hide(200);
	}
	
function exportImage() {
	var canvas = $('#sky_canv')[0];
	var ctx    = canvas.getContext('2d');
	var video  = $('#sky_vid')[0];
	
		$.ajax({
		  dataType: "json",
		  url: 'php/data.json',
		  success: function(data) {
			var dataURL = canvas.toDataURL("image/jpeg", 0.5);
			var newData = {
				"user_id": "ki",
				"name": "Karl",
				"image": "<img src='" + dataURL + "' >"
			}
					
			data.push(newData);
				
			$.ajax({
				 method: "POST",
				 url: "php/storeData.php",
				 data: {'test':data},
			}).done(function(o) {
				 console.log('saved'); 
			});
		}
	});
}
	

$(function() {
var canvas = $('#sky_canv')[0];
var ctx    = canvas.getContext('2d');
var video  = $('#sky_vid')[0];

	$('.alert-success').hide();

	$('#top_text').keyup(function() {
		ctx.font="bold 100px Arial";
		ctx.fillStyle = "white";
		ctx.fillText($(this).val(), 30, 100);
		ctx.strokeText($(this).val(), 30, 100);
	});
	
	$('#bottom_text').keyup(function() {
		ctx.font="bold 100px Arial";
		ctx.fillStyle = "white";
		ctx.fillText($(this).val(), 30, 700);
		ctx.strokeText($(this).val(), 30, 700);
	});
	
	$('#feedPost').click(function() {
		$('.alert-success').show();
	});

	$('#preview').click(function() {
		exportImage();
	});

	video.addEventListener('play', function () {
    var $this = this;
	$('#sky_canv').attr('width', $('#sky_vid').get(0).videoWidth);
	$('#sky_canv').attr('height', $('#sky_vid').get(0).videoHeight);
    (function loop() {
        if (!$this.ended && !$this.paused) {
            ctx.drawImage($this, 0, 0);
            setTimeout(loop, 1000 / 30);
        }
    })();
}, 0);
	
});