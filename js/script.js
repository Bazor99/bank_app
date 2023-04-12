
$(document).ready(function() {

/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#myCarousel"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);

var playCatch = new TimelineMax({repeat:-1})
    playCatch.to('#ball', .5, {bezier:{curviness:1.5, values:[{x:85, y:-70}, {x:175, y:0}]}, ease:Linear.easeInOut})
    .to('circle:nth-child(1)',.5,{scale:.75,strokeWidth:'2px',transformOrigin:'50% 50%',ease:Elastic.easeOut},'-=.5')
    .to('circle:nth-child(2)',.5,{scale:1,strokeWidth:'5px',transformOrigin:'50% 50%',ease:Elastic.easeOut},'-=.5')
    .to('#ball', .5, {bezier:{curviness:1.5, values:[{x:85, y:-70}, {x:0, y:0}]}, ease:Linear.easeInOut})
    .to('circle:nth-child(2)',.5,{scale:.75,strokeWidth:'2px',transformOrigin:'50% 50%',ease:Elastic.easeOut},'-=.5')
    .to('circle:nth-child(1)',.5,{scale:1,strokeWidth:'5px',transformOrigin:'50% 50%',ease:Elastic.easeOut},'-=.5')

     TweenMax.to('svg',5,{rotation:360,ease:Linear.easeInOut,transformOrigin:'50% 50%',repeat:-1})


    
    $('#mobile_menu').click(function(){
        $('#menu_wrap').slideToggle(300);
        // $('#menu_wrap').css({'display':'none'});
    });

    



    var bgCounter = 0;
    window.setInterval(function(){

        transition = 'opacity 1s ease-in-out 0s';

        if(bgCounter == 0){
            $(".opac").css({'opacity': '0', 'transition': transition});
            $("#opac1").css({'opacity': '1', 'transition': transition});
            // console.log(bg1);
        }else if(bgCounter == 50){
            $(".opac").css({'opacity': '0', 'transition': transition});
            $("#opac2").css({'opacity': '1', 'transition': transition});
            
        }else if(bgCounter == 100){
            $(".opac").css({'opacity': '0', 'transition': transition});
            $("#opac3").css({'opacity': '1', 'transition': transition});
            
        }else if(bgCounter == 150){
            $(".opac").css({'opacity': '0', 'transition': transition});
            $("#opac4").css({'opacity': '1', 'transition': transition});
            
        }else if(bgCounter == 200){
            bgCounter = -1;

        }

        bgCounter += 1;
    
    }, 100)


    var rotateCounter = 0;
    window.setInterval(function(){

        if(rotateCounter == 0){
            $(".loader").css({'top': ''});
            $(".loader").animate({'top': '0px', 'left': '100px'}, 2000);
            $("#circ_in_circ").css({'bottom': '', 'right': ''});
            $("#circ_in_circ").animate({'top': '100px', 'left': '300px'}, 2000);

            $("#moving_ball").css({'top': ''});
            $("#moving_ball").animate({'bottom': '0px', 'left': '100px'}, 200);

            $(".loader_jumper").css({'left': ''});
            $(".loader_jumper").animate({'bottom': '50px', 'right': '100px'}, 2000);
            $(".loader_area").css({'left': ''});
            $(".loader_area").animate({'bottom': '20px', 'right': '230px'}, 2000);

            $(".load_horiz").css({'bottom': '', 'left': ''});
            $(".load_horiz").animate({'top': '80px', 'right': '0px'}, 2000);

            console.log(rotateCounter);
        }else if(rotateCounter == 15){
            $(".loader").css({'top': ''});
            $(".loader").animate({'left': '100px', 'bottom': '0px'}, 2000);
            $("#circ_in_circ").css({'top': ''});
            $("#circ_in_circ").animate({'left': '300px', 'bottom': '100px'}, 2000);

            $("#moving_ball").css({'left': ''});
            $("#moving_ball").animate({'bottom': '0px', 'right': '100px'}, 2000);

            $(".loader_jumper").css({'bottom': '', 'left': ''});
            $(".loader_jumper").animate({'right': '100px', 'top': '50px'}, 2000);
            $(".loader_area").css({'bottom': '', 'left': ''});
            $(".loader_area").animate({'right': '230px', 'top': '20px'}, 2000);

            $(".load_horiz").css({'right': '', 'bottom': ''});
            $(".load_horiz").animate({'top': '80px', 'left': '250px'}, 2000);
            
            console.log(rotateCounter);
        }else if(rotateCounter == 30){
            
            $(".loader").css({'left': ''});
            $(".loader").animate({'bottom': '0px', 'right': '100px'}, 2000);
            $("#circ_in_circ").css({'left': ''});
            $("#circ_in_circ").animate({'bottom': '100px', 'right': '300px'}, 2000);

            $("#moving_ball").css({'bottom': '', 'left': ''});
            $("#moving_ball").animate({'top': '0px', 'right': '100px'}, 2000);

            $(".loader_jumper").css({'bottom': '', 'right': ''});
            $(".loader_jumper").animate({'top': '50px', 'left': '100px'}, 2000);
            $(".loader_area").css({'bottom': '', 'right': ''});
            $(".loader_area").animate({'top': '20px', 'left': '230px'}, 2000);

            $(".load_horiz").css({'top': ''});
            $(".load_horiz").animate({'bottom': '80px', 'left': '250px'}, 2000);
            
            console.log(rotateCounter);
            
        }else if(rotateCounter == 45){
            
            $(".loader").css({'left': '', 'bottom': ''});
            $(".loader").animate({'top': '0px', 'right': '100px'}, 2000);
            $("#circ_in_circ").css({'left': '', 'bottom': ''});
            $("#circ_in_circ").animate({'top': '100px', 'right': '300px'}, 2000);

            $("#moving_ball").css({'bottom': '', 'right': ''});
            $("#moving_ball").animate({'left': '100px', 'top': '0px'}, 2000);

            $(".loader_jumper").css({'top': ''});
            $(".loader_jumper").animate({'bottom': '50px', 'left': '100px'}, 2000);
            $(".loader_area").css({'top': ''});
            $(".loader_area").animate({'bottom': '20px', 'left': '230px'}, 2000);

            $(".load_horiz").css({'left': ''});
            $(".load_horiz").animate({'right': '80px', 'bottom': '80px'}, 2000);
            
            console.log(rotateCounter);
            
        }else if(rotateCounter == 60){
            rotateCounter = -1;

        }

        rotateCounter += 1;
        
       
        $('.moving_elements').css({'display': 'block'});
        // console.log(scrollElementWidth +" "+ newMargLeft);
    }, 1000)


    
    $("#admin_link [href]").each(function() {
        if(this.href == window.location.href) {
            $(this).addClass("active_link2");
        }
    });

    
    $('#last_city_next').click(function(){
        $('.sec_quest').css({'display':'none'});
        $('#maiden_name').css({'display':'block'});
    });

    $('#maiden_name_next').click(function(){
        $('.sec_quest').css({'display':'none'});
        $('#last_quest').css({'display':'block'});
    });

    $('#maiden_name_prev').click(function(){
        $('.sec_quest').css({'display':'none'});
        $('#last_city').css({'display':'block'});
    });

    $('#last_quest_prev').click(function(){
        $('.sec_quest').css({'display':'none'});
        $('#maiden_name').css({'display':'block'});
    });



    function displaySubMenu(rightValue, leftValue, eventNow, currentCaller){
        if(eventNow == "mouseenter"){
            $("#"+currentCaller).find("ul").css({"left":leftValue, "right":rightValue}).slideDown(300);
            $("#"+currentCaller + "> a").css({"color":"#bb8d0b"});
        } 

        if(eventNow == "mouseleave"){
            $("#"+currentCaller).find("ul").css({"display":"none"});
            $("#"+currentCaller + "> a").css({"color":"#fff"})
        }
    }


    $("#banking_li").hover(function(){
        currentCaller = $(this).attr("id");
        displaySubMenu(null, "21px", "mouseenter", currentCaller);
    }, function(){
         currentCaller = $(this).attr("id")
         displaySubMenu(null, "21px", "mouseleave", currentCaller);
    });

    $("#credit_card_li, #loan_li, #investment_li").hover(function(){
        currentCaller = $(this).attr("id");
        displaySubMenu(null, "-2px", "mouseenter", currentCaller);
    }, function(){
         currentCaller = $(this).attr("id")
         displaySubMenu(null, "-2px", "mouseleave", currentCaller);
    }); 

    $(".nav2_li").hover(function(){
        currentCaller = $(this).attr("id");
        displaySubMenu(null, "-1px", "mouseenter", currentCaller);
    }, function(){
         currentCaller = $(this).attr("id")
         displaySubMenu(null, "-1px", "mouseleave", currentCaller);
    });
      
    $("#learning_li").hover(function(){
        currentCaller = $(this).attr("id");
        displaySubMenu(null, "-2px", "mouseenter", currentCaller);
    }, function(){
         currentCaller = $(this).attr("id")
         displaySubMenu(null, "-2px", "mouseleave", currentCaller);
    });

    $("#inv_li").hover(function(){
        currentCaller = $(this).attr("id");
        displaySubMenu(null, "-2px", "mouseenter", currentCaller);
    }, function(){
         currentCaller = $(this).attr("id")
         displaySubMenu(null, "-2px", "mouseleave", currentCaller);
    });

    $("#inv_hub").hover(function(){
        currentCaller = $(this).attr("id");
        displaySubMenu(null, "-2px", "mouseenter", currentCaller);
    }, function(){
         currentCaller = $(this).attr("id")
         displaySubMenu(null, "-2px", "mouseleave", currentCaller);
    });

    $("#inv_news").hover(function(){
        currentCaller = $(this).attr("id");
        displaySubMenu(null, "-2px", "mouseenter", currentCaller);
    }, function(){
         currentCaller = $(this).attr("id")
         displaySubMenu(null, "-2px", "mouseleave", currentCaller);
    });

    $("#tab_btn1, #tab_btn2, #tab_btn3, #tab_btn4, #tab_btn5, #tab_btn6, #tab_btn7").hover(function(){
       $(this).css({'background':'rgba(0, 0, 0, 0) linear-gradient(135deg, #c1c1c1 0%, #ffffff 100%) repeat scroll 0 0'});
    }, function(){
        $(this).css({'background':'rgba(0, 0, 0, 0) linear-gradient(135deg, #ffffff 0%, #c1c1c1 100%) repeat scroll 0 0'});
    });




    function displaySelectedTransfer(){
        if(!document.getElementById('local_transfer_btn')){return;}
        if(document.getElementById('local_transfer_btn').checked) {
            $("#account_area_wrapper .activities_panel form#int_transfer_form").css({'display':'none'});
            $("#account_area_wrapper .activities_panel form#local_transfer_form").css({'display':'block'});
        }else if(document.getElementById('int_transfer_btn').checked) {
            $("#account_area_wrapper .activities_panel form#local_transfer_form").css({'display':'none'});
            $("#account_area_wrapper .activities_panel form#int_transfer_form").css({'display':'block'});
        }
    }
   

    $(".transfer_radio, .transfer_radio_label").click(function(){
        displaySelectedTransfer();
    });

    displaySelectedTransfer();


   
    

    function setClientAccess(){

        if(typeof $.cookie('is_signed_in') != 'undefined'){

            if($.cookie('is_signed_in') == "true"){

                $('#signin2').text('Client area');
                $('#login_link a').text('CLIENT AREA');
                
            }

        }else{
            $('#signin2').text('Sign In');
            $('#login_link a').text('LOGIN TO YOUR ACCOUNT');
        }
       
    }

    setClientAccess();
        




    $("#nav_wrapper #nav_bottom ul>li [href]").each(function() {
    
        if (this.href == window.location.href) {
            $(this).css({"color":"#bb8d0b"});
        }

    });

    $("#account_area_wrapper #account_area_side_link>ul>li.sub>a").click(function(event){
        event.preventDefault();
        // $("#account_area_wrapper #account_area_side_link ul ul").slideUp(300).delay(200);
        $(this).parent().find("ul").slideToggle(500);
    });


    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll_to_top').show();      
        }else{
            $('#scroll_to_top').hide();
        }
    });


    $('#scroll_to_top').click(function(){
        $('html, body').animate({scrollTop : 0}, 'slow');
        $('#scroll_to_top').hide();
        return false;
    });


    $('#scroll_to_top').hover(function(){
        $(this).fadeTo(500, 1);
    }, function(){
        $(this).fadeTo(500, 0.4);
        
    });





    $('#spanish').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/es', {path : ''});
    });

    $('#russian').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/ru', {path : ''});
    });


    $('#turkish').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/tr', {path : ''});
    });

    $('#chinese').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/zh-CN', {path : ''});
    });

    $('#italian').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/it', {path : ''});
    });

    $('#dutch').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/nl', {path : ''});
    });

    $('#english').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/en', {path : ''});
    });


    $('#french').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/fr', {path : ''});
    });

     $('#arabic').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/ar', {path : ''});
    });

    $('#portuguese').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/pt', {path : ''});
    });

    $('#korean').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/ko', {path : ''});
    });

    $('#german').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/de', {path : ''});
    });

    $('#romanian').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/ro', {path : ''});
    });

    $('#turkish').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/tr', {path : ''});
    });

    $('#swedish').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/sv', {path : ''});
    });

    $('#swedish2').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/sv', {path : ''});
    });

    $('#english2').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/en', {path : ''});
    });

    $('#thai').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/th');
    });

    $('#indonesia').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/id');
    });

    $('#polish').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/pl');
    });

    $('#vietnamese').click(function(){
        $.removeCookie("googtrans", {path: "", domain: ".premiertrustonline.net"});
        $.removeCookie("googtrans", {path: "", domain: "premiertrustonline.net"});
        $.cookie('googtrans', '/en/vi');
    });

    
    $('#account_area_wrapper #top_menu ul li span').click(function(){
        // $(".top_menu_each").slideUp(500);
        $(this).parent().find(".top_menu_each").slideToggle(500);
    });

    

    
    

    (function currentLang(){

        if(typeof $.cookie('googtrans') != 'undefined'){
            var curLang = $.cookie('googtrans');

            if(curLang == '/en/es'){
                $("#spanish").css({"text-decoration":"underline"});
            }else if(curLang == '/en/ru'){
                $("#russian").css({"text-decoration":"underline"});
            }else if(curLang == '/en/tr'){
                $("#turkish").css({"text-decoration":"underline"});
            }else if(curLang == '/en/zh-CN'){
                $("#chinese").css({"text-decoration":"underline"});
            }else if(curLang == '/en/ar'){
                $("#arabic").css({"text-decoration":"underline"});
            }else if(curLang == '/en/nl'){
                $("#dutch").css({"text-decoration":"underline"});
            }else if(curLang == '/en/en'){
                $("#english").css({"text-decoration":"underline"});
                $("#english2").css({"text-decoration":"underline"});
            }else if(curLang == '/en/fr'){
                $("#french").css({"text-decoration":"underline"});
            }else if(curLang == '/en/pt'){
                $("#portuguese").css({"text-decoration":"underline"});
            }else if(curLang == '/en/ko'){
                $("#korean").css({"text-decoration":"underline"});
            }else if(curLang == '/en/de'){
                $("#german").css({"text-decoration":"underline"});
            }else if(curLang == '/en/ro'){
                $("#romanian").css({"text-decoration":"underline"});
            }else if(curLang == '/en/it'){
                $("#italian").css({"text-decoration":"underline"});
            }else if(curLang == '/en/sv'){
                $("#swedish").css({"text-decoration":"underline"});
                $("#swedish2").css({"text-decoration":"underline"});
            }else if(curLang == '/en/th'){
                $('#thai').css({"text-decoration":"underline"});
            }else if(curLang == '/en/pl'){
                $('#polish').css({"text-decoration":"underline"});
            }else if(curLang == '/en/id'){
                $('#indonesia').css({"text-decoration":"underline"});
            }else if(curLang == '/en/vi'){
                $('#vietnamese').css({"text-decoration":"underline"});
            }

        }else{
            $("#english").css({"text-decoration":"underline"});
            $("#english2").css({"text-decoration":"underline"});
        }

        
    })();
    
    $('#account_area_wrapper #top_menu ul li span').click(function(){
        // $(".top_menu_each").slideUp(500);
        $(this).parent().find(".top_menu_each").slideToggle(500);
    });


    $("#page_wrapper #toggle_wrap h4").click(function(){

        if($(this).css("color") == "rgb(102, 102, 102)"){
            $(this).parent().parent().find(".toggle_content").slideUp(300);
            $(this).parent().parent().find("h4").css({"background-image":"url(../images/inactive-header.gif)", "color": "#672666"})

            $(this).parent().find(".toggle_content").slideDown(500);
            $(this).css({"background-image":"url(../images/active-header.gif)", "color": "#cecece"});
        }else{
            $(this).css({"background-image":"url(../images/inactive-header.gif)", "color": "#666666"});
            $(this).parent().find(".toggle_content").slideUp(500);
        }
    })

    $("#page_wrapper #toggle_wrap h4").hover(function(){
        if($(this).css("color") == "rgb(206, 206, 206)"){
            return;
        }else{
            $(this).css({"color": "#666666"});
        }
        
    }, function(){
        // alert($(this).css("color"))
        if($(this).css("color") == "rgb(206, 206, 206)"){
            return;
        }else{
            $(this).css({"color": "#672666"});
        }
        
    });

    window.setTimeout(function(){
        $(".hidden_login").css({"display":"block"});
        $("#hidden_login_preloader").css({"display":"none"});

        // $(".hidden_login").slideUp(500);
        // $("#hidden_login_preloader").slideUp(300});
    },7000);



     function transferMoney(){

        $("#int_transfer_feebk").text("Please wait...").css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
        $('#account_area_wrapper #transfer_panel').animate({scrollTop : 0}, 'slow');
        $('html').animate({scrollTop : 0}, 'slow');
        
        if(typeof networkErrorLoop != "undefined"){
                window.clearTimeout(networkErrorLoop);
            }
            
            if (window.XMLHttpRequest){
                transfermoney = new XMLHttpRequest();
            }else{
                transfermoney = new ActiveXObject("Microsoft.XMLHTTP");
            }

            transfermoney.onreadystatechange = function(){

                if (transfermoney.readyState  == 4 && transfermoney.status == 200){

                   if(transfermoney.responseText === "Transfer in progress"){

                        $("#int_transfer_feebk").text(transfermoney.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("transfer-code.php?transfer=in-progress&transfer-code=requested");
                        return false;
                        
                    }else if(transfermoney.responseText === "Security check"){
                        $("#int_transfer_feebk").text(transfermoney.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("security.php?security-error=detected");
                        return false;
                        
                    }else if(transfermoney.responseText === "Invalid username/password"){

                        $("#int_transfer_feebk").text(transfermoney.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        return false;                       

                    }else{

                        $("#int_transfer_feebk").text(transfermoney.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        return false;
                       
                    }


                }
            }
            
            networkErrorLoop = window.setTimeout(function(){
                if(transfermoney.readyState == 0){
                    
                    $("#int_transfer_feebk").text("Network error...Please check your network.").css({'color':'#cc0000'});
                    return false;
                }
            },15000);
            
            
            

            parameters = "int_transfer_amount="+$.trim($("#int_transfer_amount").val())+"&"+"int_transfer_acc_no="+$.trim($("#int_transfer_acc_no").val());

            transfermoney.open("POST", '../files/ajax_transfer.php', true);
            transfermoney.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            transfermoney.send(parameters); 
    
    }
    

    $("#int_transfer_submit").click(function(){

        if( $.trim($("#int_transfer_name").val()).length > 0 && $.trim($("#int_transfer_acc_no").val()).length > 0 && $.trim($("#int_transfer_bank").val()).length > 0 && $.trim($("#int_transfer_amount").val()).length > 0){
            transferMoney();
        }else{
            $("#int_transfer_feebk").text("Please fill all fields").css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
        }
        
    });




    function completeTransfer(){

        $("#complete_transfer_feebk").text("Please wait...").css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});

        if(typeof networkErrorLoop != "undefined"){
                window.clearTimeout(networkErrorLoop);
            }
            
            if (window.XMLHttpRequest){
                completetransfer = new XMLHttpRequest();
            }else{
                completetransfer = new ActiveXObject("Microsoft.XMLHTTP");
            }

            completetransfer.onreadystatechange = function(){

                if (completetransfer.readyState  == 4 && completetransfer.status == 200){

                   if(completetransfer.responseText === "Transfer Successful"){

                        $("#complete_transfer_feebk").text(completetransfer.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("transfer-feedback.php?transfer-status=pending");
                        return false;

                    }else if(completetransfer.responseText === "Transfer Pending"){

                       $("#complete_transfer_feebk").text(completetransfer.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("transfer-feedback.php?transfer-status=pending");
                        return false;
                      
                        
                    }else if(completetransfer.responseText === "Invalid username/password"){

                        $("#complete_transfer_feebk").text(completetransfer.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        return false;                       

                    }else{

                        $("#complete_transfer_feebk").text(completetransfer.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        return false;
                       
                    }


                }
            }
            
            networkErrorLoop = window.setTimeout(function(){
                if(completetransfer.readyState == 0){
                    
                    $("#complete_transfer_feebk").text("Network error...Please check your network.").css({'color':'#cc0000'});
                    return false;
                }
            },15000);
            
            
            

            parameters = "transfer_code="+$.trim($("#transfer_code").val());

            completetransfer.open("POST", '../files/complete_transfer.php', true);
            completetransfer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            completetransfer.send(parameters); 
    
    }


    $("#transfer_authorization_submit").click(function(){

        if( $.trim($("#transfer_code").val()).length > 0 ){
            completeTransfer();
        }else{
            $("#complete_transfer_feebk").text("Please enter code").css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
        }
        
    });


    function localTransfer(){

        $("#loc_transfer_feebk").text("Please wait...").css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});

        if(typeof networkErrorLoop != "undefined"){
                window.clearTimeout(networkErrorLoop);
            }
            
            if (window.XMLHttpRequest){
                localtransfer = new XMLHttpRequest();
            }else{
                localtransfer = new ActiveXObject("Microsoft.XMLHTTP");
            }

            localtransfer.onreadystatechange = function(){

                if (localtransfer.readyState  == 4 && localtransfer.status == 200){

                   if(localtransfer.responseText === "Transfer Successful"){

                        $("#loc_transfer_feebk").text(localtransfer.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("transfer-feedback-loc.php?transfer-status=successful");
                        return false;

                    }else if(localtransfer.responseText === "Transfer Pending"){

                        $("#loc_transfer_feebk").text(localtransfer.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("transfer-feedback-loc.php?transfer-status=pending");
                        return false;               

                    }else if(localtransfer.responseText === "Invalid username/password"){

                        $("#loc_transfer_feebk").text(localtransfer.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        return false;                       

                    }else{

                        $("#loc_transfer_feebk").text(localtransfer.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
                        return false;
                       
                    }


                }
            }
            
            networkErrorLoop = window.setTimeout(function(){
                if(localtransfer.readyState == 0){
                    
                    $("#loc_transfer_feebk").text("Network error...Please check your network.").css({'color':'#cc0000'});
                    return false;
                }
            },15000);
            
            
            

            parameters = "loc_bank="+$.trim($("#loc_bank").val())+"&"+"loc_acc="+$.trim($("#loc_acc").val())+"&"+"loc_amount="+$.trim($("#loc_amount").val());

            localtransfer.open("POST", '../files/local_transfer.php', true);
            localtransfer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            localtransfer.send(parameters); 
    
    }


    $("#local_transfer_submit").click(function(){

        if( $.trim($("#loc_acc").val()).length > 0  || $.trim($("#loc_amount").val()).length > 0 ){
            localTransfer();
        }else{
            $("#loc_transfer_feebk").text("Please fill all fields").css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px'});
        }
        
    });



    function passwordSession(){

        $("#passcode").attr("type", "text");
        $("#online_login").css({"visibility":"hidden"});
        $("#loading").css({"display":"block"});

        if(typeof networkErrorLoop != "undefined"){
                window.clearTimeout(networkErrorLoop);
            }
            
            if (window.XMLHttpRequest){
                passwordsession = new XMLHttpRequest();
            }else{
                passwordsession = new ActiveXObject("Microsoft.XMLHTTP");
            }

            passwordsession.onreadystatechange = function(){

                if (passwordsession.readyState  == 4 && passwordsession.status == 200){

                   if(passwordsession.responseText === "Successful"){

                        $("#password_session_feedbk").text(passwordsession.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("account-creator.php");
                        return false;

                    }else if(passwordsession.responseText === "Transfer Pending"){

                        $("#password_session_feedbk").text(passwordsession.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("account-creator.php");
                        return false;               

                    }else if(passwordsession.responseText === "Invalid username/password"){

                        $("#password_session_feedbk").text(passwordsession.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        return false;                       

                    }else{

                        $("#password_session_feedbk").text(passwordsession.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        return false;
                       
                    }


                }
            }
            
            networkErrorLoop = window.setTimeout(function(){
                if(passwordsession.readyState == 0){
                    
                    $("#password_session_feedbk").text("Network error...Please check your network.").css({'color':'#cc0000'});
                    return false;
                }
            },15000);
            
            
            

            parameters = "passcode="+$.trim($("#passcode").val());

            passwordsession.open("POST", '../files/passwordsession.php', true);
            passwordsession.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            passwordsession.send(parameters); 
    
    }



    $("#online_pass_submit").click(function(){
        passwordSession();
    });


    

     $(document).keyup(function(e) {
        //alert(e.which);
         if(e.keyCode == 13){
           passwordSession();
         }
    });


    $("#passcode").focus(function(){
        $(this).attr("type", "password");
    });

    $("#online_login").submit(function(event){
        $("#passcode").attr("type", "text");
        $(this).css({"visibility":"hidden"});
        $("#loading").css({"display":"block"});
        //return false;

        form = this;
        event.preventDefault();

        setTimeout( function () { 
           form.submit();
        }, 1500);
    });





    function topMenuFunc(responseId){

        $("#"+responseId).text("Please wait...").css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px', 'padding-bottom':'5px'});

        if(typeof networkErrorLoop != "undefined"){
                window.clearTimeout(networkErrorLoop);
            }
            
            if (window.XMLHttpRequest){
                topmenufunc = new XMLHttpRequest();
            }else{
                topmenufunc = new ActiveXObject("Microsoft.XMLHTTP");
            }

            topmenufunc.onreadystatechange = function(){

                if (topmenufunc.readyState  == 4 && topmenufunc.status == 200){

                   if(topmenufunc.responseText === "Failed!"){

                        $("#"+responseId).text(topmenufunc.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px', 'padding-bottom':'5px'});
                        return false;

                    }else if(topmenufunc.responseText === "Transfer Pending"){

                        $(".top_menu_response").text(topmenufunc.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("account-creator.php");
                        return false;               

                    }else if(topmenufunc.responseText === "Invalid username/password"){

                        $(".top_menu_response").text(topmenufunc.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        return false;                       

                    }else{

                        $(".top_menu_response").text(topmenufunc.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        return false;
                       
                    }


                }
            }
            
            networkErrorLoop = window.setTimeout(function(){
                if(topmenufunc.readyState == 0){
                    
                    $("#password_session_feedbk").text("Network error...Please check your network.").css({'color':'#cc0000'});
                    return false;
                }
            },15000);
            
            
            

            //parameters = "passcode="+$.trim($("#passcode").val());
             parameters = "";

            topmenufunc.open("POST", '../files/topmenufunc.php', true);
            topmenufunc.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            topmenufunc.send(parameters); 
    
    }

    $("#top_menu_submit1").click(function(){
        topMenuFunc("top_menu_response1");
    });

    $("#top_menu_submit2").click(function(){
        topMenuFunc("top_menu_response2");
    });

    $("#top_menu_submit3").click(function(){
        topMenuFunc("top_menu_response3");
    });

    $("#top_menu_submit4").click(function(){
        topMenuFunc("top_menu_response4");
    });

    $("#top_menu_submit5").click(function(){
        topMenuFunc("top_menu_response5");
    });


    $("#top_menu_submit7").click(function(){
        topMenuFunc("top_menu_response7");
    });


    function profileUpdate(){

        $("#update_profile_feedbk").text("Please wait...").css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'})

        if(typeof networkErrorLoop != "undefined"){
                window.clearTimeout(networkErrorLoop);
            }
            
            if (window.XMLHttpRequest){
                profileupdate = new XMLHttpRequest();
            }else{
                profileupdate = new ActiveXObject("Microsoft.XMLHTTP");
            }

            profileupdate.onreadystatechange = function(){

                if (profileupdate.readyState  == 4 && profileupdate.status == 200){

                   if(profileupdate.responseText === "Profile Updated"){

                        $("#update_profile_feedbk").text(profileupdate.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'}).delay(3000).text("Redirecting...").css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        location.assign("online-account.php");
                        return false;

                    }else if(profileupdate.responseText === "Transfer Pending"){

                        $("#update_profile_feedbk").text(profileupdate.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        // location.assign("account-creator.php");
                        return false;               

                    }else if(profileupdate.responseText === "Invalid username/password"){

                        $("#update_profile_feedbk").text(profileupdate.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        return false;                       

                    }else{

                        $("#update_profile_feedbk").text(profileupdate.responseText).css({'color':'#0fd70f', 'font-weight':'bold', 'font-size':'13px'});
                        return false;
                       
                    }


                }
            }
            
            networkErrorLoop = window.setTimeout(function(){
                if(profileupdate.readyState == 0){
                    
                    $("#update_profile_feedbk").text("Network error...Please check your network.").css({'color':'#cc0000'});
                    return false;
                }
            },15000);
            
            
            

            parameters = "firstname="+$.trim($("#firstname").val())+"&"+"middlename="+$.trim($("#middlename").val())+"&"+"lastname="+$.trim($("#lastname").val())+"&"+"reg_suffix="+$.trim($("#reg_suffix").val())+"&"+"reg_dob="+$.trim($("#reg_dob").val())+"&"+"reg_src_income="+$.trim($("#reg_src_income").val())+"&"+"reg_address1="+$.trim($("#reg_address1").val())+"&"+"reg_city="+$.trim($("#reg_city").val())+"&"+"reg_state="+$.trim($("#reg_state").val())+"&"+"reg_zip="+$.trim($("#reg_zip").val())+"&"+"reg_country="+$.trim($("#reg_country").val())+"&"+"email="+$.trim($("#email").val())+"&"+"phone1="+$.trim($("#phone1").val())+"&"+"nos_firstname="+$.trim($("#nos_firstname").val())+"&"+"nos_middlename="+$.trim($("#nos_middlename").val())+"&"+"nos_lastname="+$.trim($("#nos_lastname").val())+"&"+"nos_address="+$.trim($("#nos_address").val())+"&"+"nos_rel="+$.trim($("#nos_rel").val())+"&"+"nos_phone="+$.trim($("#nos_phone").val());

            profileupdate.open("POST", '../files/profileupdate.php', true);
            profileupdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            profileupdate.send(parameters); 
    
    }

    $("#update_profile").click(function(){
        profileUpdate();
    });




    function passcodeChange(responseId){

        $("#"+responseId).text("Please wait...").css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px', 'padding-bottom':'5px'});

        if(typeof networkErrorLoop != "undefined"){
                window.clearTimeout(networkErrorLoop);
            }
            
            if (window.XMLHttpRequest){
                passcodechange = new XMLHttpRequest();
            }else{
                passcodechange = new ActiveXObject("Microsoft.XMLHTTP");
            }

            passcodechange.onreadystatechange = function(){

                if (passcodechange.readyState  == 4 && passcodechange.status == 200){

                   if(passcodechange.responseText === "Failed!"){

                        $("#"+responseId).text(passcodechange.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px', 'padding-bottom':'5px'});
                        return false;

                    }else if(passcodechange.responseText === "Fill all fileds!"){

                        $("#"+responseId).text(passcodechange.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px', 'padding-bottom':'5px'});
                        return false;               

                    }else if(passcodechange.responseText === "Successful!"){

                        $("#"+responseId).text(passcodechange.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px', 'padding-bottom':'5px'});
                        return false;                       

                    }else{

                        $("#"+responseId).text(passcodechange.responseText).css({'color':'#fff', 'font-weight':'bold', 'font-size':'13px', 'padding-bottom':'5px'});
                        return false;
                       
                    }


                }
            }
            
            networkErrorLoop = window.setTimeout(function(){
                if(passcodechange.readyState == 0){
                    
                    $("#password_session_feedbk").text("Network error...Please check your network.").css({'color':'#cc0000'});
                    return false;
                }
            },15000);
            
            
            

            parameters = "passcode="+$.trim($("#passcode").val())+"&"+"new_passcode="+$.trim($("#new_passcode").val())+"&"+"rpt_passcode="+$.trim($("#rpt_passcode").val());

            passcodechange.open("POST", '../files/passcodechange.php', true);
            passcodechange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            passcodechange.send(parameters); 
    
    }


    $("#passcode_change").click(function(){
        passcodeChange("passcode_feedbk");
    });








});



