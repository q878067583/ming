// JavaScript Document
$(function(){
	/*首页*/
	$(".ind_aa_mid2 li").click(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".ind_aa_mid3").hide().eq(index).show();
	});
	$(".ind_aa_mid1 li").click(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".ind_aa_mid4").hide().eq(index).show();
	});
	$(".ind_aa_right4 li").click(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".ind_aa_right3").hide().eq(index).show();
	});
	$(".ind_zj2 li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".ind_zj3_left").hide().eq(index).show();
	});
	$(".ind_zq_left li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".ind_zq_mid").hide().eq(index).show();
	});
	$(".ind_yasp1 li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".ind_yasp2").hide().eq(index).show();
	});
	$(".ind_ry li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".ind_ry1").hide().eq(index).show();
	});
	
	$(".ind_yasp2_bb_right li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".ind_yasp2_bb_left").hide().eq(index).show();
	});
	/*首页*/
	/*专家团队页*/
	$(".zjtd2_bb li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".zjtd2_cc_left").hide().eq(index).show();
	});
	/*专家团队页*/
	/*栏目页*/
	$(".lm_tj_bb_top li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".lm_tj_bb_bot").hide().eq(index).show();
	});
	/*栏目页*/
	/*就诊指南*/
	$(".jyzn8 li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
          $(".jyzn9").hide().eq(index).show();
	});
	/*就诊指南*/
});
