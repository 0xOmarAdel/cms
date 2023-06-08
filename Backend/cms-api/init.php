<?php
  include 'config.php';

  $sqlArray = array(
    "DELETE FROM message",
    "DELETE FROM complaint",
    "DELETE FROM category",
    "DELETE FROM user",
    "DELETE FROM admin",

    "INSERT INTO `admin` (`id`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (1, 'Omar Adel', 'omaradel@gmail.com', '01020202020', '0000000000', current_timestamp());",
    "INSERT INTO `admin` (`id`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (2, 'Kerolos Talaat', 'kerolos@gmail.com', '01020202020', '0000000000', current_timestamp());",
    "INSERT INTO `admin` (`id`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (3, 'Marwan Yasser', 'marwan@gmail.com', '01020202020', '0000000000', current_timestamp());",
    
    "INSERT INTO `category` (`id`, `name`) VALUES (1, 'Water');",
    "INSERT INTO `category` (`id`, `name`) VALUES (2, 'Electricity');",
    "INSERT INTO `category` (`id`, `name`) VALUES (3, 'Gas');",
    "INSERT INTO `category` (`id`, `name`) VALUES (4, 'Garbage');",
    "INSERT INTO `category` (`id`, `name`) VALUES (5, 'Traffic');",
    "INSERT INTO `category` (`id`, `name`) VALUES (6, 'Roads');",
    "INSERT INTO `category` (`id`, `name`) VALUES (7, 'Railways');",
    "INSERT INTO `category` (`id`, `name`) VALUES (8, 'Rain');",
    "INSERT INTO `category` (`id`, `name`) VALUES (9, 'Telephone');",
    "INSERT INTO `category` (`id`, `name`) VALUES (10, 'Internet');",

    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (1, '30409930108211', 'Evil Morty', 'evilmorty@gmail.com', '01083726128', '" . password_hash('30409930108211', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (2, '30409930108222', 'Madara Uchiha', 'madara@uchihaclan.com', '01083726128', '" . password_hash('30409930108222', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (3, '30409930108233', 'Walter White', 'walterwhite@garymatter.com', '01083726128', '" . password_hash('30409930108233', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (4, '30409930108244', 'Patrick Bateman', 'patrickbateman@pychoverse.com', '01083726128', '" . password_hash('30409930108244', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (5, '30409930108255', 'Elliot Alderson', 'elliotaderson@pychoverse.com', '01083726128', '" . password_hash('30409930108255', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (6, '30409930108266', 'Mr. Robot', 'mrrobot@pychoverse.com', '01083726128', '" . password_hash('30409930108266', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (7, '30409930108277', 'Lelouch', 'lelouch@britannia.com', '01083726128', '" . password_hash('30409930108277', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (8, '30409930108288', 'Light Yagami', 'kira@gmail.com', '01083726128', '" . password_hash('30409930108288', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (9, '30409930108299', 'Eren Yeager', 'eren@edlia.com', '01083726128', '" . password_hash('30409930108299', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (10, '30409930108200', 'Floch Forster', 'floch@edlia.com', '01083726128', '" . password_hash('30409930108200', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (11, '30409930108212', 'Erwin Smith', 'erwin@eldia.com', '01083726128', '" . password_hash('30409930108212', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (12, '30409930108213', 'Ken Kaneki', 'kaneki@aogiritree.com', '01083726128', '" . password_hash('30409930108213', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (13, '30409930108214', 'David Martinez', 'david@cyberpunk.com', '01083726128', '" . password_hash('30409930108214', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (14, '30409930108215', 'Rick Sanchez', 'rick@gmail.com', '01083726128', '" . password_hash('30409930108215', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (15, '30409930108216', 'Tobi', 'tobi@akatuski.com', '01083726128', '" . password_hash('30409930108216', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (16, '30409930100000', 'Pain', 'nagato@amegakure.com', '01083726128', '" . password_hash('30409930100000', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (17, '30409930101111', 'Sasuke Uchiha', 'sasuke@uchihaclan.com', '01083726128', '" . password_hash('30409930101111', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (18, '30409930102222', 'Obito Uchiha', 'obito@uchihaclan.com', '01083726128', '" . password_hash('30409930102222', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (19, '30409930103333', 'Itachi Uchiha', 'itachi@uchihaclan.com', '01083726128', '" . password_hash('30409930103333', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (20, '30409930104444', 'Thorfinn', 'thorfinn@vinland.com', '01083726128', '" . password_hash('30409930104444', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (21, '30409930105555', 'Askheladd', 'askheladd@welsh.com', '01083726128', '" . password_hash('30409930105555', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (22, '30409930106666', 'Canute ', 'canute@england.com', '01083726128', '" . password_hash('30409930106666', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (23, '30409930107777', 'Ryan Gosling', 'ryangosling@pychoverse.com', '01083726128', '" . password_hash('30409930107777', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (24, '30409930108888', 'Travis Bickle', 'travis@pychoverse.com', '01083726128', '" . password_hash('30409930108888', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (25, '30409930109999', 'Thomas Shelby', 'tommy@peakyblinders.com', '01083726128', '" . password_hash('30409930109999', PASSWORD_DEFAULT) . "' , current_timestamp());",
    "INSERT INTO `user` (`id`, `nationalId`, `name`, `email`, `phone`, `password`, `created_at`) VALUES (26, '30409930009999', 'Saul Goodman', 'saulgoodman@albuquerque.com', '01083726128', '" . password_hash('30409930009999', PASSWORD_DEFAULT) . "' , current_timestamp());",

    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (1, 'Lorem ipsum dolor sit amet', '5', '1', '1', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (2, 'Cursus vitae congue mauris rhoncus', '1', '1', '1', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (3, 'Praesent semper feugiat nibh sed', '1', '1', '1', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (4, 'Posuere ac ut consequat semper', '5', '1', '1', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (5, 'Arcu cursus euismod quis viverra', '6', '1', '1', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (6, 'Mauris cursus mattis molestie', '7', '1', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (7, 'Venenatis a condimentum vitae', '1', '1', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (8, 'Neque gravida in fermentum', '3', '1', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (9, 'Eu tincidunt tortor aliquam', '6', '1', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (10, 'Placerat orci nulla pellentesque', '1', '1', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (11, 'Tincidunt praesent semper', '8', '1', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (12, 'Sed blandit libero volutpat sed', '10', '1', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (13, 'Quis commodo odio aenean sed adipiscing', '2', '2', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (14, 'Justo nec ultrices dui sapien eget', '2', '2', '0', current_timestamp(), NULL);",
    "INSERT INTO `complaint` (`id`, `title`, `categoryId`, `userId`, `status`, `date_created`, `date_closed`) VALUES (15, 'Consequat id porta nibh venenatis', '3', '3', '0', current_timestamp(), NULL);",

    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (1, 1, '0', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem. Nisi scelerisque eu ultrices vitae auctor eu augue.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (2, 2, '0', 'Gravida rutrum quisque non tellus orci ac auctor augue. Mauris pharetra et ultrices neque. Amet nisl purus in mollis.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (3, 3, '0', 'Justo nec ultrices dui sapien eget mi proin. Sed felis eget velit aliquet sagittis id. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Eget lorem dolor sed viverra ipsum.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (4, 4, '0', 'Justo nec ultrices dui sapien eget mi proin. Sed felis eget velit aliquet sagittis id. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Eget lorem dolor sed viverra ipsum.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (5, 5, '0', 'Fermentum iaculis eu non diam phasellus. Molestie ac feugiat sed lectus vestibulum mattis. Pellentesque diam volutpat commodo sed egestas egestas fringilla.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (6, 6, '0', 'Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. At quis risus sed vulputate.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (7, 7, '0', 'Tortor dignissim convallis aenean et tortor. Sollicitudin ac orci phasellus egestas. Netus et malesuada fames ac turpis egestas maecenas pharetra.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (8, 8, '0', 'Ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu nisl.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (9, 9, '0', 'In vitae turpis massa sed. Ornare arcu odio ut sem nulla pharetra. Neque egestas congue quisque egestas diam in arcu cursus. Orci eu lobortis elementum nibh tellus molestie nunc non.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (10, 10, '0', 'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Fames ac turpis egestas maecenas pharetra. Justo donec enim diam vulputate ut pharetra sit amet.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (11, 11, '0', 'Tortor vitae purus faucibus ornare suspendisse. Et tortor consequat id porta nibh venenatis cras. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (12, 12, '0', 'Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Eget duis at tellus at urna. Est ullamcorper eget nulla facilisi.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (13, 13, '0', 'Ultrices neque ornare aenean euismod. Quis blandit turpis cursus in. Tristique et egestas quis ipsum suspendisse ultrices gravida. Donec adipiscing tristique risus nec.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (14, 14, '0', 'Varius duis at consectetur lorem. Et malesuada fames ac turpis egestas sed tempus urna. Tempus imperdiet nulla malesuada pellentesque elit.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (15, 15, '0', 'Purus semper eget duis at tellus at urna condimentum. Amet porttitor eget dolor morbi non arcu. Odio aenean sed adipiscing diam donec. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in.', current_timestamp());",

    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (16, 1, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem. Nisi scelerisque eu ultrices vitae auctor eu augue.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (17, 2, 1, 'Gravida rutrum quisque non tellus orci ac auctor augue. Mauris pharetra et ultrices neque. Amet nisl purus in mollis.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (18, 3, 1, 'Justo nec ultrices dui sapien eget mi proin. Sed felis eget velit aliquet sagittis id. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Eget lorem dolor sed viverra ipsum.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (19, 4, 1, 'Justo nec ultrices dui sapien eget mi proin. Sed felis eget velit aliquet sagittis id. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Eget lorem dolor sed viverra ipsum.', current_timestamp());",
    "INSERT INTO `message` (`id`, `complaintId`, `from`, `text`, `date`) VALUES (20, 5, 1, 'Fermentum iaculis eu non diam phasellus. Molestie ac feugiat sed lectus vestibulum mattis. Pellentesque diam volutpat commodo sed egestas egestas fringilla.', current_timestamp());",
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