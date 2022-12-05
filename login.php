<?php
if(isset($_POST["button_login"]))          
    $user   = $_POST["name"];
    $pass   = $_POST["password"];

    $sql_login      = "SELECT * FROM user WHERE username='$user' AND password='$pass'";
    $result_login   = $conn->query($sql_login);
    $row_login      = $result_login->fetch_assoc();
    $numrow_login   = $result_login->num_rows;

    if($numrow_login==1)
    {
        session_start();
        $_SESSION['user'] = $user;
        header('Location:index.php?');
    }

?>git 