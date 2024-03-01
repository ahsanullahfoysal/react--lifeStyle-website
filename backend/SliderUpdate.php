<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con= new mysqli('localhost','root','','fmms_reactproject');

$title = $_POST['title'];
$details =$_POST['details'];
$id= $_POST['id'];

if(isset($_POST['title'])){
    $title = $_post['title'];
    $query ="update sliders set title='$title',details='$details' where id= $id";
}else{
    $query = "update sliders set details='$details' where id=$id";
}

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}

