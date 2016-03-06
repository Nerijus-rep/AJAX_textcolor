$.get("data.txt", function (response) {
    console.log(response);
    $("p").load("data.txt");
});

$(document).ready(function () {
    $.getJSON("http://www.colourlovers.com/api/palette/1930?jsonCallback=?",
        function (colorPalettes) {
            printColors(colorPalettes);
        });

    function printColors(colorPalettes) {

        var color = "#" + colorPalettes[0].colors[0];
        var color1 = "#" + colorPalettes[0].colors[1];
        var color2 = "#" + colorPalettes[0].colors[2];
        var color3 = "#" + colorPalettes[0].colors[3];
        var color4 = "#" + colorPalettes[0].colors[4];

        var textcolors = [color, color1, color2, color3, color4];
        var currentColor = 0;

        $("button").on("click", function () {
            $("p").css("color", textcolors[currentColor]);
            currentColor++;
            if (currentColor > textcolors.length - 1) {
                currentColor = 0;
            };
        });
    };
});