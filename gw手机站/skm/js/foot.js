/**
 * Created by Administrator on 2018\11\28 0028.
 */
//��ҳ��Ԫ�ؽ������������е�js



var header_info = document.getElementsByClassName("header-info")[0];
console.log(header_info);
// header_info.innerHTML="<span>����򰲿���ҽԺ</span><span>�𿵻���Ժ</span><span>�����깫Ԣ</span>";
// document.getElementsByClassName("header-info")[0].innerHTML="<span>����򰲿���ҽԺ</span><span>�𿵻���Ժ</span><span>�����깫Ԣ</span>";
var headerinf = document.getElementById("headerinfo");
 headerinf.innerHTML = "<span>����򰲿���ҽԺ</span><span>�𿵻���Ժ</span><span>�����깫Ԣ</span>";

document.getElementsByClassName("bcc_banner_c")[0].innerHTML="" +
    '<li><a href="http://m.lhwayy.com/./skm/html/aboutus.html" target="_blank"><img src="http://m.lhwayy.com/skm/img/banner1_1.png"></a></li> '+
    '<li><a href="http://m.lhwayy.com/skm/dongtai/xinwen/18/4/1123.html" target="_blank"><img src="http://m.lhwayy.com/skm/img/bannerjq.png"></a></li>' +
    '<li><a href="http://m.lhwayy.com/skm/dongtai/xinwen/18/4/1121-2.html" target="_blank"><img src="http://m.lhwayy.com/skm/img/bannersk.png"></a></li>' +
    '<li><a href="http://m.lhwayy.com/./skm/html/aboutus.html" target="_blank"><img src="http://m.lhwayy.com/skm/img/wananyanglao.jpg"></a></li>';

/**  ����ͼƬ�������ֲ�ͼ  */
TouchSlide({ slideCell:"#bcc_banner",titCell:'.bcc_banner_b',mainCell:'.bcc_banner_c',autoPage:'<span></span>',effect:'leftLoop',delayTime:400,interTime:5000,autoPlay:false,titOnClassName:'active'});


