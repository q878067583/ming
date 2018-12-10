/**
 * Created by Administrator on 2018\11\28 0028.
 */
//当页面元素解析结束后运行的js



var header_info = document.getElementsByClassName("header-info")[0];
console.log(header_info);
// header_info.innerHTML="<span>漯河万安康复医院</span><span>金康护理院</span><span>万安老年公寓</span>";
// document.getElementsByClassName("header-info")[0].innerHTML="<span>漯河万安康复医院</span><span>金康护理院</span><span>万安老年公寓</span>";
var headerinf = document.getElementById("headerinfo");
 headerinf.innerHTML = "<span>漯河万安康复医院</span><span>金康护理院</span><span>万安老年公寓</span>";

document.getElementsByClassName("bcc_banner_c")[0].innerHTML="" +
    '<li><a href="http://m.lhwayy.com/./skm/html/aboutus.html" target="_blank"><img src="http://m.lhwayy.com/skm/img/banner1_1.png"></a></li> '+
    '<li><a href="http://m.lhwayy.com/skm/dongtai/xinwen/18/4/1123.html" target="_blank"><img src="http://m.lhwayy.com/skm/img/bannerjq.png"></a></li>' +
    '<li><a href="http://m.lhwayy.com/skm/dongtai/xinwen/18/4/1121-2.html" target="_blank"><img src="http://m.lhwayy.com/skm/img/bannersk.png"></a></li>' +
    '<li><a href="http://m.lhwayy.com/./skm/html/aboutus.html" target="_blank"><img src="http://m.lhwayy.com/skm/img/wananyanglao.jpg"></a></li>';

/**  更换图片后重置轮播图  */
TouchSlide({ slideCell:"#bcc_banner",titCell:'.bcc_banner_b',mainCell:'.bcc_banner_c',autoPage:'<span></span>',effect:'leftLoop',delayTime:400,interTime:5000,autoPlay:false,titOnClassName:'active'});


