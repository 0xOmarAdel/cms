<?php
  include 'config.php';

  $sql = 'SELECT id, nationalId, name, email, phone, created_at
          FROM user';
  $stmt = $conn->prepare($sql);

  $stmt->execute();

  $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($users);