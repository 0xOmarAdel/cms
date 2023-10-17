<?php
  function filterText($text) {
    $pattern = "/['\"<>]/";
    return trim(preg_replace($pattern, "", $text));
  }

  function filterNumber($number) {
    $pattern = "/\D/";
    return preg_replace($pattern, "", $number);
  }

  function emailIsValid($email) {
    $pattern = "/^[\w\-\.]+@([\w-]+\.)+[\w\-]{2,4}$/";
    return preg_match($pattern, $email);
  }