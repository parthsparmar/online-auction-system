<?php
  session_start();

  // set content-type json
  header("Content-Type: application/json");

  // set up response object
  $response = array('isLoggedIn' => false);

  // check whether callback was passed or not, if not set up default
  if (isset($_GET["callback"])) {
    $callback = $_GET["callback"];
  } else {
    $callback = "callback";
  }

  // now check if loggedInUser is in session or not. if not, it means user is not logged in.
  if (isset($_SESSION["loggedInUser"])) {
    $response['isLoggedIn'] = true;
  }

  echo $callback . "(" . json_encode($response) . ");";
?>