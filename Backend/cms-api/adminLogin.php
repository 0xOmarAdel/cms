<?php
  include 'config.php';

  $data = json_decode(file_get_contents('php://input'));

  if (emailIsValid($data->email) && strlen($data->password) >= 10 && strlen($data->password) <= 25) {
    $sql = 'SELECT name, email, password 
    FROM admin 
    WHERE email = :email AND password = :password';
    
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':email', $data->email, PDO::PARAM_STR);
    $stmt->bindParam(':password', $data->password, PDO::PARAM_STR);

    $stmt->execute();

    $admin = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if($admin){
      $response = ['status' => 1, 'adminName' => $admin[0]['name']];
    } else{
      $response = ['status' => 0];
    }

  } else {
    $response = ['status' => 0];
  }

  echo json_encode($response);