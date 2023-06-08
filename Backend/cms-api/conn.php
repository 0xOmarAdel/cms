<?php
  $host = '127.0.0.1';
  $user = 'root';
  $pass = '';
  $db = 'cms';

  try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
  } catch (PDOException $e){
    echo 'Not Connected :' . $e->getMessage();
  }