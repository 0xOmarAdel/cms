<?php
  include 'config.php';

  $sql = 'SELECT COUNT(id) AS total, MONTHNAME(created_at) AS month
          FROM user
          GROUP BY MONTH(created_at)';

  $stmt = $conn->prepare($sql);

  $stmt->execute();

  $response = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($response);