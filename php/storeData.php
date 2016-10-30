<?php
$myfile = fopen("data.json", "w") or die("Unable to open file!");
$txt = $_POST['test'];
fwrite($myfile, json_encode($txt));
fclose($myfile);
?>