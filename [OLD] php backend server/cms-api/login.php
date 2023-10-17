<?php
  include 'config.php';

  $data = json_decode(file_get_contents('php://input'));

  $nationalId = filterNumber($data->nationalId);

  if (strlen($nationalId) === 14 && strlen($data->password) >= 10 && strlen($data->password) <= 25) {
    $sql = 'SELECT id, nationalId, password 
          FROM user 
          WHERE nationalId = :nationalId';
          
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':nationalId', $nationalId, PDO::PARAM_STR);

    $stmt->execute();

    $user = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if($user){
      if (password_verify($data->password, $user[0]['password'])) {
        $response = ['status' => 1, 'id' => $user[0]['id']];
      } else {
        $response = ['status' => 0];
      }
    } else{
      $response = ['status' => 0];
    }

  } else {
    $response = ['status' => 0];
  }

  echo json_encode($response);