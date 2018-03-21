function sendBackgroundToPocket(){
    browser.runtime.sendMessage({"url": window.location.href}).then(function(){
        document.getElementById("article-reaction-actions").insertAdjacentHTML("afterend", "<div id='devtopocket_notification' style='text-align: center;padding: 10px 0px 28px;'>This article has been saved to Pocket!</div>")
        setTimeout(function(){
            document.getElementById("devtopocket_notification").remove()
        }, 2000)
    });  
}
console.log("test");
document.getElementById("reaction-butt-readinglist").addEventListener("click", function() {
    browser.storage.local.get({ask_confirmation: true})
    .then(function(result) {
        if ((result.ask_confirmation || result.ask_confirmation==undefined) && window.confirm("Do you want to save this article in Pocket?")) {
            sendBackgroundToPocket();
        }
        else if(!result.ask_confirmation) {
            sendBackgroundToPocket();
        }
    }, function(error) {
        console.log(`Error: ${error}`);
    });
});