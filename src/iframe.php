<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>


    <script type="text/javascript">
        var loadNotification = function()
        {
            var bodyElement = $('#frameContainer').contents().find('body')[0];


            /*
            var hash = $("#notificationHash").val();
            var url = "jsonObjects/" + hash + ".txt";

            $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                success: function(data)
                {
                    if(data)
                    {

                        var body = $("body");

                        var notificationObject = new Notification();
                        var html = notificationObject.parseSettings(data, true); // get notification object


                        var firstChild = body.childNodes[0];

                        body.insertBefore(html, firstChild);


                        $("#frameContainer").contents().find("#___gcse_0").click(function(e){
                            alert(1);
                        });
                    }
                }
            });

            */
        }


        /*
        $(document).ready(function(){
            $("#frameContainer").ready(function(){

                //alert("Loaded!");
                var bodyElement =  $('#frameContainer').contents().find('body')[0];

                var iframeDoc = $('#frameContainer')[0].contentDocument;
                //alert(iframeDoc);

                var bodyFromFrame = iframeDoc.contents().find('body');
                alert(bodyFromFrame);



                //alert(bodyElement);

                var hash = $("#notificationHash").val();
                var url = "jsonObjects/" + hash + ".txt";

                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "json",
                    success: function(data)
                    {
                        if(data)
                        {
                            //alert(data);
                            //alert(bodyElement.html());


                        }
                    }
                });
            });
        });

        */

    </script>

</head>

<body>

    <?php
        $requestMethods = $_SERVER['REQUEST_METHOD'];

        //check whether a form was submitted
        if($requestMethods == 'GET')
        {
            // GET
            $hash = '';
            if(isset($_GET["hash"]))
            {
                // load notification details
                $hash = $_GET["hash"];
            }
        }
    ?>
    <input type="hidden" id="notificationHash" value="<?php echo $hash; ?>"/>
    <iframe id="frameContainer" name="myframe" style="width:100%; height:500px;" src="http://www.w3schools.com" onload="loadNotification()">
    </iframe>
</body>
</html>











