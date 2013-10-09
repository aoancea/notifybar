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
        //alert("initialize notification object");

        getAndLoadNotification(hash, internalParseSettings);
    };

    var internalParseSettings = function(jsonData, returnHTML)
    {
        //alert(jsonData);
        //alert(returnHTML);

        var html = null;
        if (jsonData)
        {
            var styleData = '';
            var isIE = checkIfIE();
            //alert(isIE);

            var notificationWrapper = document.createElement('div');

            if(jsonData.Notification)
            {
                styleData = 'margin:0 auto;';

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
                        borderCss += jsonData.Notification.Border.Color + ";";
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
                    //alert(jsonData.Title.Title);
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


            //alert(returnHTML);

            if(!returnHTML)
            {
                // vom incarca html-ul notificarii in pagina in functie de setare
                //var notification = document.getElementById('divNotification');
                //notification.appendChild(notificationWrapper);

                //alert("Inserting now !");

                //document.body.insertBefore(notificationWrapper, document.body.childNodes[0]);
                var bodyElement = document.getElementsByTagName("body")[0];

                if(bodyElement)
                {
                    //alert(body.length);
                    //alert(notificationWrapper.outerHTML);
                    //alert(bodyElement.firstChild.outerHTML);
                    //alert(bodyElement.innerHTML);

                    var  firstChild = bodyElement.childNodes[0];

                    bodyElement.insertBefore(notificationWrapper, bodyElement.firstChild);
                }
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

    this.parseSettings = function(jsonData, returnHTML)
    {
        //alert(returnHTML);

        if(!returnHTML)
        {
            internalParseSettings(jsonData, returnHTML);
        }
        else
        {
            return internalParseSettings(jsonData, returnHTML);
        }
    };

    var getAndLoadNotification = function(hash, callback)
    {
        //alert("Preparing for loading json object");

        var httpRequest;
        if (window.XMLHttpRequest)
        {
            //alert("Its not IE");
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
                //alert("State:" + httpRequest.readyState + " Status: " + httpRequest.status + " Response: " + httpRequest.responseText);

                var jsondata = eval("("+httpRequest.responseText+")");

                //alert(jsondata);

                callback.call(this, jsondata, false);
            }
        };

        url = "http://localhost/notificationbar/jsonObjects/" + hash + ".txt";

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

    var setStyleToElement = function (element, styleData, isIE) {
        if (element && styleData) {
            //alert(styleData);
            if (!isIE) {
                element.setAttribute('style', styleData);
            } else {
                element.style.setAttribute('cssText', styleData);
            }
            //alert("Style set!");
        }
    };
}