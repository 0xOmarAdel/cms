<?php
  include 'config.php';

  $id = json_decode(file_get_contents('php://input'));

  $sql = 'UPDATE complaint
          SET status = 1,
              date_closed = current_timestamp()
          WHERE id = :id';

  $stmt = $conn->prepare($sql);

  $stmt->bindParam(':id', $id, PDO::PARAM_INT);

  if($stmt->execute()){
    $response = ['status' => 1];
  } else{
    $response = ['status' => 0];
  }

  echo json_encode($response);  