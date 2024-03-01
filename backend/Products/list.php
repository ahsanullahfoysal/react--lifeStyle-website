<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header("Content-type: application/json");
$con = new mysqli('localhost', 'root', '', 'fmms_reactproject');
$data=$con->query('SELECT * FROM `product`')->fetch_all(MYSQLI_ASSOC);

echo json_encode($data);