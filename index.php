<?php
	function createMarqueeBase($width, $height) {
		for ($i = 0; $i < $height; $i++) {
			for ($j = 0; $j < $width; $j++) {
				echo '<div class="'.$i.'_'.$j.' light off"></div>'."\n";
			}
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Bus LED Sign Simulator</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
<!-- inline our stylesheet -->
<style>
<?php echo file_get_contents("ledsign.css"); ?>
</style>
</head>
<body>
<div id="wrapper">
<div id="theMarquee">
<?php createMarqueeBase(5*20, 7); ?>
</div>
<input id="theInput" name="input" type="text" value="Transit Bus LED Sign Simulator" />
</div>
<script>
<?php echo file_get_contents("ledsign.js"); ?>
</script>
</body>
</html>
