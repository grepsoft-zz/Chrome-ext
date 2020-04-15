var timerId = -1;
chrome.runtime.onMessage.addListener(function (message) {

    if (message.action == "start") {
       // start the timer        
        var seconds = 30;

        var timestamp = (new Date()).getTime() + seconds * 1000;
        
        (function tick() {
            var left = Math.floor((timestamp - new Date()) / 1000);

            // we are done
            if (left < 0) {
                
                chrome.extension.sendMessage(null, {
                    action: "expired"
                });

                // inject script into the page
                injectScript();
                return;
            }

            // do update
            doUpdate({ minute: left });

            timerId = setTimeout(tick, 1000);
        })();

    } else if (message.action == "stop") {
        // stop the timer
        clearTimeout(timerId);
   }
});

function doUpdate(update) {
    chrome.extension.sendMessage(null, {
        action: "update",
        time: update.minute
    });
}

function injectScript() {
    chrome.tabs.executeScript(null, {
        file: 'inject.js'
    });
}