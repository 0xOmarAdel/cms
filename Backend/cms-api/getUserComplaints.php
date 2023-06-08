<?php
  include 'config.php';

  $id = json_decode(file_get_contents('php://input'));

  $sql = 'SELECT user.nationalId, complaint.id, complaint.title, complaint.date_created, complaint.status, category.name AS categoryName 
          FROM user 
          JOIN complaint ON user.id = complaint.userId
          JOIN category ON complaint.categoryId = category.id
          WHERE user.id = :id
          ORDER BY date_created DESC';
          

  $stmt = $conn->prepare($sql);

  $stmt->bindParam(':id', $id, PDO::PARAM_INT);

  $stmt->execute();

  $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($data);