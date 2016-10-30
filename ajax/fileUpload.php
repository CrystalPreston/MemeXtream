<?php
session_start();
var_dump($_POST);
die;
ini_set('file_uploads', 'On');
$_SESSION['user'] = 'cp';

$target_dir = "images/cp";
$target_file = $target_dir . basename($_POST["img"]);

?>