<?php

include('connect.php');
if(isset($_POST['submit']))
{
    if($_POST['email'] == '')
    {
        echo "Please Check input field";
    }
    else
    {
        $email = $_POST['email'];
        $sql = "INSERT INTO subscribe_table(email) VALUES('$email')";
        $res = mysqli_query($con,$sql);
        if($res)
        {
            echo "You have been successfully subscribed";
            header('Location: ../index.html');
        }
        mysqli_close($con);
    }
}