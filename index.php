<?php

	include_once 'includes/header.php';

?>

	<header class="feed_desc">
		<div class="container">
			<div class="starter-template">
			<h1>MemeXtream Feed</h1>
			<p>
				The MemeXtream allows you to share your newly created memes to the NowTV community, as well as view the most up to date content<br /><br />
				Choose your favourites to share to your preferred social network and GO VIRAL!
			</p>
		  </div>
		</div>	
	</header>
	<div class="container">
		<div class="row feed_space">
			<div class="col-md-5 meme_feed_items" id="meme_feed_items">
			<!-- meme_feed_item is each item recently loaded on to the database. Maximum of 7 on the page? -->
				<div class="meme_feed_item">
					<div class="row">
						<div class="col-md-4 meme_feed_icon">
							<img src="<?php echo $image1 ?>" />
						</div>
						<div class="col-md-1">
						</div>
						<div class="col-md-7 meme_feed_desc">
							<h1>Star Trek</h1>
							<p>Posted by: <strong>Joe Parsons</strong></p>
						</div>
					</div>
				</div>
				<div class="meme_feed_item">
					<div class="row">
						<div class="col-md-4 meme_feed_icon">
							<img src="<?php echo $image2 ?>" />
						</div>
						<div class="col-md-1">
						</div>
						<div class="col-md-7 meme_feed_desc">
							<h1>Star Trek</h1>
							<p>Posted by: <strong>Joe Parsons</strong></p>
						</div>
					</div>
				</div>
				<div class="meme_feed_item">
					<div class="row">
						<div class="col-md-4 meme_feed_icon">
							<img src="<?php echo $image3 ?>" />
						</div>
						<div class="col-md-1">
						</div>
						<div class="col-md-7 meme_feed_desc">
							<h1>Star Trek</h1>
							<p>Posted by: <strong>Joe Parsons</strong></p>
						</div>
					</div>
				</div>
				<div class="meme_feed_item">
					<div class="row">
						<div class="col-md-4 meme_feed_icon">
							<img src="<?php echo $image4 ?>" />
						</div>
						<div class="col-md-1">
						</div>
						<div class="col-md-7 meme_feed_desc">
							<h1>Star Trek</h1>
							<p>Posted by: <strong>Joe Parsons</strong></p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-1">
			</div>
			<div class="col-md-6">
				<div class="meme_info">
					<div class="row">
						<div class="meme" id="meme">
							<img src="images/test-meme.jpg" />
						</div>
					</div>
					<div class="row btn_holder">
						<p style="font-weight:bold;">Share this image on:</p>
						<a class="btn btn-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://redeyesky.win/mirror/images/test-meme.jpg" target="_blank" id="sh-fb">Facebook</a>
						<a class="btn btn-twitter" href="https://twitter.com/home?status=http://redeyesky.win/mirror/images/test-meme.jpg" target="_blank">Twitter</a>
						<a class="btn btn-pintrest" href="https://pinterest.com/pin/create/button/?media=http://redeyesky.win/mirror/images/test-meme.jpg" target="_blank">Pintrest</a>
						<a class="btn btn-instagram" href="#" target="_blank">Instagram</a>
					</div>
				</div>
			</div>
		</div>
	</div>


<?php 
	
	include_once 'includes/footer.php';
	
?>