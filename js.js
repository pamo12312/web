function showInnerText() {
    var element = document.getElementById("testElement");
    var resultElement = document.getElementById("result");

    // Získání a zobrazení innerText
    var innerTextValue = element.innerText;
    resultElement.innerText = "innerText: " + innerTextValue;
}

function showTextContent() {
    var element = document.getElementById("testElement");
    var resultElement = document.getElementById("result");

    // Získání a zobrazení textContent
    var textContentValue = element.textContent;
    resultElement.innerText = "textContent: " + textContentValue;
}