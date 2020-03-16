$(function(){
    console.log('popup init.');
    $("#mybtn").bind('click', function (e) {
        //console.log('mybtn clieck');alert('a');
        chrome.runtime.getBackgroundPage(function(bg){
            alert(bg.count);
            bg.count=bg.count+1;
        });        
    });
})