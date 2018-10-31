"use strict";

document.getElementById("FirstResult").addEventListener("change", function() {
    if (document.getElementById("FirstResult").checked) {
        chrome.storage.sync.set({searchOption: "FirstResult"});
    }
});

document.getElementById("SearchResults").addEventListener("change", function() {
    if (document.getElementById("SearchResults").checked) {
        chrome.storage.sync.set({searchOption: "SearchResults"});
    }
});

chrome.storage.sync.get("searchOption", function(data) {
    // if (data.searchOption) {
        document.getElementById(data.searchOption).checked = true;
    // }
    // else {
    //     document.getElementById("FirstResult").checked = true;
    // }
});