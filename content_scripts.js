$(document).ready(function () {
    console.log('content_script.js load.');   
    //$('#kw').val("value");

    var $by1 = $('.prd-buy');
    console.log(".prd-buy : "+$by1.length);
    if($by1.length>0){
        $by1[0].click();
    }        

    var $su1 = $('.orderinfo-submit');
    console.log('.orderinfo-submit : '+$su1.length);

    if($su1.length>0){
        var $needPropt = $('.check-txt');
        console.log("check-txt:" + $needPropt.length);
        //console.log($needPropt.text());   
        $needPropt.each(function (indexInArray) { 
            var ctext = $(this).text();
            console.log(indexInArray + ":" +  ctext);
            if(ctext.indexOf("优惠")>=0)
            {
                $(this).click();
                //$(this).trigger("myclick");        
                setTimeout(() => {
                    // $(this).trigger("myclick");
                    console.log("优惠点击:"+$(".coupon-list .coupon-item").length);
                    if($(".coupon-list .coupon-item").length>0){
                        $(".coupon-list .coupon-item")[0].click();
                            setTimeout(()=>{
                                console.log("提交")
                                $('.orderinfo-submit')[0].click();
                            },10);
                    }
                    else{
                       // window.location.reload();
                    }
                }, 200);  
                return false;                
            } 
        });         
    }   
    //刷新   
    if($by1.length==0 && $su1.length==0)
    {
        setTimeout(() => {
            window.location.reload();
         }, 1000);   
    }
});