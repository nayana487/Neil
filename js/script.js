$(".readmore").toggle(function(){
    $(this).text("Readless").siblings(".show-this-on-click").show();    
}, function(){
    $(this).text("readmore").siblings(".show-this-on-click").hide();    
});