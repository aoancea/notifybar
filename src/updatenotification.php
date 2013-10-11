<?php

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    if(isset($_POST["hash"]) && isset($_POST["jsonData"]))
    {
        $hash = $_POST["hash"];
        $jsonData = $_POST["jsonData"];

        try
        {
            /*
            $my_file = 'jsonObjects/'.$hash.'.txt'; // set file name
            $handle = fopen($my_file, 'w');
            $data = json_encode($jsonData);
            //$data = "text";
            fwrite($handle, $data);
            fclose($handle);

            echo json_encode($hash);
            */

            //include the S3 class
            if (!class_exists('S3'))require_once('S3/S3.php');

            //AWS access info
            if (!defined('awsAccessKey')) define('awsAccessKey', '');
            if (!defined('awsSecretKey')) define('awsSecretKey', '');

            //instantiate the class
            $s3 = new S3(awsAccessKey, awsSecretKey);

            $my_file = 'jsonObjects/'.$hash.'.txt'; // set file name
            $handle = fopen($my_file, 'w');
            $data = 'handlejson('.json_encode($jsonData).')';
            //$data = "text";
            fwrite($handle, $data);
            fclose($handle);

            if($s3->putObjectFile($my_file, "jumpeyeother", 'notifysnack/'.$hash.'.txt', S3::ACL_PUBLIC_READ))
            {
                unlink($my_file);
                echo json_encode($hash);
            }
            else
            {
                unlink($my_file);
                echo json_encode("fail");
            }
        }
        catch(ErrorException $error)
        {
            echo json_encode($error);
        }
    }
    else
    {
        echo json_encode("Values are not set!");
    }
}
else
{
    echo json_encode("Request method must be POST!");
}
?>