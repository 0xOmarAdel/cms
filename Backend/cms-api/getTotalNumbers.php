<?php
  include 'config.php';

  $totalUsersSql = 'SELECT COUNT(id) AS Users FROM user';

  $totalUsersStmt = $conn->prepare($totalUsersSql);

  $totalUsersStmt->execute();

  $totalUsersResponse = $totalUsersStmt->fetchAll(PDO::FETCH_ASSOC);

  
  $totalAdminsSql = 'SELECT COUNT(id) AS Admins FROM admin';

  $totalAdminsStmt = $conn->prepare($totalAdminsSql);

  $totalAdminsStmt->execute();

  $totalAdminsResponse = $totalAdminsStmt->fetchAll(PDO::FETCH_ASSOC);


  $totalComplaintsSql = 'SELECT COUNT(id) AS Complaints FROM complaint';

  $totalComplaintsStmt = $conn->prepare($totalComplaintsSql);

  $totalComplaintsStmt->execute();

  $totalComplaintsResponse = $totalComplaintsStmt->fetchAll(PDO::FETCH_ASSOC);

  
  $totalCategoriesSql = 'SELECT COUNT(id) AS Categories FROM category';

  $totalCategoriesStmt = $conn->prepare($totalCategoriesSql);

  $totalCategoriesStmt->execute();

  $totalCategoriesResponse = $totalCategoriesStmt->fetchAll(PDO::FETCH_ASSOC);


  $response = [$totalUsersResponse, $totalAdminsResponse, $totalComplaintsResponse, $totalCategoriesResponse];

  echo json_encode($response);