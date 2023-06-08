<?php
  include 'config.php';

  $data = json_decode(file_get_contents('php://input'));

  $title = filterText($data->title);
  $message = filterText($data->message);

  if (strlen($title) >= 10 && strlen($title) <= 50 && strlen($message) >= 50) {
    $sql = 'INSERT INTO complaint(title, categoryId, userId, status) 
          VALUES(:title, :categoryId, :userId, :status)';
          
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':title', $title, PDO::PARAM_STR);
    $stmt->bindParam(':categoryId', $data->categoryId, PDO::PARAM_INT);
    $stmt->bindParam(':userId', $data->userId, PDO::PARAM_INT);
    $stmt->bindValue(':status', 0, PDO::PARAM_INT);


    if($stmt->execute()){
      $id = $conn->lastInsertId();

      $sql2 = 'INSERT INTO message(complaintId, message.from, text) 
              VALUES(:complaintId, :from, :text)';
            
      $stmt2 = $conn->prepare($sql2);

      $stmt2->bindParam(':complaintId', $id, PDO::PARAM_INT);
      $stmt2->bindValue(':from', 0, PDO::PARAM_INT);
      $stmt2->bindParam(':text', $message, PDO::PARAM_STR);

      if($stmt2->execute()){
        $response = ['status' => 1];
      } else{
        $response = ['status' => 0];
      }
    } else{
      $response = ['status' => 0];
    }
  } else {
    $response = ['status' => 0];
  }

  echo json_encode($response);  