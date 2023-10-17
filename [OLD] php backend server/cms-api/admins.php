<?php
  include 'config.php';

  $sql = 'SELECT id, name, email, phone, created_at
          FROM admin';

  $stmt = $conn->prepare($sql);

  $stmt->execute();

  $admins = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($admins);