var Create = function()
{
    var jsonData = null;

    var NotificationObject = null;


    var Action = {};
    Action.Notification_Size_Height = "notification_size_height";
    Action.Notification_Size_Width = "notification_size_width";
    Action.Notification_Border_Size = "notification_border_size";
    Action.Notification_Border_Style = "notification_border_style";
    Action.Notification_Border_Color = "notification_border_color";

    Action.Title_Title = "title_title";
    Action.Title_TextStyle_Font = "title_textstyle_font";
    Action.Title_TextStyle_Size = "title_textstyle_size";
    Action.Title_TextStyle_Style = "title_textstyle_style";
    Action.Title_TextStyle_TextAlign = "title_textstyle_textalign";

    var Data = {};

    Data.Hash = null;

    Data.Is_Notification_Border_Size_Ready = false;
    Data.Is_Notification_Border_Style_Ready = false;
    Data.Is_Notification_Border_Color_Ready = false;

    Data.Is_Title_TextStyle_Font_Ready = false;
    Data.Is_Title_TextStyle_Size_Ready = false;
    Data.Is_Title_TextStyle_Style_Ready = false;
    Data.Is_Title_TextStyle_TextAlign_Ready = false;

    var Controls = {};

    Controls.txt_Notification_Size_Height = null;
    Controls.txt_Notification_Size_Width = null;
    Controls.ddl_Notification_Border_Size = null;
    Controls.ddl_Notification_Border_Style = null;
    Controls.ddl_Notification_Border_Color = null;

    Controls.txt_Title_Title = null;
    Controls.ddl_Title_TextStyle_Font = null;
    Controls.ddl_Title_TextStyle_Size = null;
    Controls.ddl_Title_TextStyle_Style = null;
    Controls.ddl_Title_TextStyle_TextAlign = null;

    Controls.Preview = null;

    Controls.btnUpdateNotification = null;

    this.initializeControls = function()
    {
        NotificationObject = new Notification();
        Data.Hash = $("#notificationHash").val();

        initializeNotificationBasedControls();
        initializeTitleBasedControls();

        Controls.Preview = $("#preview");

        Controls.btnUpdateNotification = $("#btnUpdateNotification");
        if(Controls.btnUpdateNotification.length > 0)
        {
            Controls.btnUpdateNotification.click(function(){
                $.ajax({
                    type: "POST",
                    url: "updatenotification.php",
                    dataType: "json",
                    data:
                    {
                        "hash": Data.Hash,
                        "jsonData": jsonData
                    },
                    success: function(data)
                    {
                        //alert("Success!" + "\n" + " Here is your file name: " + data);

                        var embeded =
                            '<script type="text/javascript"> \n' +
                            '    var notification = new Notification();\n' +
                            '    notification.initialize("'+ data +'");\n' +
                            '</script>';

                        alert("Success!" + "\n" + " Here is your script: \n" + embeded);
                    }
                });
            });
        }
    };

    var initializeNotificationBasedControls = function()
    {
        Controls.txt_Notification_Size_Height = $("#txt_Notification_Size_Height");
        if(Controls.txt_Notification_Size_Height.length > 0)
        {
            var refreshInterval;

            Controls.txt_Notification_Size_Height.keyup(function(){
                // change event handler
                //alert("Text change!");

                setTimeout(function()
                    {
                        jsonData.Notification.Size.Height = Controls.txt_Notification_Size_Height.val();
                        refreshNotification(jsonData)
                    },
                    500);
            });
        }

        Controls.txt_Notification_Size_Width = $("#txt_Notification_Size_Width");
        if(Controls.txt_Notification_Size_Width.length > 0)
        {
            Controls.txt_Notification_Size_Width.keyup(function(){
                // change event handler
                //alert("Text change!");
                setTimeout(function()
                    {
                        jsonData.Notification.Size.Width = Controls.txt_Notification_Size_Width.val();
                        refreshNotification(jsonData);
                    },
                    500);
            });
        }

        Controls.ddl_Notification_Border_Size = $("#ddl_Notification_Border_Size");
        if(Controls.ddl_Notification_Border_Size.length > 0)
        {
            ajaxGetValues(Action.Notification_Border_Size, Controls.ddl_Notification_Border_Size);
            Controls.ddl_Notification_Border_Size.change(function(){
                // change event handler
                //alert($(this).val());
                setTimeout(function()
                    {
                        jsonData.Notification.Border.Size = Controls.ddl_Notification_Border_Size.val();
                        refreshNotification(jsonData);
                    },
                    100);
            });
        }

        Controls.ddl_Notification_Border_Style = $("#ddl_Notification_Border_Style");
        if(Controls.ddl_Notification_Border_Style.length > 0)
        {
            ajaxGetValues(Action.Notification_Border_Style, Controls.ddl_Notification_Border_Style);
            Controls.ddl_Notification_Border_Style.change(function(){
                // change event handler
                //alert($(this).val());
                setTimeout(function()
                    {
                        jsonData.Notification.Border.Style = Controls.ddl_Notification_Border_Style.val();
                        refreshNotification(jsonData);
                    },
                    100);
            });
        }

        Controls.ddl_Notification_Border_Color = $("#ddl_Notification_Border_Color");
        if(Controls.ddl_Notification_Border_Color.length > 0)
        {
            ajaxGetValues(Action.Notification_Border_Color, Controls.ddl_Notification_Border_Color);
            Controls.ddl_Notification_Border_Color.change(function(){
                // change event handler
                //alert($(this).val());
                setTimeout(function()
                    {
                        jsonData.Notification.Border.Color = Controls.ddl_Notification_Border_Color.val();
                        refreshNotification(jsonData);
                    },
                    100);
            });
        }
    };

    var initializeTitleBasedControls = function()
    {
        Controls.txt_Title_Title = $("#txt_Title_Title");
        if(Controls.txt_Title_Title.length > 0)
        {
            Controls.txt_Title_Title.keyup(function(){
                // change event handler
                //alert("Text change!");
                setTimeout(function()
                    {
                        jsonData.Title.Title = Controls.txt_Title_Title.val();
                        refreshNotification(jsonData);
                    },
                    100);
            });
        }

        Controls.ddl_Title_TextStyle_Font = $("#ddl_Title_TextStyle_Font");
        if(Controls.ddl_Title_TextStyle_Font.length > 0)
        {
            ajaxGetValues(Action.Title_TextStyle_Font, Controls.ddl_Title_TextStyle_Font);
            Controls.ddl_Title_TextStyle_Font.change(function(){
                // change event handler
                //alert($(this).val());
                setTimeout(function()
                    {
                        jsonData.Title.TextStyle.Font = Controls.ddl_Title_TextStyle_Font.val();
                        refreshNotification(jsonData);
                    },
                    100);
            });
        }

        Controls.ddl_Title_TextStyle_Size = $("#ddl_Title_TextStyle_Size");
        if(Controls.ddl_Title_TextStyle_Size.length > 0)
        {
            ajaxGetValues(Action.Title_TextStyle_Size, Controls.ddl_Title_TextStyle_Size);
            Controls.ddl_Title_TextStyle_Size.change(function(){
                // change event handler
                //alert($(this).val());
                setTimeout(function()
                    {
                        jsonData.Title.TextStyle.Size = Controls.ddl_Title_TextStyle_Size.val();
                        refreshNotification(jsonData);
                    },
                    100);
            });
        }

        Controls.ddl_Title_TextStyle_Style = $("#ddl_Title_TextStyle_Style");
        if(Controls.ddl_Title_TextStyle_Style.length > 0)
        {
            ajaxGetValues(Action.Title_TextStyle_Style, Controls.ddl_Title_TextStyle_Style);
            Controls.ddl_Title_TextStyle_Style.change(function(){
                // change event handler
                //alert($(this).val());
                setTimeout(function()
                    {
                        jsonData.Title.TextStyle.Style = Controls.ddl_Title_TextStyle_Style.val();
                        refreshNotification(jsonData);
                    },
                    100);
            });
        }

        Controls.ddl_Title_TextStyle_TextAlign = $("#ddl_Title_TextStyle_TextAlign");
        if(Controls.ddl_Title_TextStyle_TextAlign.length > 0)
        {
            ajaxGetValues(Action.Title_TextStyle_TextAlign, Controls.ddl_Title_TextStyle_TextAlign);
            Controls.ddl_Title_TextStyle_TextAlign.change(function(){
                // change event handler
                //alert($(this).val());
                setTimeout(function()
                    {
                        jsonData.Title.TextStyle.TextAlign = Controls.ddl_Title_TextStyle_TextAlign.val();
                        refreshNotification(jsonData);
                    },
                    100);
            });
        }
    };

    var ajaxGetValues = function(action, $element)
    {
        $.ajax({
            type: "GET",
            url: "settings.php",
            dataType: "json",
            data:
            {
                "action" : action
            },
            success: function(data)
            {
                if(data)
                {
                    var k = 0;
                    for(k = 0, len = data.length; k < len; k++)
                    {
                        var item = data[k];

                        $("<option></option>")
                            .text(item)
                            .prop("value", item.toLowerCase())
                            .appendTo($element);
                    }

                    switch (action)
                    {
                        case Action.Notification_Border_Size:
                        {
                            Data.Is_Notification_Border_Size_Ready = true;
                            break;
                        }

                        case Action.Notification_Border_Style:
                        {
                            Data.Is_Notification_Border_Style_Ready = true;
                            break;
                        }

                        case Action.Notification_Border_Color:
                        {
                            Data.Is_Notification_Border_Color_Ready = true;
                            break;
                        }

                        case Action.Title_TextStyle_Font:
                        {
                            Data.Is_Title_TextStyle_Font_Ready = true;
                            break;
                        }

                        case Action.Title_TextStyle_Size:
                        {
                            Data.Is_Title_TextStyle_Size_Ready = true;
                            break;
                        }

                        case Action.Title_TextStyle_Style:
                        {
                            Data.Is_Title_TextStyle_Style_Ready = true;
                            break;
                        }

                        case Action.Title_TextStyle_TextAlign:
                        {
                            Data.Is_Title_TextStyle_TextAlign_Ready = true;
                            break;
                        }
                    }

                    if
                        (
                            Data.Is_Notification_Border_Size_Ready &&
                            Data.Is_Notification_Border_Style_Ready &&
                            Data.Is_Notification_Border_Color_Ready &&
                            Data.Is_Title_TextStyle_Font_Ready &&
                            Data.Is_Title_TextStyle_Size_Ready &&
                            Data.Is_Title_TextStyle_Style_Ready &&
                            Data.Is_Title_TextStyle_TextAlign_Ready
                        )
                    {
                        var url = "jsonObjects/" + Data.Hash + ".txt";

                        $.ajax({
                            type: "GET",
                            url: url,
                            dataType: "json",
                            success: function(data)
                            {
                                jsonData = data;
                                setSettingsValues(jsonData);
                            }
                        });
                    }
                }
            },
            error: function(xhr, status, error)
            {
                alert("Undefined error: " + xhr.responseText);
            }
        });
    }

    var setSettingsValues = function(jsonData)
    {
        if(jsonData)
        {
            Controls.txt_Notification_Size_Height.val(jsonData.Notification.Size.Height);
            Controls.txt_Notification_Size_Width.val(jsonData.Notification.Size.Width);
            Controls.ddl_Notification_Border_Size.val(jsonData.Notification.Border.Size);
            Controls.ddl_Notification_Border_Style.val(jsonData.Notification.Border.Style);
            Controls.ddl_Notification_Border_Color.val(jsonData.Notification.Border.Color);

            Controls.txt_Title_Title.val(jsonData.Title.Title);
            Controls.ddl_Title_TextStyle_Font.val(jsonData.Title.TextStyle.Font);
            Controls.ddl_Title_TextStyle_Size.val(jsonData.Title.TextStyle.Size);
            Controls.ddl_Title_TextStyle_Style.val(jsonData.Title.TextStyle.Style);
            Controls.ddl_Title_TextStyle_TextAlign.val(jsonData.Title.TextStyle.TextAlign);

            refreshNotification(jsonData);
        }
    };

    var refreshNotification = function(jsonData)
    {
        if(jsonData)
        {
            var html = NotificationObject.parseSettings(jsonData, true); // get notification object
            Controls.Preview.empty(); // we empty the container
            Controls.Preview.append(html); // we append the notification object to the container
        }
    }
};
