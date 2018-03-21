function sendToPocket(url, sendResponse) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            sendResponse();
        }
    };
    xhr.open("GET", "https://getpocket.com/save?url="+url, true);
    xhr.send();
}

browser.runtime.onMessage.addListener(handleMessage)
function handleMessage(message, sender, sendResponse) {
    if(message.url) {
        sendToPocket(message.url, sendResponse)
        return true;
    }
}

browser.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    browser.tabs.executeScript(null,{file:"devtopocket.js"});
});