<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'fmms_reactproject');

$title = $_POST['title'];
$details = $_POST['details'];
$bname = $_POST['bname'];
$id = $_POST['id'];

$query=("UPDATE `subscribe` SET `title`='$title',`deatils`='$details',`bname`='$bname' WHERE id='$id'");

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}