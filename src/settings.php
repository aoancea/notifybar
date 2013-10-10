<?php

    $notification_border_size = array("1", "2", "3");
    $notification_border_style = array("None", "Solid", "Dashed", "Dotted");
    $notification_border_color = array("Red", "Lightgreen", "Darkcyan");
    $notification_background_color = array("None", "Red", "Lightgreen", "Darkcyan");


    $title_textstyle_font = array("Verdana", "Sans Serif", "Arial");
    $title_textstyle_size = array("10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20");
    $title_textstyle_style = array("Normal", "Italic", "Oblique");
    $title_textstyle_textalign = array("Center", "Left", "Right");

    if(isset($_GET["action"]))
    {
        $action = $_GET["action"];

        switch($action)
        {
            case "notification_border_size":
            {
                // get the notification border size array of possible choices
                echo json_encode($notification_border_size);
            }
            break;

            case "notification_border_style":
            {
                // get the notification border style array of possible choices
                echo json_encode($notification_border_style);
            }
            break;

            case "notification_border_color":
            {
                // get the notification border color array of possible choices
                echo json_encode($notification_border_color);
            }
            break;

            case "notification_background_color":
            {
                // get the notification border color array of possible choices
                echo json_encode($notification_background_color);
            }
            break;

            case "title_textstyle_font":
            {
                // get the title font array of possible choices
                echo json_encode($title_textstyle_font);
            }
            break;

            case "title_textstyle_size":
            {
                // get the title font array of possible choices
                echo json_encode($title_textstyle_size);
            }
            break;

            case "title_textstyle_style":
            {
                // get the title font array of possible choices
                echo json_encode($title_textstyle_style);
            }
            break;

            case "title_textstyle_textalign":
            {
                // get the title font array of possible choices
                echo json_encode($title_textstyle_textalign);
            }
            break;

            default:
            {
                echo json_encode('');
            }
        }
    }
?>