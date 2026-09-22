chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed successfully!");
  
  // Set default values in Chrome storage
  chrome.storage.local.set({ theme: "dark" });
});

chrome.action.onClicked.addListener((tab) => {
  console.log("User clicked the extension icon on tab:", tab.id);
  
  // Example: Modify the current tab's URL
  chrome.tabs.update(tab.id, { url: "https://developer.chrome.com" });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fetchData") {
    // Process data here
    const result = `Processed data for ${message.payload}`;
    
    // Reply back to the sender
    sendResponse({ success: true, data: result });
  }
  
  return true; // Keeps the message channel open for asynchronous responses
});

if (chrome?.sidePanel) {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => {
      console.error("Failed to configure DevProject side panel:", error);
    });
} else {
  console.warn("Side panel API is not available in this browser.");
}