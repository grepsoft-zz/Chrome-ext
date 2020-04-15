window.onload = function () {
    
    var btn_start = document.getElementById("start");
    var btn_stop = document.getElementById("stop");

    btn_start.addEventListener('click', function () {
        chrome.runtime.sendMessage(null, {
            action: "start"
        });
    });

    btn_stop.addEventListener('click', function () {
        chrome.runtime.sendMessage(null, {
            action: "stop"
        });
    });
}

chrome.runtime.onMessage.addListener(function (message) {

    if (message.action == "update") {
        // update the UI
        document.getElementById("minute").innerText = message.time;
    }
});