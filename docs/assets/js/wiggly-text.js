var elements = document.getElementsByClassName("wiggly-text");

for (var j = 0; j < elements.length; j++) {
    var elementSingularHTML = elements[j].innerHTML;
    var charArray = elementSingularHTML.split("");
    var respanned = "";
    for (var i = 0; i < charArray.length; i++) {        
        var modValue = i % 8;

        var line_height = parseInt(window.getComputedStyle(elements[j]).getPropertyValue("font-size"), 10);

        topPosition = -line_height/8;
        bottomPosition = line_height/8;

        var delay = -modValue/8;

        respanned += '<span style="top:-' + topPosition.toString() + 'px; position:relative"><span class="wavy" style="--first-value:' + topPosition.toString() + 'px; --second-value:' + bottomPosition.toString() + 'px; animation-delay:' + delay + 's; --duration:1s">' + charArray[i] + '</span></span>';
    }

    elements[j].innerHTML = respanned;
}