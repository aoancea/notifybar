<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>IFrame test page</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <?php
        $hash = '';
        $url = '';

        if(isset($_GET["hash"]) && isset($_GET['url']))
        {
            $hash = $_GET["hash"];
            $url = $_GET['url'];
        }
    ?>


    <script src="http://jumpeyeother.s3.amazonaws.com/notifysnack/notification.js"></script>
    <script type="text/javascript">
        var notification = new Notification();
        notification.initialize("<?php echo $hash;?>");
    </script>
</head>

<body style="padding: 0px;">
    <iframe id="previewFrame" name="previewFrame" scrolling="no" frameborder="0" style="width: 100%; height: 1500px; padding: 0;" src="http://<?php echo $url;?>"></iframe>
</body>

</html>











