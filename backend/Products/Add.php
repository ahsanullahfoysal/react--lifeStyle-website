<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'fmms_reactproject');

$btnone=$_POST['btnone'];
$btntwo =$_POST['btntwo'];
$title=$_POST['title'];
$price =$_POST['price'];

$target_dir = "../images/";
$target_file= $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
} else {
    $photo='';
}

$query = "INSERT INTO `product`(`btnone`, `btntwo`, `title`, `price`, `photo`) VALUES ('$btnone','$btntwo','$title','$price','$photo')";

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}