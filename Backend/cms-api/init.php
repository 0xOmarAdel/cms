<?php
  include 'config.php';

  $sqlArray = array(
    "INSERT INTO `admin` (`id`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, 'Omar Adel', 'omaradel@gmail.com', '01020202020', '0000000000', current_timestamp());",
    "INSERT INTO `admin` (`id`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, 'Kerolos Talaat', 'kerolos@gmail.com', '01020202020', '0000000000', current_timestamp());",
    "INSERT INTO `admin` (`id`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, 'Marwan Yasser', 'marwan@gmail.com', '01020202020', '0000000000', current_timestamp());",
    
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Water');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Electricity');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Gas');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Garbage');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Traffic');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Roads');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Railways');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Rain');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Telephone');",
    "INSERT INTO `category` (`id`, `name`) VALUES (NULL, 'Internet');",

    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108211', 'Omar Adel', 'omaradel@gmail.com', '01083726128', '" . password_hash('30409930108211', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108222', 'Madara Uchiha', 'madara@uchihaclan.com', '01083726128', '" . password_hash('30409930108222', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108233', 'Walter White', 'walterwhite@garymatter.com', '01083726128', '" . password_hash('30409930108233', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108244', 'Patrick Bateman', 'patrickbateman@pychoverse.com', '01083726128', '" . password_hash('30409930108244', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108255', 'Elliot Alderson', 'elliotaderson@gmail.com', '01083726128', '" . password_hash('30409930108255', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108266', 'Mr. Robot', 'mrrobot@gmail.com', '01083726128', '" . password_hash('30409930108266', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108277', 'Lelouch', 'lelouch@britannia.com', '01083726128', '" . password_hash('30409930108277', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108288', 'Light Yagami', 'kira@gmail.com', '01083726128', '" . password_hash('30409930108288', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108299', 'Eren Yeager', 'eren@edlia.com', '01083726128', '" . password_hash('30409930108299', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108200', 'Floch Forster', 'floch@edlia.com', '01083726128', '" . password_hash('30409930108200', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108212', 'Erwin Smith', 'erwin@eldia.com', '01083726128', '" . password_hash('30409930108212', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108213', 'Ken Kaneki', 'kaneki@gmail.com', '01083726128', '" . password_hash('30409930108213', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108214', 'David Martinez', 'david@cyberpunk.com', '01083726128', '" . password_hash('30409930108214', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108215', 'Rick Sanchez', 'rick@gmail.com', '01083726128', '" . password_hash('30409930108215', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (NULL, '30409930108216', 'Tobi', 'tobi@akatuski.com', '01083726128', '" . password_hash('30409930108216', PASSWORD_DEFAULT) . "' , current_timestamp());",
  );

  $executedQueries = 0;
  $failedToExecutedQueries = 0;

  foreach ($sqlArray as $sql) {
    $stmt = $conn->prepare($sql);
    
    if ($stmt->execute()) {
      echo "<span style='color: green;'>[+]</span> Done executing => $sql <br>";

      $executedQueries++;
    } else {
      echo "<span style='color: red;'>[-]</span> Failed to execute => $sql <br>";

      $failedToExecutedQueries++;
    }


  }

  echo "===================================================================================================================================";
  echo "<br><span style='color: green;'>[+]</span> Executed $executedQueries queries.<br>";
  echo "<br><span style='color: red;'>[-]</span> Failed to execute $failedToExecutedQueries queries.<br>";
  echo "===================================================================================================================================";
  echo "<br>- For any admin, the password is 0000000000.<br>";
  echo "<br>- For any user, the password is the same as his national id.<br>";