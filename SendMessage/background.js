"use strict";

function onError(error) {
    console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
        chrome.tabs.sendMessage(
            tab.id,
            { greeting: "Hi from background script" }
        ).then(response => {
            console.log("Message from the content script:");
            console.log(response.response);
        }).catch(onError);
    }
}

chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendMessageToTabs).catch(onError);
});