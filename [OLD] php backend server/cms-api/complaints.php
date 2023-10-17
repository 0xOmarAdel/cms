<?php
  include 'config.php';

  $sql = 'SELECT complaint.id, complaint.title, category.name AS categoryName, user.name AS userName, complaint.date_created, complaint.status
          FROM complaint
          JOIN user ON complaint.userId = user.id
          JOIN category on complaint.categoryId = category.id';

  $stmt = $conn->prepare($sql);

  $stmt->execute();

  $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($users);