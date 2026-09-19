console.log("DevEnveloped background script loaded.");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "PING") {
        sendResponse({ 
            type: "PONG",
            message: "Hello from the background script!"
        });
    }
});