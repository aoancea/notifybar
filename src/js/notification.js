/**
 * Created with JetBrains PhpStorm.
 * User: Proba
 * Date: 10/8/13
 * Time: 3:14 PM
 * To change this template use File | Settings | File Templates.
 */


var Notification = function()
{
    var S3URL = ''; // to be set

    this.initialize = function(hash)
    {
        getAndLoadNotification(hash, parseSettings);
    };

    this.parseSettings = function(jsonData, returnHTML)
    {
        var html = null;
        if (jsonData)
        {
            var styleData = '';
            var isIE = checkIfIE();
            //alert(isIE);

            var notificationWrapper = document.createElement('div');

            if(jsonData.Notification)
            {
                styleData = '';

                if (jsonData.Notification.Size)
                {
                    if (jsonData.Notification.Size.Height)
                    {
                        styleData += "height:" + jsonData.Notification.Size.Height + "px;";
                    }

                    if (jsonData.Notification.Size.Width)
                    {
                        styleData += "width:" + jsonData.Notification.Size.Width + "px;";
                    }
                }

                if (jsonData.Notification.Border)
                {
                    var borderCss = '';
                    if (jsonData.Notification.Border.Size)
                    {
                        borderCss += jsonData.Notification.Border.Size + "px ";
                    }

                    if (jsonData.Notification.Border.Style)
                    {
                        borderCss += jsonData.Notification.Border.Style + " ";
                    }

                    if (jsonData.Notification.Border.Color)
                    {
                        borderCss += "#" + jsonData.Notification.Border.Color + ";";
                    }

                    if(borderCss)
                    {
                        styleData += 'border:' + borderCss;
                    }
                }

                //alert(styleData);
                setStyleToElement(notificationWrapper, styleData, isIE);
            }

            if (jsonData.Title)
            {

                var title = document.createElement('h2');
                if (jsonData.Title.Title)
                {

                    title.innerHTML = jsonData.Title.Title;
                }

                if (jsonData.Title.TextStyle)
                {
                    styleData = '';

                    if (jsonData.Title.TextStyle.Font)
                    {
                        styleData += "font-family:" + jsonData.Title.TextStyle.Font + ";";
                    }

                    if (jsonData.Title.TextStyle.Size)
                    {
                        styleData += "font-size:" + jsonData.Title.TextStyle.Size + "px;";
                    }

                    if (jsonData.Title.TextStyle.Style)
                    {
                        styleData += "font-style:" + jsonData.Title.TextStyle.Style + ";";
                    }

                    if (jsonData.Title.TextStyle.TextAlign)
                    {
                        styleData += "text-align:" + jsonData.Title.TextStyle.TextAlign + ";";
                    }

                    //alert(styleData);
                    setStyleToElement(title, styleData, isIE);
                }

                notificationWrapper.appendChild(title);
            }


            if(!returnHTML)
            {
                // vom incarca html-ul notificarii in pagina in functie de setare
                //var notification = document.getElementById('divNotification');
                //notification.appendChild(notificationWrapper);
            }
            else
            {
                html = notificationWrapper;
            }
        }

        if(returnHTML)
        {
            return html;
        }
    };

    var getAndLoadNotification = function(hash, callback)
    {
        var httpRequest;
        if (window.XMLHttpRequest)
        {
            httpRequest = new XMLHttpRequest();
        }
        else if (window.ActiveXObject)
        {
            // for internet explorer
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }

        httpRequest.onreadystatechange = function()
        {
            // ne asiguram ca s-a terminat requestul - readyStat = 4
            // ne asiguram ca s-a efectuat cu succes - status = 200
            if (httpRequest.readyState === 4 && httpRequest.status === 200)
            {
                // call the callback function
                callback.call(httpRequest.responseXML, false);
            }
        };

        url = S3URL + hash;

        httpRequest.open('GET', url);
        httpRequest.send();
    };

    var checkIfIE = function()
    {
        if (navigator.appName == "Microsoft Internet Explorer")
        // detect if IE
            return true;
        return false;
    };
}