<?php
$hostname="localhost"; //server name
$username="letzclky";  //mysql username
$password="MK@#123mk";       //password of mysql.
$database="letzclky_letzcycle";  //database name
$con=mysqli_connect($hostname,$username,$password,$database);
if(! $con)
{
    die('Connection Failed'.mysqli_connect_error());
}
?>