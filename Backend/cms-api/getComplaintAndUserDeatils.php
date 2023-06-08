<?php
  include 'config.php';

  $data = json_decode(file_get_contents('php://input'));

  $sql = 'SELECT complaint.title, complaint.date_created, complaint.status, complaint.date_closed,
                  user.id AS userId, user.name AS userName, user.nationalId AS userNationalId, user.email AS userEmail, user.phone AS userPhone,
                  category.name AS categoryName
          FROM complaint
          JOIN user ON complaint.userId = user.id
          JOIN category on complaint.categoryId = category.id
          WHERE complaint.id = :complaintId';

  $stmt = $conn->prepare($sql);

  $stmt->bindParam(':complaintId', $data->complaintId, PDO::PARAM_STR);

  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  if($result){
    $response = $result[0];
  } else{
    $response = ['status' => 0];
  }

  echo json_encode($response);
