/**
 * 
 * @Mozkoe (Mozkoe@example.org)
 * @date    2015-05-06 22:07:49
 * @version $0.3$
 */

  function setSize(v,i,a){
    var bottom = $(window).scrollTop() + document.documentElement.clientHeight - v.offsetTop;
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var imgheight = (1080 / (1920 / width));
    var outScrHeight = (height-v.clientHeight) * 0.1;
    var inScrHeight = (v.clientHeight) * 0.1;
    var ch;
    
    if(imgheight > (height - outScrHeight)){
      v.style.backgroundSize = width + "px auto";
      ch = height - imgheight + inScrHeight - (height - (imgheight + (outScrHeight)))*0.1/2;
    }else{
      v.style.backgroundSize = "auto " + (height - outScrHeight) + "px";
      ch = height - (height - outScrHeight) + inScrHeight;
    }
    v.style.backgroundPosition = "50% " + (-0.1*bottom + ch) + "px";
  }

  document.onreadystatechange = function(e) {
    if(document.readyState != "interactive"){
      return;
    }

    //img auto scale and scroll
    var $ = function(x){return document.querySelectorAll(x)};
    var $s = function(x){return document.querySelector(x)};
    var $id = function(x){return document.getElementById(x)};

    window.addEventListener("resize",function(e){
      [].forEach.call($(".activebg"),setSize)
    },false);
    
    [].forEach.call($(".activebg"),setSize);
    
    window.addEventListener("scroll",function(e){
      [].forEach.call($(".activebg"),setSize);
    });



    // Smooth Scrolling
    var scroll = {wheelTimes:0,scrollTimes:0,pixelsToScroll:0,speed:0,interval:0};
    if((localStorage["enable_smooth_scrolling"] == "true" && localStorage["enable_smooth_scrolling_expire"] != "" && new Date().getTime() < parseInt(localStorage["enable_smooth_scrolling_expire"])) || navigator.userAgent.toUpperCase().indexOf("TRIDENT") != -1){
      enableSmoothScroll();
      window.addEventListener("wheel",smoothScroll,false);
    }else{
      window.addEventListener("wheel",countWheelTimes,false);
      window.addEventListener("scroll",countScrollTimes,false);
    }

    function countWheelTimes(){
      scroll.wheelTimes++;
      if(scroll.wheelTimes == 2){
        setTimeout(function(){
          window.removeEventListener("wheel",countWheelTimes,false);
          window.removeEventListener("scroll",countScrollTimes,false);
          if(scroll.scrollTimes < 4){
            //enable smooth scrolling
            enableSmoothScroll();
            window.addEventListener("wheel",smoothScroll,false);
            localStorage["enable_smooth_scrolling"] = "true";
            localStorage["enable_smooth_scrolling_expire"] = (new Date().getTime() + 7200000).toString();

          }
        },130);
      }
    }

    function countScrollTimes(){
      scroll.scrollTimes++;
    }

    function enableSmoothScroll(){
      scroll.interval = setInterval(function(){
        window.scrollBy(0,scroll.speed);
        if(scroll.speed > 0){
          scroll.speed -= 1;
        }else if(scroll.speed < 0){
          scroll.speed += 1;
        }
      },18);
    }

    function smoothScroll(e){
      e.preventDefault();
      var delta;
      if(e.deltaY > 0){
        delta = 1;
      }else{
        delta = -1;
      }
      scroll.speed += 16 * delta - Math.floor(scroll.speed * 0.3);
    }
  }