<?php
  include 'config.php';

  $sql = 'SELECT category.id, category.name, COUNT(complaint.categoryId) AS number
          FROM category
          LEFT OUTER JOIN complaint
          ON category.id = complaint.categoryId
          GROUP BY category.id';
          
  $stmt = $conn->prepare($sql);

  $stmt->execute();

  $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($data);