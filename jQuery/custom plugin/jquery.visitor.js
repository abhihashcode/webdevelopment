    $.fn.visitor=function(){
        var element=$(this);
        $.ajax({
            url:"http://ip-api.com/json",
            success:function(result){
                var htmlData="<div class='visitor-data'>";
                if(result.status=="success"){
                   htmlData+="Country : "+result.country+"</br>";
                   htmlData+="State : "+result.regionName+"</br>";
                   htmlData+="City : "+result.city+"</br>";
                   htmlData+="PinCode : "+result.zip;
                }
                htmlData+="</div>";
                element.html(htmlData);
            }
        })
    }

