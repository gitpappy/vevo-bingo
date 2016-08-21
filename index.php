<?php

include 'tile.php';

shuffle($tile);

?>

<html>
<head>
<title>Vevo Game</title>

<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script>
<script type="text/javascript" src="./script.js"></script>
<link rel="stylesheet" type="text/css" href="./style.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>
	<div class="bingo-board">
		<div class="header-row">
			<div class="header-cell">B</div>
			<div class="header-cell">I</div>
			<div class="header-cell">N</div>
			<div class="header-cell">G</div>
			<div class="header-cell">O</div>
		</div>

		<div class="body-row">
			<div class="body-cell 1"><?php echo $tile[0]; ?></div>
			<div class="body-cell 2"><?php echo $tile[1]; ?></div>
			<div class="body-cell 3"><?php echo $tile[2]; ?></div>
			<div class="body-cell 4"><?php echo $tile[3]; ?></div>
			<div class="body-cell 5"><?php echo $tile[4]; ?></div>
		</div>

		<div class="body-row">
			<div class="body-cell 6"><?php echo $tile[5]; ?></div>
			<div class="body-cell 7"><?php echo $tile[6]; ?></div>
			<div class="body-cell 8"><?php echo $tile[7]; ?></div>
			<div class="body-cell 9"><?php echo $tile[8]; ?></div>
			<div class="body-cell 10"><?php echo $tile[9]; ?></div>
		</div>

		<div class="body-row">
			<div class="body-cell 11"><?php echo $tile[10]; ?></div>
			<div class="body-cell 12"><?php echo $tile[11]; ?></div>
			<div class="body-cell 13 free">FREE</div>
			<div class="body-cell 14"><?php echo $tile[13]; ?></div>
			<div class="body-cell 15"><?php echo $tile[14]; ?></div>
		</div>

		<div class="body-row">
			<div class="body-cell 16"><?php echo $tile[15]; ?></div>
			<div class="body-cell 17"><?php echo $tile[16]; ?></div>
			<div class="body-cell 18"><?php echo $tile[17]; ?></div>
			<div class="body-cell 19"><?php echo $tile[18]; ?></div>
			<div class="body-cell 20"><?php echo $tile[19]; ?></div>
		</div>

		<div class="body-row">
			<div class="body-cell 21"><?php echo $tile[20]; ?></div>
			<div class="body-cell 22"><?php echo $tile[21]; ?></div>
			<div class="body-cell 23"><?php echo $tile[22]; ?></div>
			<div class="body-cell 24"><?php echo $tile[23]; ?></div>
			<div class="body-cell 25"><?php echo $tile[24]; ?></div>
		</div>
	</div>
</body>
</html>