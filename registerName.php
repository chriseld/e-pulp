<?php

session_start();

include "autoload.php"; ?>

<?php
$servername = "localhost";
$username = env('DB_USERNAME');
$password =  env('DB_PASSWORD');
$dbname =  env('DB_NAME');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// get the q parameter from URL
$q = strtoupper($_REQUEST["q"]);

$returnStr = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
    $sql = "SELECT UPPER(username) AS username FROM users WHERE UPPER(username) = '{$q}'";
    $result = $conn->query($sql);
};

if ($result->num_rows > 0) {
    $returnStr = "This username is already in use";    
} else {
    $returnStr = "Valid";
};

echo $returnStr;

$conn->close();

?>