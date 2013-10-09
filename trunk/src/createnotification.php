<?php

    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        if(isset($_POST["hash"]) && isset($_POST["jsonData"]))
        {
            $hash = $_POST["hash"];
            $jsonData = $_POST["jsonData"];

            try
            {
                $my_file = 'jsonObjects/'.$hash.'.txt'; // set file name
                $handle = fopen($my_file, 'w');
                $data = json_encode($jsonData);
                //$data = "text";
                fwrite($handle, $data);
                fclose($handle);

                echo json_encode($hash);
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