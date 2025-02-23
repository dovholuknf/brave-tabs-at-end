chrome.tabs.onCreated.addListener(async (tab) => {
    let allTabs = await chrome.tabs.query({ currentWindow: true });
    let lastTab = allTabs[allTabs.length - 1];

    if (tab.index !== lastTab.index) {
        await chrome.tabs.move(tab.id, { index: lastTab.index + 1 });
    }
});