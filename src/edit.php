<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Notification bar</title>
    <link rel="stylesheet" href="css/site.css">

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>

<body>
<?php
//include the S3 class
if (!class_exists('S3'))require_once('S3.php');

//AWS access info
if (!defined('awsAccessKey')) define('awsAccessKey', 'CHANGE THIS');
if (!defined('awsSecretKey')) define('awsSecretKey', 'CHANGE THIS TOO');

//instantiate the class
$s3 = new S3(awsAccessKey, awsSecretKey);

$requestMethods = $_SERVER['REQUEST_METHOD'];

//check whether a form was submitted
if($requestMethods == 'GET')
{
    // GET
    $hash = $_GET["hash"];
    if(isset($hash))
    {
        // load notification details
    }
}

$length = 10;

$randomString = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
?>

<div class="wrapper">
    <h2>Setari notificare</h2>



</div>
</body>

</html>