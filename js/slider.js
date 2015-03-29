/**
 * 
 * @Mozkoe (mozkoe@example.org)
 * @date    2015-03-28 19:49:05
 * @version $Id$
 */



$(document).ready(function(){
  
  $(".cell-container > .slider-item:first-child").css("left","0px");
  var current = [1,1,1,1];

  
  function leftu(){
    var next = [];
    for(var i = 0;i < 4;i++){
      next[i] = (current[i] % 2) + 1;
    }
    for(var i = 0;i < 4;i++){
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+next[i]+")").css("left","1050px");
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+current[i]+")").delay(i*80)
      .animate({left:'-1150px'},500);
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+next[i]+")").delay(i*80+300)
      .animate({left:'0px'},500);
    }
    current = next;
  }
  
  
  function leftd(){
    var next = [];
    for(var i = 0;i < 4;i++){
      next[i] = (current[i] % 2) + 1;
    }
    for(var i = 0;i < 4;i++){
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+next[i]+")").css("left","1050px");
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+current[i]+")").delay((4-i)*80)
      .animate({left:'-1150px'},500);
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+next[i]+")").delay((4-i)*80+300)
      .animate({left:'0px'},500);
    }
    current = next;
  }

  function cross(){
    var next = [];
    for(var i = 0;i < 4;i++){
      next[i] = (current[i] % 2) + 1;
    }
    
    for(var i = 0;i < 4;i++){
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+next[i]+")").css("left",(1050*Math.pow(-1,i))+"px");
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+current[i]+")")
        .animate({left:(1050*Math.pow(-1,i+1))+"px"},500);
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+next[i]+")").delay(100)
        .animate({left:'0px'},500);
    }
    current = next;
  }
  
  
  function sync(){
    var next = [];
    for(var i = 0;i < 4;i++){
      next[i] = (current[i] % 2) + 1;
    }
    for(var i = 0;i < 4;i++){
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+next[i]+")").css("left","1050px");
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+current[i]+")")
      .animate({left:'-1150px'},500);
      $(".slider-rows:nth-child("+(i+1)+") .slider-item:nth-child("+next[i]+")").delay(100)
      .animate({left:'0px'},500);
    }
    current = next;
  }
  
  var functions = [leftu,leftd,cross,sync,0];
  var time = setInterval(function(){
    if(!$(".slider-item").is(":animated")){
      functions[functions[4]]();
      functions[4] = (functions[4] + 1) % 4;
    }
  },4000);
  
  $(".btn").click(function(e){
    if(!$(".slider-item").is(":animated")){
      functions[4] = e.target.getAttribute("value")=="<"?Math.abs((functions[4]+3)%4):Math.abs((functions[4]+1)%4);
      functions[functions[4]]();
      clearInterval(time);
      time = setInterval(function(){
        if(!$(".slider-item").is(":animated")){
          functions[4] = (functions[4] + 1) % 4;
          functions[functions[4]]();
        }
      },4000);
    }
  });
  
    // 添加时间戳，强制浏览器load图片
    d = new Date();
    
    $(".cell img").each(function() {
    
    var temp_src = $(this).attr('src');
    var date_src = temp_src + '?' + d.getTime()
    $(this).attr('src',date_src);
    
    });
    
    
  
  // 图片居中
    $(".cell img").load(function(){
      
    if(this.clientWidth > this.clientHeight){
      this.style.height = "170px";
      this.style.left = ((this.clientWidth - 170) / -2) + "px";
    }else{
      this.style.width = "170px";
      this.style.top = ((this.clientHeight - 170) / -2) + "px";
    
    }
  });
    
    
  // $(".cell img").each(function(){
    
  //   if(this.clientWidth > this.clientHeight){
  //     this.style.height = "170px";
  //     this.style.left = ((this.clientWidth - 170) / -2) + "px";
  //   }else{
  //     this.style.width = "170px";
  //     this.style.top = ((this.clientHeight - 170) / -2) + "px";
    
  //   }
  // });
  
  
});


