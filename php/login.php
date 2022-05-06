<?php
include_once("database.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    // to check postdata
    if(isset($postdata) && !empty($postdata))
    {
        $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
        $password = md5($pwd);
        $email = mysqli_real_escape_string($mysqli, trim($request->username));
        //  
        $sql = "SELECT * FROM users where email='$email' and password='$password'";
        if($result = mysqli_query($mysqli,$sql))
        {
            $rows = array();
            while($row = mysqli_fetch_assoc($result))
        {
            $rows[] = $row;
        }
            echo json_encode($rows);
        }
        else
        {
            http_response_code(404);
        }
    }
?>