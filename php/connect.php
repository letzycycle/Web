<?php
$hostname="localhost"; //server name
$username="root";  //mysql username
$password="root";       //password of mysql.
$database="letzcycle";  //database name
$con=mysqli_connect($hostname,$username,$password,$database);
if(! $con)
{
    die('Connection Failed'.mysqli_connect_error());
}
?>