$(".readmore").toggle(function(){
    $(this).text("Readless").siblings(".show-this-on-click").show();
}, function(){
    $(this).text("readmore").siblings(".show-this-on-click").hide();
});

// ND: Remember to put your code within the document ready function
// ND: So we're looking for three functions here that incorporate the slideup, slideDown, show
// and hide methods. Let me know if you need help figuring out how to do this.
