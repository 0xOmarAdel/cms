<?php
  include 'config.php';

  $data = json_decode(file_get_contents('php://input'));

  $message = filterText($data->message);

  if (strlen($message) >= 10) {
    $sql = 'INSERT INTO message(complaintId, message.from, text) 
            VALUES(:complaintId, :from, :text)';
          
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':complaintId', $data->complaintId, PDO::PARAM_INT);
    $stmt->bindParam(':from', $data->from, PDO::PARAM_INT);
    $stmt->bindParam(':text', $message, PDO::PARAM_STR);

    if($stmt->execute()){
      $sql = 'UPDATE complaint
              SET status = 0,
              date_closed = NULL
              WHERE id = :id';

      $stmt = $conn->prepare($sql);

      $stmt->bindParam(':id', $data->complaintId, PDO::PARAM_INT);

      if($stmt->execute()){
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