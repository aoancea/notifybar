<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Notification bar</title>
    <link rel="stylesheet" href="css/site.css">

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <script src="js/create.js"></script>
    <script src="js/notification.js"></script>

    <script type="text/javascript">
        $(document).ready(function(){
            var page = new Create();
            page.initializeControls();
        });
    </script>
</head>

<body style="position: relative;">
<img src="images/ajax-loader.gif" class="ajax-loader"/>

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

                // GET
                $hash = '';
                if(isset($_GET["hash"]))
                {
                    // load notification details
                    $hash = $_GET["hash"];
                }
            }
        }
    ?>

    <div class="wrapper">
        <input type="hidden" id="notificationHash" value="<?php echo $hash; ?>"/>

        <h2>Notification settings</h2>

        <div id="notification-settings-wrapper">

            <fieldset>
                <legend>Preview</legend>

                <div id="preview">

                </div>

                <div class="clear"></div>
            </fieldset>

            <fieldset>
                <legend>Notification settings</legend>

                <div class="setting">
                    <label for="txt_Notification_Size_Height">Height</label>
                    <input type="text" id="txt_Notification_Size_Height" value=""/>
                </div>

                <div class="setting">
                    <label for="txt_Notification_Size_Width">Width</label>
                    <input type="text" id="txt_Notification_Size_Width" value=""/>
                </div>

                <div class="setting">
                    <label for="ddl_Notification_Background_Color">Back color</label>
                    <select id="ddl_Notification_Background_Color"></select>
                </div>

                <div class="setting">
                    <label for="ddl_Notification_Border_Style">Border style</label>
                    <select id="ddl_Notification_Border_Style"></select>
                </div>

                <div class="setting">
                    <label for="ddl_Notification_Border_Size">Border size</label>
                    <select id="ddl_Notification_Border_Size"></select>
                </div>

                <div class="setting">
                    <label for="ddl_Notification_Border_Color">Border color</label>
                    <select id="ddl_Notification_Border_Color"></select>
                </div>

            </fieldset>

            <div class="clear"></div>

            <fieldset>
                <legend>Title settings</legend>

                <div class="setting">
                    <label for="txt_Title_Title">Title text</label>
                    <input type="text" id="txt_Title_Title" value=""/>
                </div>

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

            </fieldset>
            <div class="clear"></div>

            <input id="btnCreateNotification" type="button" value="Create notification" style="margin: 0 auto; display: block;">

            <div class="clear"></div>
        </div>
        <div class="clear"></div>
    </div>
</body>
</html>