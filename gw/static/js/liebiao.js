/**
 * Created by mingming on 2018/9/2.
 */


// iframe 自适应高度

function setIframeHeight(iframe) {
	if(iframe) {
		var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
		if(iframeWin.document.body) {
			iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
		}
	}
};
// 0为不开启滚动条，开启自适应高度
// 1为开启滚动条，关闭高度自适应
var scroll = 1 ;


if( scroll==0){
	window.onload = function() {
		setIframeHeight(document.getElementById('liebiao'));
	};
}else{
	// 有滚动条时
	document.getElementById("liebiao").style.scrolling="yes";
}