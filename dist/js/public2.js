"use strict";window.onload=function(){$.cookie("userlog")&&($("#head-content .right li").eq(0).html($.cookie("userlog")),$("#head-content .right li").eq(1).html("<a href='login.html' class='exit'>退出</a>"))},$("#nav #nav-list li").eq(0).hover(function(){$("#nav-mark").css("display","block")},function(){$("#nav-mark").css("display","none")});