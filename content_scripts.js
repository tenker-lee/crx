$(document).ready(function () {
    console.log('content_script.js load.');
    chrome.runtime.getBackgroundPage(function(bg){
        alert(bg.count);
        bg.count=bg.count+1;
    });
});