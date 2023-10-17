<?php
  include 'config.php';

  $sql = 'SELECT COUNT(id) AS total, MONTHNAME(date_created) AS month
          FROM complaint
          GROUP BY MONTH(date_created)';

  $stmt = $conn->prepare($sql);

  $stmt->execute();

  $response = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($response);