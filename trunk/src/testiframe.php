<html>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>


    <script>
        $(document).ready(function()
        {
            $("#preview").load(function(){

                var iframeDoc = this.contentDocument;

                alert(iframeDoc.html());


                var html = "<div>Hello from iframe</div>"; // HTML code
                var content = $("#preview").contents().find("body"); // iframe id is 'preview'

                content.html(html);

                var csVal = "div { color: red; font-size: 40px;}";
                var cssLink = "<style>" + csVal + "</style>"; // cssVal contains css code
                var head = $("#preview").contents().find("head");
                head.append(cssLink);

                var jsCode = "alert('you are in the iframe')";

                var js ='<script>'+jsCode+'<\/script>' ;

                // following part is not working
                var content = $('#preview').contents();
                content.find('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>' );
                content.find('body').append(js );
            });
        });

    </script>

</head>
<body>
    <div>Look at your new iFrame</div>
    <iframe id="preview" src="http://www.w3schools.com"></iframe>
</body>
</html>