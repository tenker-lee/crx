$(document).ready(function () {
    console.log('content_script.js load.');   
    //$('#kw').val("value");
    var $by1 = $('.prd-buy');
    console.log("find prd-buy -- "+$by1.length);
    if($by1.length>0){
        //$by1[0].click();
    }        
    var $su1 = $('.orderinfo-submit');
    console.log('orderinfo-submit -- '+$su1.length);
    if($su1.length>0){
        //$su1[0].click();
    }
    if($by1.length==0 && $su1.length==0)
    {
        setTimeout(() => {
            window.location.reload();
        }, 1000);   
    }
});