<?php

$hostname= "localhost";
$username= "";
$password = "";

$db_name = "dolphin_crm";

$conn = mysqli_connect($hostname, $username, $password, $db_name);

if (!$conn) {
	echo "Connection failed!";
}