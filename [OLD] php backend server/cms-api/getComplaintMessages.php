<?php
  include 'config.php';

  $id = json_decode(file_get_contents('php://input'));

  $sql = 'SELECT message.id, message.text, message.date, message.from
          FROM message, complaint
          WHERE message.complaintId = complaint.id AND message.complaintId = :complaintId';
          
  $stmt = $conn->prepare($sql);

  $stmt->bindParam(':complaintId', $id, PDO::PARAM_INT);

  $stmt->execute();

  $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($messages);