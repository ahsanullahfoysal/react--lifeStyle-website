<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'fmms_reactproject');

$title = $_POST['title'];
$details = $_POST['details'];
$bname = $_POST['bname'];


$query = "INSERT INTO `subscribe`(`title`, `deatils`, `bname`) VALUES ('$title','$details','$bname')";
if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}
    echo json_encode(['status'=>false]);