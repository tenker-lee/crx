$(document).ready(function () {
    console.log('js load');   
    //$('#kw').val("value");

    var $by1 = $('.prd-buy');
    console.log("prd-buy : "+$by1.length);
    if($by1.length>0){
        $by1[0].click();
    }        

    var $su1 = $('.orderinfo-submit');
    console.log('orderinfo-submit : '+$su1.length);

    if($su1.length>0){

        var $hongbao = $(".need-hongbao-checkable");
        console.log("hongbao : " + $hongbao.length);

        if($hongbao.length>0){
            console.log("hongbao click");
            setTimeout(() => {
                $hongbao[0].click();
            }, 100);
            
        }

        var $needPropt = $('.youhui-count');
        console.log("youhui-count : " + $needPropt.length);
        //console.log($needPropt.text());   
        if($needPropt.length>0){
            console.log("youhui clieck");
            $needPropt[0].click();
            setTimeout(() => {
                var $coupon = $(".coupon-list>.coupon-item");
                console.log("coupon : " + $coupon.length);
                if($coupon.length>0){
                    $coupon[0].click();             
                        setTimeout(()=>{
                            console.log("提交")
                            
                            //$('.orderinfo-submit')[0].click();
                            //$su1[0].click();
                        },200);                            
                }
            }, 200);           
        }       
    }   
    //刷新   
    if($by1.length==0 && $su1.length==0){
        setTimeout(() => {
            window.location.reload();
         }, 1000);   
    }
});