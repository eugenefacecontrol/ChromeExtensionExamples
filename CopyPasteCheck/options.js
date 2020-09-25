let changeColor = document.getElementById('changeColor');
changeColor.onchange = function(element){
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>'}, function(){
                chrome.tabs.executeScript(
                    tabs[0].id, {file: '/setDynamics.js'})
            });
    })
};