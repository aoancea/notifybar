<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Notification bar</title>
    <link rel="stylesheet" href="css/site.css">

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <script src="js/create.js"></script>

    <script type="text/javascript">
        $(document).ready(function(){
            var page = new Create();
            page.initializeControls();
        });
    </script>
</head>

<body>
    <?php
        //include the S3 class
        if (!class_exists('S3'))require_once('S3/S3.php');

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
            $hash = '';
            if(isset($_GET["hash"]))
            {
                // load notification details
            }
        }
    ?>

    <div class="wrapper">
        <h2>Notification settings</h2>

        <div id="notification-settings-wrapper">

            <div class="setting">
                <label for="ddl_Title_TextStyle_Font">Title font</label>
                <select id="ddl_Title_TextStyle_Font"></select>
            </div>

            <div class="setting">
                <label for="ddl_Title_TextStyle_Size">Title size</label>
                <select id="ddl_Title_TextStyle_Size"></select>
            </div>

            <div class="setting">
                <label for="ddl_Title_TextStyle_Style">Title style</label>
                <select id="ddl_Title_TextStyle_Style"></select>
            </div>

            <div class="setting">
                <label for="ddl_Title_TextStyle_TextAlign">Title text align</label>
                <select id="ddl_Title_TextStyle_TextAlign"></select>
            </div>

        </div>
    </div>
</body>
</html>