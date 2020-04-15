var newDiv = document.createElement("div");
newDiv.classList.add("giant-nasty-popup");

newDiv.style.cssText = `
    font-size: 14em;
    color: red;
    position: fixed;
    left: 0;
    top: 0;
    background: lightgray;
    text-align: center;
    width: 100%;
    height: 100%;
    z-index: 99999999;
`;

var newContent = document.createTextNode("GET UP!!!");
var button = document.createElement("button");
button.innerHTML = "Dismiss";
button.addEventListener('click', function () {
    var todel = document.getElementsByClassName("giant-nasty-popup");
    for (var i = 0; i < todel.length; i++) {
        document.body.removeChild(todel[i]);
    }
});

newDiv.appendChild(newContent);
newDiv.appendChild(button);

document.body.appendChild(newDiv);