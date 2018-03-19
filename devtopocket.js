function sendToPocket() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById("article-reaction-actions").insertAdjacentHTML("afterend", "<div id='devtopocket_notification' style='text-align: center;padding: 10px 0px 28px;'>This article has been saved to Pocket!</div>")
            setTimeout(function(){
                document.getElementById("devtopocket_notification").remove()
            }, 2000)
        }
    };
    xhr.open("GET", "https://getpocket.com/save?url="+window.location.href, true);
    xhr.send();
}

document.getElementById("reaction-butt-readinglist").addEventListener("click", function() {
    var getting = browser.storage.local.get("ask_confirmation");
    getting.then(function(result) {
        if ((result.ask_confirmation || result.ask_confirmation==undefined) && window.confirm("Do you want to save this article in Pocket?")) {
            sendToPocket();
        }
        else if(!result.ask_confirmation) {
            sendToPocket();
        }
    }, function(error) {
        console.log(`Error: ${error}`);
    });
});