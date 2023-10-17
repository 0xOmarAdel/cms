<?php
  include 'config.php';

  $data = json_decode(file_get_contents('php://input'));

  $name = filterText($data->name);
  $nationalId = filterNumber($data->nationalId);
  $phone = filterNumber($data->phone);
  $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);

  if (strlen($name) >= 4 && strlen($name) <= 25 &&
      strlen($nationalId) === 14 && emailIsValid($data->email) && strlen($phone) === 11 && 
      strlen($data->password) >= 10 && strlen($data->password) <= 25) {
    $sql = 'SELECT *
    FROM user
    WHERE nationalId = :nationalId';

    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':nationalId', $data->nationalId, PDO::PARAM_STR);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!$result) {
      $sql2 = 'SELECT *
            FROM user
            WHERE email = :email';

      $stmt2 = $conn->prepare($sql2);

      $stmt2->bindParam(':email', $data->email, PDO::PARAM_STR);

      $stmt2->execute();

      $result2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);

      if(!$result2) {
        $sql3 = 'INSERT INTO user(name, nationalId, email, password, phone) 
              VALUES(:name, :nationalId, :email, :password, :phone)';
              
        $stmt3 = $conn->prepare($sql3);

        $stmt3->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt3->bindParam(':nationalId', $nationalId, PDO::PARAM_STR);
        $stmt3->bindParam(':email', $data->email, PDO::PARAM_STR);
        $stmt3->bindParam(':password', $hashed_password, PDO::PARAM_STR);
        $stmt3->bindParam(':phone', $phone, PDO::PARAM_STR);

        if($stmt3->execute()){
          $response = ['status' => 1];
        } else{
          $response = ['status' => 0];
        }
      } else {
      $response = ['status' => 3];
      }
    } else{
      $response = ['status' => 2];
    }
  } else {
    $response = ['status' => 0];
  }
  echo json_encode($response); 