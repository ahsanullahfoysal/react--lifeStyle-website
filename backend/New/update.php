<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'fmms_reactproject');

$title = $_POST['title'];
$details = $_POST['details'];
$bname = $_POST['bname'];
$id = $_POST['id'];


$target_dir = "images/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
    $query = "UPDATE `new` SET `title`= '$title', `details`= '$detail', `bname`= '$bname', `photo`= '$photo' WHERE `id`='$id'";
} else {
    $query = "UPDATE `new` SET `title`= '$title', `details`= '$detail', `bname`=' $bname', where `id`='$id'";
}

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}