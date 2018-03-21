document.addEventListener("DOMContentLoaded", function(){
    browser.storage.local.get({ask_confirmation: true})
    .then(function(result){
        document.getElementById("checkbox_confirmation").checked = result.ask_confirmation;
    }, function(error) {
        console.log(`Error: ${error}`);
    });
});

document.getElementById("checkbox_confirmation").addEventListener("change", function() {
    browser.storage.local.set({
        ask_confirmation: this.checked
    });

    document.getElementById("devtopocket_settingsform").insertAdjacentHTML("afterend", "<div id='devtopocket_settings_saved'><i>Saved</i></div>")
    setTimeout(function(){
        document.getElementById("devtopocket_settings_saved").remove()
    }, 1000)
})