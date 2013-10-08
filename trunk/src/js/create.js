var Create = function()
{
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

    var Controls = {};

    Controls.ddl_Title_TextStyle_Font = null;

    this.initializeControls = function()
    {
        initializeTitleBasedControls();
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
                            .prop("value", item)
                            .appendTo($element);
                    }
                }
            }
        });
    }

    var initializeTitleBasedControls = function()
    {
        Controls.ddl_Title_TextStyle_Font = $("#ddl_Title_TextStyle_Font");
        if(Controls.ddl_Title_TextStyle_Font.length > 0)
        {
            ajaxGetValues(Action.Title_TextStyle_Font, Controls.ddl_Title_TextStyle_Font);
            Controls.ddl_Title_TextStyle_Font.change(function(){
                // change event handler
                //alert($(this).val());
            });
        }

        Controls.ddl_Title_TextStyle_Size = $("#ddl_Title_TextStyle_Size");
        if(Controls.ddl_Title_TextStyle_Size.length > 0)
        {
            ajaxGetValues(Action.Title_TextStyle_Size, Controls.ddl_Title_TextStyle_Size);
            Controls.ddl_Title_TextStyle_Size.change(function(){
                // change event handler
                //alert($(this).val());
            });
        }

        Controls.ddl_Title_TextStyle_Style = $("#ddl_Title_TextStyle_Style");
        if(Controls.ddl_Title_TextStyle_Style.length > 0)
        {
            ajaxGetValues(Action.Title_TextStyle_Style, Controls.ddl_Title_TextStyle_Style);
            Controls.ddl_Title_TextStyle_Style.change(function(){
                // change event handler
                //alert($(this).val());
            });
        }

        Controls.ddl_Title_TextStyle_TextAlign = $("#ddl_Title_TextStyle_TextAlign");
        if(Controls.ddl_Title_TextStyle_TextAlign.length > 0)
        {
            ajaxGetValues(Action.Title_TextStyle_TextAlign, Controls.ddl_Title_TextStyle_TextAlign);
            Controls.ddl_Title_TextStyle_TextAlign.change(function(){
                // change event handler
                //alert($(this).val());
            });
        }
    };
};
