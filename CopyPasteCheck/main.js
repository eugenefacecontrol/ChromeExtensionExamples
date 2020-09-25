document.addEventListener('DOMContentLoaded', function(){
    readClipboard();
    document.addEventListener('visibilitychange', function(){
        if(!document.hidden){
            readClipboard();
        }
    });
});

var extensionId = '';

function readClipboard(){
    chrome.runtime.sendMessage(
        extensionId,
        { method: 'getClipboard' },
        function(response){
            document.getElementById('clipboard-content').textContent = response;
        }
    );
}

document.getElementById('copyButton').addEventListener('click', function(){
    var text = document.getElementById('para').textContent;

    chrome.runtime.sendMessage(
        extensionId,
        { method: "setClipboard", value: text},
        function(response){
            console.log('extension setClipboard response', response);
        }
    );
});