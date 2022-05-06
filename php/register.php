<?php
include_once("database.php");
// to get post data
$postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        $name = trim($request->username);
        $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
        $password = md5($pwd);
        $email = mysqli_real_escape_string($mysqli, trim($request->email));
        $sql = "INSERT INTO users(username,password,email) VALUES ('$name','$password','$email')";
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
            'username' => $name,
            'pwd' => '',
            'email' => $email,
            'Id' => mysqli_insert_id($mysqli)
            ];
            echo json_encode($authdata);
        }
}

?>