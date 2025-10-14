chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting.registerContentScripts([
    {
      id: "postMessageListener",
      matches: ["<all_urls>"],
      js: ["content.js"],
      allFrames: true
    }
  ]);
});
