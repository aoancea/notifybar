<?php

    $title_textstyle_font = array("Verdana", "Sans Serif", "Arial");
    $title_textstyle_size = array("1", "2", "3");
    $title_textstyle_style = array("Normal", "Italic", "Oblique");
    $title_textstyle_textalign = array("Center", "Left", "Right");

    if(isset($_GET["action"]))
    {
        $action = $_GET["action"];

        switch($action)
        {
            case "title_textstyle_font":
            {
                // get the title font array of possible choices
                echo json_encode($title_textstyle_font);
            }

            case "title_textstyle_size":
            {
                // get the title font array of possible choices
                echo json_encode($title_textstyle_size);
            }

            case "title_textstyle_style":
            {
                // get the title font array of possible choices
                echo json_encode($title_textstyle_style);
            }

            case "title_textstyle_textalign":
            {
                // get the title font array of possible choices
                echo json_encode($title_textstyle_textalign);
            }

             default:
             {
                 echo json_encode('');
             }
        }
    }
?>