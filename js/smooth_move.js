/**
 * 
 * @Mozkoe (Mozkoe@example.org)
 * @date    2015-05-06 22:07:49
 * @version $0.2$
 */

$(function(){


  function setSize(v,i,a){  //正在遍历的元素的值，序号，类数组对象
    var bottom = window.scrollY + document.documentElement.clientHeight - v.offsetTop;  //滚轮高度 + 窗口可视高度 - 
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var ch;
    var imgheight = (1080 / (1920 / width));

    if(imgheight > (height - (height-v.clientHeight)*0.1)){  //图片适应窗口缩放后的高度 > 图片滚动不出现黑边的最小高度
      v.style.backgroundSize = width + "px auto";
      ch = height - imgheight + ((v.clientHeight) * 0.1) - (height - imgheight)*0.1/2;  //图片底部和视窗底部重合 +
    }else{
      v.style.backgroundSize = "auto " + (height - (height-v.clientHeight)*0.1) + "px";
      ch = height - (height - (height-v.clientHeight)*0.1) + ((v.clientHeight) * 0.1);
    }
    v.style.backgroundPosition = "50% " + (-0.1*(bottom) + ch) + "px"; // -0.1*bottom 补偿图片上移的高度
  }

  document.onreadystatechange = function() {
    var $ = function(x){return document.querySelectorAll(x)};
    window.addEventListener("resize",function(e){
      [].forEach.call($(".activebg"),setSize)
    },false);
      [].forEach.call($(".activebg"),setSize); //监听


    window.addEventListener("scroll",function(e){
      [].forEach.call($(".activebg"),setSize);
      // console.log("50% "+ (window.scrollY - 500) + "px");
      // var images = [ $(".bg_1")[0],$(".bg_2")[0],$(".bg_3")[0],$(".bg_4")[0] ];
      // images.forEach(setSize);
    });
  }


});