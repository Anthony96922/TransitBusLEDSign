<?php
	function createMarqueeBase($width, $height) {
		for ($i = 0; $i < $height; $i++) {
			for ($j = 0; $j < $width; $j++) {
				echo '<div class="'.$i.'_'.$j.' light off amber"></div>'."\n";
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
<?php createMarqueeBase(96, 7); ?>
</div>
<input type="text" id="theInput" name="input" value="Transit Bus LED Sign Simulator" />
LED color:
<input type="radio" id="amber" name="color" value="amber" checked />
<label for="amber">Amber</label>
<input type="radio" id="red" name="color" value="red" />
<label for="red">Red</label>
</div>
<script>
<?php echo file_get_contents("ledsign.js"); ?>
</script>
</body>
</html>
