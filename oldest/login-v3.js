/**
 * 登录不刷新页面
 */
! function($, undefined) {
	Union = window.Union || {}, Array.prototype.indexOf = function(n) {
		for(var o = 0, s = this.length; o < s; o++)
			if(this[o] === n) return o;
		return -1
	}, Union.logFn = {
		thirdPartyParms: {
			url: '',
			w: '',
			h: ''
		},
		getPassUrl: "//web.7k7k.com/user/find_passport.php",
		getkkUrl: "//zc.7k7k.com/get_pre_kk?callback=",
		chkNameUrl: "//web.7k7k.com/source/Post_pay.php",
		doLogUrl: "//web.7k7k.com/source/Post_pay.php",
		cssUrl: "//n.7k7kimg.cn/uploads/cdn/api/loginPlus/css/logFn.min.css?v=0.2.9",
		idcardUrl: "//web.7k7k.com/api/getsq_fcm.php",
		idcardPro: "//web.7k7k.com/api/getrname_id.php?callback=",
		checkBj: "http://api.h5.7k7k.com/tools/ip",
		logDomId: "#union",
		doMain: ["web.7k7k.com", "g.7k7k.com", "pay.web.7k7k.com", "webpay.7k7k.com"],
		remName: 0,
		isCheck: 0,
		callBacks: "",
		gVaildIdcard: 1,
		rightTips: 1,
		msg: ["这是系统自动分配给你的kk号", "4-32位数字、字母、或组合", "6-32位数字、字母、_或组合", "两次密码不一致", "用户名已被注册", "用户名可以使用", "上次使用QQ登陆", "上次使用微信登陆", "上次使用账号登陆", "身份证上的姓名", "身份证号码", "真实姓名为2-12个汉字", "身份证号码为15或18位数字", "注册失败，你还是未成年！", "","请先浏览《7k7k用户服务协议》"],
		userInfo: {
			name: "",
			pass: "",
			status: 0
		},
		defaults: {
			autokk: 0,
			qqLogId: 11715896,
			wxLogId: 14388865,
			qqlogType: "qqlogin",
			qqlogCallback: encodeURIComponent(location.href),
			logAction: 0,
			logedCallUrl: location.href,
			regAction: 0,
			showSave: 1,
			saveInfo: "//web.7k7k.com/api/7k7ktxt.php?",
			refer: 3841,
			isVaildIdcard: 1
		},
		loginRefreshPage:false,
		getRealname: function() {
			$.ajax({
				type: "get",
				url: Union.logFn.idcardPro,
				dataType: "jsonp",
				success: function(n) {
					$(".un_mod_reg .un_tips.rrname").html("国家防沉迷法规要求,请填写真实姓名"), $(".un_mod_reg .un_tips.rrnum").html("此处应填写身份证号码"), Union.logFn.defaults.rname = n.rname, Union.logFn.defaults.idcard = n.idcard
				}
			})
		},
		checkIp: function(o) {
			$.ajax({
				type: "get",
				url: Union.logFn.checkBj,
				async: !1,
				data: {},
				dataType: "jsonp",
				success: function(n) {
					200 === n.errcode && "bj" === n.errmsg && (o ? ($("#union .rrname,#union .rrnum").show(), Union.logFn.gVaildIdcard = 1, $(".davied").hide()) : ($("#union .rrname,#union .rrnum").hide(), Union.logFn.gVaildIdcard = 0, $(".davied").show()))
				}
			})
		},
		toggleUi: function(n) {
			var o = $(this.logDomId + " .un_tabs a");
			if($(this.logDomId + " .un_tabs a.cur").index(), o.removeClass("cur"), o.eq(n).addClass("cur"), $(".un_mod_log .un_tips,.un_mod_reg .un_tips").html("").removeClass("no yes"), $(".un_msg .logs").show(), $(".un_msg .saves").hide(), $(".un_mod_save").hide(), Union.logFn.resetHack(), 0 == n) {
				$(".un_mod_log").show(), $(".un_mod_reg").hide(), $(".un_tabs span").animate({
					left: "168px"
				}, 150);
				var s = $(this.logDomId).height() / 2;
				$(this.logDomId).animate({
					"margin-top": "-" + s + "px"
				}, 250)
			} else Union.logFn.defaults.autokk && Union.logFn.autoKk(), $(".un_mod_log").hide(), $(".un_mod_reg").show(), $(".un_mod_reg .un_tips.rpass").html("长度为6-32个字符，区分大小写").removeClass("no yes"), $(".un_tabs span").animate({
				left: "277px"
			}, 150), $(Union.logFn.logDomId + " #un_rname").bind("blur", function() {
				this.value ? Union.logFn.checkName(this.value) : $(".un_mod_reg .un_tips.rname").html(Union.logFn.msg[1]).addClass("no")
			}), 1 == Union.logFn.defaults.isVaildIdcard && $.ajax({
				type: "post",
				url: Union.logFn.idcardUrl,
				async: !1,
				data: {},
				dataType: "jsonp",
				success: function(n) {
					1 == n.status ? ($("#union .rrname,#union .rrnum").show(), Union.logFn.gVaildIdcard = 1, $(".davied").hide()) : ($("#union .rrname,#union .rrnum").hide(), Union.logFn.gVaildIdcard = 0, $(".davied").show()), Union.logFn.checkIp(n.status_bj), Union.logFn.getRealname()
				}
			}), 0 == Union.logFn.defaults.isVaildIdcard && 1 == Union.logFn.gVaildIdcard && ($("#union .rrname,#union .rrnum").show(), Union.logFn.getRealname()), 0 == Union.logFn.defaults.isVaildIdcard && 1 == Union.logFn.gVaildIdcard && $("#union .rrname,#union .rrnum").show(), 2 == Union.logFn.defaults.isVaildIdcard && 1 == Union.logFn.gVaildIdcard && ($("#union .rrname,#union .rrnum").hide(), Union.logFn.getRealname()), setTimeout(function() {
				var n = $(Union.logFn.logDomId).height() / 2;
				$(Union.logFn.logDomId).animate({
					"margin-top": "-" + n + "px"
				}, 250)
			}, 50)
		},
		config: function(n) {
			$.extend(Union.logFn.defaults, n)
		},
		init: function() {
//			-1 !== this.doMain.indexOf(location.host) ?
			(this.addCSS(Union.logFn.cssUrl), logHtml =
			'<IFRAME id=union_mask src="about:blank" frameBorder=no style="display:none;filter:alpha(opacity=50);"></IFRAME>\t\t<div class="union_warp" id="union" style="display:none">\t\t\t<div class="un_con">\t\t\t\t<div class="un_tit">\t\t\t\t\t<a href="//www.7k7k.com" target="_blank" class="un_logo"></a>\t\t\t\t\t<div class="un_tabs">\t\t\t\t\t\t<a href="javascript:;" target="_self" class="cur">用户登录</a>\t\t\t\t\t\t<a href="javascript:;" target="_self">用户注册</a>\t\t\t\t\t\t<span></span>\t\t\t\t\t</div>\t\t\t\t\t<a href="javascript:;" class="un_close" target="_self"></a>\t\t\t\t</div>\t\t\t\t<div class="un_login">\t\t\t\t\t<div class="un_inps un_mod_log">\t\t\t\t\t\t<div class="un_inp name">\t\t\t\t\t\t\t<span>用户名&nbsp;:</span>\t\t\t\t\t\t\t<input type="text" id="un_name" value="用户名/邮箱/KK号" placeholder="用户名/邮箱/KK号" />\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="un_tips name"></div>\t\t\t\t\t\t<div class="un_inp pass">\t\t\t\t\t\t\t<span>密　码&nbsp;:</span>\t\t\t\t\t\t\t<input type="password" id="un_pass" value="" />\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="un_tips pass"></div>\t\t\t\t\t\t<div class="un_rem"><span class="un_check" style="background:url(//n.7k7kimg.cn/uploads/cdn/api/loginPlus/img/chk_1.png) no-repeat;"></span><span class="un_lable">记住登录账号</span> <a href="//web.7k7k.com/user/find_passport.php" target="_blank" class="un_lose_pass">忘记密码?</a><div class="un_rem2" style="margin: 20px 0 0 0;"> <a class="un_check2"  target="_self" style="background:url(//n.7k7kimg.cn/uploads/cdn/api/loginPlus/img/chk_1.png) no-repeat;"></a><a href="//www.7k7k.com/html/duty.htm" target="_blank" class="un_lose_pass" style=" margin-left: 5px; float: left;">已阅读《用户服务协议》</a> </div><div class="clear"></div><div class="clear"></div></div>\t\t\t\t\t\t<div class="un_btns">\t\t\t\t\t\t\t<a href="javascript:;" class="un_btns_log" target="_self">登录</a>\t\t\t\t\t\t\t<a href="javascript:;" class="un_btns_reg" target="_self">注册</a>\t\t\t\t\t\t\t<div class="clear"></div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t\t<div class="un_inps un_mod_reg">\t\t\t\t\t\t<div class="un_inp rname">\t\t\t\t\t\t\t<span>用户名&nbsp;:</span>\t\t\t\t\t\t\t<input type="text" id="un_rname" value="" placeholder="' +
           Union.logFn.msg[1] + '" />\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="un_tips rname"></div>\t\t\t\t\t\t<div class="un_inp rpass">\t\t\t\t\t\t\t<span>密　码&nbsp;:</span>\t\t\t\t\t\t\t<input type="password" id="un_rpass" value="" />\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="un_tips rpass"></div>\t\t\t\t\t\t<div class="un_inp surePass rpass">\t\t\t\t\t\t\t<span>确认密码&nbsp;:</span>\t\t\t\t\t\t\t<input type="password" id="un_repass" value="" />\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="un_tips repass"></div>\t\t\t\t\t\t<div class="un_inp rrname" style="display: none">\t\t\t\t\t\t\t<span>姓　名&nbsp;:</span>\t\t\t\t\t\t\t<input type="text" id="un_rrname" value="" />\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="un_tips rrname" style="display: none"></div>\t\t\t\t\t\t<div class="un_inp rrnum" style="display: none">\t\t\t\t\t\t\t<span>身份证&nbsp;:</span>\t\t\t\t\t\t\t<input type="text" id="un_rrnum" value="" />\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="un_tips rrnum" style="display: none"></div>\t\t\t\t\t\t<div class="un_rem">\t\t\t\t\t\t\t<span class="un_check"></span>\t\t\t\t\t\t\t<a href="//www.7k7k.com/html/duty.htm" target="_blank" class="un_lose_pass">已阅读《用户服务协议》</a>\t\t\t\t\t\t\t<div class="clear"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="un_btns">                           \t\t\t\t\t\t\t<a href="javascript:;" class="un_btns_regl" target="_self">注册</a>\t\t\t\t\t\t\t<div class="clear"></div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t\t<div class="un_inps un_mod_save">\t\t\t\t\t\t<p class="save_tit">注册成功！</p>\t\t\t\t\t\t<div class="save_info">\t\t\t\t\t\t\t<div class="savediv save_name">\t\t\t\t\t\t\t\t<span class="sdtit">用户名:</span>\t\t\t\t\t\t\t\t<span class="nameTxt"></span>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class="savediv save_pass">\t\t\t\t\t\t\t\t<span class="sdtit">密码:</span>\t\t\t\t\t\t\t\t<span class="passTxt"></span>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<p class="saveTxt">赶紧拿笔记下，或<a href="">保存至桌面</a></p>\t\t\t\t\t\t<div class="un_btns">\t\t\t\t\t\t\t<a href="javascript:;" target="_self" class="un_btns_done">完成</a>\t\t\t\t\t\t\t<div class="clear"></div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t\t<div class="un_msg">\t\t\t\t\t\t<div class="logs">\t\t\t\t\t\t\t<a href="javascript:;" target="_self" class="un_log_qq"></a>\t\t\t\t\t\t\t<a href="javascript:;" target="_self" class="un_log_wx"></a>\t\t\t\t\t\t\t<p class="un_logName"></p>\t\t\t\t\t\t\t<p class="un_logInfo"></p>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="saves">\t\t\t\t\t\t\t<p class="tipst">温馨提示</p>\t\t\t\t\t\t\t<p class="tipTxt">为抵御盗号风险，90%的用户都会选择<a target="_blank" href="//web.7k7k.com/user/index.php">设置密码保护</a></p>\t\t\t\t\t\t</div>\t\t\t\t\t<p style="text-align: center;font-size: 12px;color: #ef0000;padding: 10px 0;"></p><div style="text-align: center;font-size: 12px;color: #ef0000;"></div></div>\t\t\t\t\t<div class="clear"></div>\t\t\t\t</div>\t\t\t</div>\t\t\t<div class="un_bot"></div>\t\t</div>',
		   	 $("body").append(logHtml), Union.logFn.showName(), $(".un_mod_log .un_inp input").bind("keypress", function(n) {
				13 == (n = n || event).keyCode && Union.logFn.doLog()
			}), $(".un_mod_reg .un_inp input").bind("keypress", function(n) {
				13 == (n = n || event).keyCode && Union.logFn.doReg()
			}), Union.logFn.doRegTips())
			//: window.document.domain = Union.logFn.doMain, $("#union .un_mod_reg .rrname span, #union .un_mod_reg .rrnum span").css("background", "url(//n.7k7kimg.cn/uploads/cdn/api/star.png) no-repeat 8px center")
			$("#union .un_mod_reg .rrname span, #union .un_mod_reg .rrnum span").css("background", "url(//n.7k7kimg.cn/uploads/cdn/api/star.png) no-repeat 8px center")
			//添加三方登录确认
			var thirdPartyConfirmDom =
				'<div class="thirdParty_confirm" id="thirdParty_confirm" style="display:none;position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 9999999;">' +
				'<div class="thirdParty_bg" style="position: absolute; top: 0;left: 0;right: 0;bottom: 0;background-color:#000;-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;filter:alpha(opacity=50)"></div>' +
				'<div class="thirdParty_box" style="position: absolute;top: 50%;left: 50%;width: 320px;height: 200px;margin-left: -160px;margin-top: -100px;background: #fff;box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);    border-radius: 10px;">' +
				'<h1 class="thirdParty_title" style="padding:0;margin:0;color: #000;font-size: 18px;line-height: 24px;font-weight: 400;padding: 16px 24px;text-align: center;border-bottom: 1px solid #f0f0f0;">登录提示</h1>' +
				'<p class="thirdParty_content"  style="padding:0;margin:0;color: #000;line-height: 22px;font-size: 14px;padding: 24px;">' +
				'<span>使用第三方登录，需要您阅读并同意：</span>' +
				'<a style="color: #1278c0;" href="http://www.7k7k.com/html/duty.htm" target="_blank">《7k7k用户服务协议》</a>' +
				'<span>(含隐私政策)</span>' +
				'</p>' +
				'<div class="thirdParty_btns" style="padding: 8px 16px;text-align: right;border-top: 1px solid #f0f0f0;font-size: 10px;">' +
				'<span class="no" style="line-height: 1.5715;position: relative;display: inline-block;font-weight: 400;white-space: nowrap;text-align: center;display: inline-block;border-radius: 4px;cursor: pointer;border: 1px solid #d9d9d9;color: #000000d9;background: #fff;height: 24px;padding: 4px 15px;font-size: 14px;border-radius: 2px;margin-left: 10px;">暂不</span>' +
				'<span class="yes" style="line-height: 1.5715;position: relative;display: inline-block;font-weight: 400;white-space: nowrap;text-align: center;display: inline-block;border-radius: 4px;cursor: pointer;color: #000000d9;background: #ff7b2b;height: 24px;padding: 4px 15px;font-size: 14px;border-radius: 2px;margin-left: 10px;color: #fff;border: 0;">同意</span>' +
				'</div>' +
				'</div>' +
				'</div>';
			$("body").append(thirdPartyConfirmDom);
			$('.thirdParty_btns .no').on('click', function () {
				$('.thirdParty_confirm').hide()
			})
			$('.thirdParty_btns .yes').on('click', function () {
				Union.logFn.thirdLogin({
					url: Union.logFn.thirdPartyParms.url,
					w: Union.logFn.thirdPartyParms.w,
					h: Union.logFn.thirdPartyParms.h
				})
				$('.thirdParty_confirm').hide()
			})
		},
		open: function(n) {
			var o = $(this.logDomId).height() / 2;
			$(".un_mod_log .un_tips,.un_mod_reg .un_tips").html("").removeClass("no yes"), $(this.logDomId + "_mask").fadeIn().css({
				display: "block"
			}), $(this.logDomId).show().animate({
				top: "50%",
				opacity: "1",
				"margin-top": "-" + o + "px"
			}, 150), Union.logFn.readCookie("username") || Union.logFn.readCookie("k7_username") || Union.logFn.toggleUi(1), "function" == typeof n && (Union.logFn.callBacks = n)
		},
		close: function() {
			$(this.logDomId).animate({
				top: "-100%",
				opacity: "0"
			}, 150, function() {
				$(this).hide(), $(Union.logFn.logDomId + "_mask").fadeOut()
			}), Union.logFn.toggleUi(0)
		},
		addCSS: function(n) {
			var o = document.createElement("link");
			o.type = "text/css", o.rel = "stylesheet", o.href = n, document.getElementsByTagName("head")[0].appendChild(o)
		},
		addJS: function(n) {
			var o = document.getElementsByTagName("HEAD").item(0),
				s = document.createElement("script");
			s.type = "text/javascript", s.src = n, o.appendChild(s)
		},
		doLog: function() {
			if( $('.un_check2')[0].className==="un_check2"){
			var o = $("#un_name").val(),
				s = $("#un_pass").val(),
				n = Union.logFn.remName;
			Union.logFn.resetHack(), $(".un_mod_log .un_tips").html("").removeClass("yes no"), o && /^[a-zA-Z0-9][a-zA-Z0-9_.@]{3,32}$/.test(o) ? ($(".un_mod_log .un_tips.name").html("").removeClass("no yes"), s && /[\s|\S]{6,32}/.test(s) ? (Union.logFn.ieHack(), $(".un_mod_log .un_tips.pass").html("正在登录···").removeClass("no yes").addClass("yes"), $.ajax({
				type: "post",
				url: Union.logFn.doLogUrl,
				data: {
					username: o,
					password: s,
					auto: n,
					formtype: "index_log"
				},
				dataType: "jsonp",
				success: function(n) {
					if(1 == n.status) {
						switch(Union.logFn.defaults.logAction) {
							case 0:
								location.reload();
								/*Union.logFn.close();
								$('.login_unames').text(Union.logFn.readCookie('nickname'));
								$('.header .login_already').show();
								$('.header .login_no').hide();
								play22.fcmCheck();*/
								break;
							case 1:
								location.href = Union.logFn.defaults.logedCallUrl;
								break;
							case 2:
								Union.logFn.getUserInfo({
									name: o,
									pass: s,
									status: 1
								}), Union.logFn.close()
						}
						"function" == typeof Union.logFn.callBacks && Union.logFn.callBacks()
					} else {
						if (n.info == '未成年人游戏登录限制') {
							//location.reload();
							Union.logFn.close();
							$('.login_unames').text(Union.logFn.readCookie('nickname'));
							$('.header .login_already').show();
							$('.header .login_no').hide();
							play22.fcmCheck();
						}
						$(".un_mod_log .un_tips.pass").html(n.info).addClass("no"), Union.logFn.ieHack()
					}
				}
			})) : ($(".un_mod_log .un_tips.pass").html(Union.logFn.msg[2]).addClass("no"), Union.logFn.ieHack())) : ($(".un_mod_log .un_tips.name").html(Union.logFn.msg[1]).addClass("no"), Union.logFn.ieHack())
		}else{
			$(".un_mod_log .un_tips.pass").html(Union.logFn.msg[15]).addClass(
			  "no")
		  }
		},
		runReg: function() {
			var o = $("#un_rname").val(),
				s = $("#un_rpass").val(),
				n = $("#un_repass").val(),
				e = $("#un_rrname").val(),
				a = $("#un_rrnum").val();
			$(".un_mod_reg .un_tips").html("").removeClass("no yes"), $(".un_mod_reg .un_tips.repass").html("正在注册···"), $.ajax({
				type: "post",
				url: Union.logFn.doLogUrl,
				data: {
					name: o,
					password: s,
					repassword: n,
					rname: e,
					idcard: a,
					formtype: "registerform",
					from: Union.logFn.defaults.refer
				},
				dataType: "jsonp",
				success: function(n) {
					if(1 == n.status) {
						if($.extend(Union.logFn.userInfo, {
								name: o,
								pass: s,
								status: 1
							}), 1 == Union.logFn.defaults.showSave) $(".un_mod_reg,.un_mod_save").toggle(), $(".un_msg .logs,.un_msg .saves").toggle(), $(".un_mod_save .nameTxt").html(o), $(".un_mod_save .passTxt").html(s), $(".un_mod_save .saveTxt a").attr({
							href: Union.logFn.defaults.saveInfo + "u=" + o + "&p=" + s
						}), $(".un_btns_done").bind("click", function() {
							switch(Union.logFn.defaults.regAction) {
								case 0:
									location.reload();
									break;
								case 1:
									location.href = Union.logFn.defaults.logedCallUrl;
									break;
								case 2:
									Union.logFn.close()
							}
						});
						else switch(Union.logFn.defaults.regAction) {
							case 0:
								location.reload();
								break;
							case 1:
								location.href = Union.logFn.defaults.logedCallUrl;
								break;
							case 2:
								Union.logFn.close()
						}
						"function" == typeof Union.logFn.callBacks && Union.logFn.callBacks(o)
					} else $(".un_mod_reg .un_tips.repass").html(n.info).addClass("no")
				}
			})
		},
		doReg: function() {
			if( $('.un_check')[1].className==="un_check"){
                $(".un_mod_reg .un_tips.rrnum").html("此处应填写身份证号码").className="un_tips rrnum"
			var n = $("#un_rname").val(),
				o = $("#un_rpass").val(),
				s = $("#un_repass").val(),
				e = $("#un_rrname").val(),
				a = $("#un_rrnum").val();
			if(n && /^[a-zA-Z0-9][a-zA-Z0-9_]{4,32}$/.test(n)) {
				if(Union.logFn.checkName(n), Union.logFn.isCheck)
					if(o && /[\s|\S]{6,32}/.test(o))
						if(s === o)
							if("block" == $(".davied").css("display") && (Union.logFn.gVaildIdcard = e || a ? 1 : 0), 1 == Union.logFn.defaults.isVaildIdcard && 1 == Union.logFn.gVaildIdcard || 0 == Union.logFn.defaults.isVaildIdcard && 1 == Union.logFn.gVaildIdcard)
								if(e && /^[\u4e00-\u9fa5]{2,12}$/.test(e)) {
									if("李四" == e) return $(".un_mod_reg .un_tips.rrname").html("请填写自己的真实姓名！").addClass("no"), !1;
									a && /\d{18}|\d{15}/.test(a) ? "440106198101010155" == a ? $(".un_mod_reg .un_tips.rrnum").html("请填写自己的身份证号！").addClass("no") : 1 == (i = Union.logFn.isCardID(a)).status ? Union.logFn.runReg() : $(".un_mod_reg .un_tips.rrnum").html(i.info).addClass("no") : $(".un_mod_reg .un_tips.rrnum").html(Union.logFn.msg[12]).addClass("no")
								} else $(".un_mod_reg .un_tips.rrname").html(Union.logFn.msg[11]).addClass("no");
				else if(2 == Union.logFn.defaults.isVaildIdcard && 1 == Union.logFn.gVaildIdcard)
					if(e)
						if(/^[\u4e00-\u9fa5]{2,12}$/.test(e)) {
							if("李四" == e) return $(".un_mod_reg .un_tips.rrname").html("请填写自己的真实姓名！").addClass("no"), !1;
							var i;
							a ? /\d{18}|\d{15}/.test(a) ? "440106198101010155" == a ? $(".un_mod_reg .un_tips.rrnum").html("请填写自己的身份证号！").addClass("no") : 1 == (i = Union.logFn.isCardID(a)).status ? Union.logFn.runReg() : $(".un_mod_reg .un_tips.rrnum").html(i.info).addClass("no") : $(".un_mod_reg .un_tips.rrnum").html(Union.logFn.msg[12]).addClass("no") : Union.logFn.runReg()
						} else $(".un_mod_reg .un_tips.rrname").html(Union.logFn.msg[11]).addClass("no");
				else a ? /\d{18}|\d{15}/.test(a) ? "440106198101010155" == a ? $(".un_mod_reg .un_tips.rrnum").html("请填写自己的身份证号！").addClass("no") : 1 == (i = Union.logFn.isCardID(a)).status ? Union.logFn.runReg() : $(".un_mod_reg .un_tips.rrnum").html(i.info).addClass("no") : $(".un_mod_reg .un_tips.rrnum").html(Union.logFn.msg[12]).addClass("no") : Union.logFn.runReg();
				else Union.logFn.runReg();
				else $(".un_mod_reg .un_tips.repass").html(Union.logFn.msg[3]).addClass("no");
				else $(".un_mod_reg .un_tips.rpass").html(Union.logFn.msg[2]).addClass("no")
			} else $(".un_mod_reg .un_tips.rname").html(Union.logFn.msg[1]).addClass("no")
		}else{
			$(".un_mod_reg .un_tips.rrnum").html(Union.logFn.msg[15]).removeClass(
				"yes").addClass("no")
		  }
		},
		doRegTips: function() {
			$("#union #un_rname").bind("focus", function() {
				$(this).attr("placeholder")
			}), $("#union #un_rpass").bind("focus", function() {
				var n = $(this).attr("placeholder");
				$("#union .un_mod_reg .un_tips.rpass").removeClass("no yes").html(n)
			}), $("#union #un_repass").bind("focus", function() {
				$("#union .un_mod_reg .un_tips.repass").removeClass("no yes").html("再次输入密码")
			}), $("#union #un_rrname").bind("focus", function() {
				var n = "国家防沉迷法规要求,请填写真实姓名";
				$("#union .un_mod_reg .un_tips.rrname").removeClass("no yes").html(n)
			}), $("#union #un_rrnum").bind("focus", function() {
				var n = "此处应填写身份证号码";
				$("#union .un_mod_reg .un_tips.rrnum").removeClass("no yes").html(n)
			}), $("#union #un_rname").bind("blur keyup", function() {
				var n = $(this).val();
				n && /^[a-zA-Z0-9][a-zA-Z0-9_]{4,32}$/.test(n) ? Union.logFn.checkName(name) : $(".un_mod_reg .un_tips.rname").html(Union.logFn.msg[1]).removeClass("yes").addClass("no")
			}), $("#union #un_rpass").bind("blur keyup", function() {
				var n = $(this).val();
				n && /[\s|\S]{6,32}/.test(n) ? $(".un_mod_reg .un_tips.rpass").html("密码可用").removeClass("no").addClass("yes") : $(".un_mod_reg .un_tips.rpass").html(Union.logFn.msg[2]).removeClass("yes").addClass("no")
			}), $("#union #un_repass").bind("blur keyup", function() {
				var n = $(this).val();
				n ? $("#union #un_rpass").val() === n ? $(".un_mod_reg .un_tips.repass").html("密码一致").removeClass("no").addClass("yes") : $(".un_mod_reg .un_tips.repass").html(Union.logFn.msg[3]).removeClass("yes").addClass("no") : $(".un_mod_reg .un_tips.repass").html("请再次确认密码").removeClass("yes").addClass("no")
			}), $("#union #un_rrname").bind("blur keyup", function() {
				var n = $(this).val();
				n ? "李四" !== n ? /^[\u4e00-\u9fa5]{2,12}$/.test(n) ? $(".un_mod_reg .un_tips.rrname").html("姓名可用").removeClass("no").addClass("yes") : $(".un_mod_reg .un_tips.rrname").html(Union.logFn.msg[11]).removeClass("yes").addClass("no") : $(".un_mod_reg .un_tips.rrname").html("请填写自己的真实姓名！").removeClass("yes").addClass("no") : 2 == Union.logFn.defaults.isVaildIdcard && 1 == Union.logFn.gVaildIdcard ? $(".un_mod_reg .un_tips.rrname").html("").removeClass("no yes") : $(".un_mod_reg .un_tips.rrname").html("国家防沉迷法规要求,请填写真实姓名").removeClass("yes").addClass("no")
			}), $("#union #un_rrnum").bind("blur keyup", function() {
				var n = $(this).val(),
					o = Union.logFn.isCardID(n);
				n ? "440106198101010155" == n ? $(".un_mod_reg .un_tips.rrnum").html("请填写自己的身份证号！").removeClass("yes").addClass("no") : 1 == o.status ? $(".un_mod_reg .un_tips.rrnum").html("身份证号可用").removeClass("no").addClass("yes") : $(".un_mod_reg .un_tips.rrnum").html(o.info).removeClass("yes").addClass("no") : 2 == Union.logFn.defaults.isVaildIdcard && 1 == Union.logFn.gVaildIdcard ? $(".un_mod_reg .un_tips.rrnum").html("").removeClass("no yes") : $(".un_mod_reg .un_tips.rrnum").html("此处应填写身份证号码").removeClass("yes").addClass("no")
			})
		},
		isCardID: function(n) {
			var o = {
					11: "北京",
					12: "天津",
					13: "河北",
					14: "山西",
					15: "内蒙古",
					21: "辽宁",
					22: "吉林",
					23: "黑龙江",
					31: "上海",
					32: "江苏",
					33: "浙江",
					34: "安徽",
					35: "福建",
					36: "江西",
					37: "山东",
					41: "河南",
					42: "湖北",
					43: "湖南",
					44: "广东",
					45: "广西",
					46: "海南",
					50: "重庆",
					51: "四川",
					52: "贵州",
					53: "云南",
					54: "西藏",
					61: "陕西",
					62: "甘肃",
					63: "青海",
					64: "宁夏",
					65: "新疆",
					71: "台湾",
					81: "香港",
					82: "澳门",
					91: "国外"
				},
				s = 0,
				e = "ok",
				a = {};
			/^\d{17}(\d|x)$/i.test(n) || (e = "你输入的身份证长度或格式错误"), n = n.replace(/x$/i, "a"), null == o[parseInt(n.substr(0, 2))] && (e = "你的身份证地区非法"), sBirthday = n.substr(6, 4) + "-" + Number(n.substr(10, 2)) + "-" + Number(n.substr(12, 2));
			var i = new Date(sBirthday.replace(/-/g, "/")),
				l = new Date;
			sBirthday != i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() && (e = "身份证上的出生日期非法"), l.getFullYear(), parseInt(n.substr(6, 4));
			for(var t = 17; 0 <= t; t--) s += Math.pow(2, t) % 11 * parseInt(n.charAt(17 - t), 11);
			if(s % 11 != 1 && (e = "你输入的身份证号非法"), "ok" == e) {
				var r = o[parseInt(n.substr(0, 2))] + "|" + sBirthday + "|" + (n.substr(16, 1) % 2 ? "男" : "女");
				a.status = 1, a.info = r
			} else a.status = 0, a.info = e;
			return a
		},
		showName: function() {
			var n = $(".logs .un_logName"),
				o = $(".logs .un_logInfo");
			if("qq" == this.readCookie("loginfrom")) n.html(this.readCookie("nickname")), o.html(Union.logFn.msg[6]);
			else if("wx" == this.readCookie("loginfrom")) n.html(this.readCookie("nickname")), o.html(Union.logFn.msg[7]);
			else {
				var s = this.readCookie("username") ? this.readCookie("username") : this.readCookie("k7_username");
				n.html(s), $("#un_name").val(s), o.html(Union.logFn.msg[8])
			}
			Union.logFn.rightTips && o.html(Union.logFn.msg[14]).css("color", "red")
		},
		autoKk: function() {
			$.ajax({
				url: this.getkkUrl,
				type: "GET",
				dataType: "jsonp",
				success: function(json) {
					eval(json).kk && ($(".un_mod_reg #un_rname").val(eval(json).kk), $(".un_mod_reg .un_tips.rname").html(Union.logFn.msg[0]).removeClass("no").addClass("yes"), $(".un_mod_reg #un_rname").focus())
				}
			})
		},
		checkName: function(n) {
			$.ajax({
				type: "post",
				url: Union.logFn.chkNameUrl,
				data: {
					name: "name",
					param: n
				},
				dataType: "jsonp",
				success: function(n) {
					"y" == n.status ? ($(".un_mod_reg .un_tips.rname").html(Union.logFn.msg[5]).removeClass("no").addClass("yes"), Union.logFn.isCheck = 1) : ($(".un_mod_reg .un_tips.rname").html(Union.logFn.msg[4]).removeClass("yes").addClass("no"), Union.logFn.isCheck = 0)
				}
			})
		},
		rember: function(n) {
			var o = $(Union.logFn.logDomId + " .un_mod_" + n + " .un_rem .un_check").hasClass("no"),
				s = $(Union.logFn.logDomId + " .un_mod_" + n + " .un_rem .un_check");
			o ? (s.removeClass("no"), s.attr({
				style: "background:url(//n.7k7kimg.cn/uploads/cdn/api/loginPlus/img/chk_1.png) no-repeat;"
			})) : (s.addClass("no"), s.attr({
				style: "background:url(//n.7k7kimg.cn/uploads/cdn/api/loginPlus/img/chk_0.png) no-repeat;"
			}))
		},
		rember_fcm: function() {
			var n = $(Union.logFn.logDomId + " .un_mod_reg .un_rem .un_check_fcm").hasClass("no"),
				o = $(Union.logFn.logDomId + " .un_mod_reg .un_rem .un_check_fcm");
			n ? (o.removeClass("no"), o.attr({
				style: "background:url(//n.7k7kimg.cn/uploads/cdn/api/loginPlus/img/chk_1.png) no-repeat;"
			}), $("#union .rrname,#union .rrnum").show()) : (o.addClass("no"), o.attr({
				style: "background:url(//n.7k7kimg.cn/uploads/cdn/api/loginPlus/img/chk_0.png) no-repeat;"
			}), $("#union .rrname,#union .rrnum").hide());
			var s = $(this.logDomId).height() / 2;
			$(this.logDomId).animate({
				"margin-top": "-" + s + "px"
			}, 250)
		},
		getUserInfo: function(n) {
			return $.extend(Union.logFn.userInfo, n), Union.logFn.userInfo
		},
		saveInfo: function(n) {
			$(".un_mod_reg,.un_mod_save").toggle(), $(".un_msg .logs,.un_msg .saves").toggle(), $(".un_mod_save .nameTxt").html(n.name), $(".un_mod_save .passTxt").html(n.pass), $(".un_mod_save .saveTxt a").attr({
				href: Union.logFn.defaults.saveInfo + "u=" + n.name + "&p=" + n.pass
			}), $(".un_btns_done").bind("click", function() {
				Union.logFn.close()
			})
		},
		qqLog: function() {
			this.thirdPartyParms.url = "//8.7k7k.com/Connect2.1/example/oauth/index.php?referer=http%3a%2f%2fweb.7k7k.com%2fapi%2f" + Union.logFn.defaults.qqlogType + ".php%3faid%3d" + Union.logFn.defaults.qqLogId + "%26refer%3d" + Union.logFn.defaults.qqlogCallback,
			this.thirdPartyParms.w = 700;
			this.thirdPartyParms.h = 420;
			$('.thirdParty_confirm').show()
		},
		wxLog: function() {
			this.thirdPartyParms.url = "https://open.weixin.qq.com/connect/qrconnect?response_type=code&appid=wx4b2ea8fbad86e262&redirect_uri=http://zc.7k7k.com/Wx/oauth/callback.php&state=73cdedfbb78f07edb3950b62ed58cd1e%2526referer%253Dhttp%253A%252F%252Fweb.7k7k.com%252Fapi%252Fwxlogin.php%253Faid%253D" + Union.logFn.defaults.wxLogId + "%2526refer%253D" + Union.logFn.defaults.qqlogCallback + "%252F%2523bottom&scope=snsapi_login,snsapi_userinfo";
			this.thirdPartyParms.w = 520;
			this.thirdPartyParms.h = 520;
			$('.thirdParty_confirm').show()
		},
		wbLog: function() {
			this.thirdLogin({
				url: "//8.7k7k.com/WB/index.php?referer=" + encodeURIComponent(location.href),
				w: 700,
				h: 455
			})
		},
		thirdLogin: function(n) {
			var o = 0,
				s = 0,
				e = {
					w: 454,
					h: 320
				};
			e.t = (window.screen.availHeight - 30 - e.h) / 2, e.l = (window.screen.availWidth - 10 - e.w) / 2, $.extend(e, n);
			var a = "width=" + e.w + ",height=" + e.h + ",top=" + e.t + ",left=" + e.l + ",location=0,menubar=0,resizable=0,scrollbars=1,status=1,titlebar=1,toolbar=0",
				i = window.open(n.url, "", a);
			if(Union.logFn.readCookie("userid")) return clearInterval(s), i.close(), void setTimeout(function() {
				Union.logFn.close();
				$('.login_unames').text(Union.logFn.readCookie('nickname'));
				$('.header .login_already').show();
				$('.header .login_no').hide();
				if(Union.logFn.loginRefreshPage){
					location.reload();
					Union.logFn.loginRefreshPage = false; //改回默认状态 默认不刷新页面
				}

				 location.reload() //禁止刷新页面;
			}, 100);
			s = setInterval(function() {
				Union.logFn.readCookie("userid") ? (clearInterval(s), i.close(), setTimeout(function() {
					Union.logFn.close();
					$('.login_unames').text(Union.logFn.readCookie('nickname'));
					$('.header .login_already').show();
					$('.header .login_no').hide();
					if(Union.logFn.loginRefreshPage){
						location.reload();
						Union.logFn.loginRefreshPage = false; //改回默认状态 默认不刷新页面
					}
					play22.fcmCheck();
					location.reload() //禁止刷新页面;

				}, 100)) : 1800 < o && clearInterval(s), o++
			}, 300)
		},
		ieVersion: function() {
			return function() {
				for(var n = 3, o = document.createElement("div"), s = o.getElementsByTagName("i"); o.innerHTML = "\x3c!--[if gt IE " + ++n + "]><i></i><![endif]--\x3e", s[0];);
				return 4 < n && n
			}()
		},
		readCookie: function(n) {
			var o, s = "";
			return "string" == typeof n && "" !== n &&
			(o = String(document.cookie).match(new RegExp("(?:^| )" + n + "(?:(?:=([^;]*))|;|$)"))) && (s = o[1] ? decodeURIComponent(o[1]) : ""), s
		},
		setCookie: function(n, o, s) {
			var e = new Date;
			e.setDate(e.getDate() + s), document.cookie = n + "=" + escape(o) + ";path=/;domain=web.7k7k.com" + (null == s ? "" : ";expires=" + e.toGMTString())
		},
		// readCookie: jiayou.net.cookie.get,
		// setCookie: jiayou.net.cookie.set,
		myDate: function(n) {
			return d = new Date(n), d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
		},
		ieHack: function() {
			$(".un_mod_log").css({
				height: "205px"
			})
		},
		resetHack: function() {
			$(".un_mod_log").css({
				height: "195px"
			})
		}
	}, $(function() {
		if(Union.logFn.init(), Union.logFn.ieVersion() <= 8) {
			$(window).width();
			var n = $(window).height();
			$("#Union.logFn_mask").attr("style", "width:100%;height:" + n + "px;filter:alpha(opacity=50);zoom:1"), $(Union.logFn.logDomId + " #un_name").bind("click", function() {
				"用户名/邮箱/KK号" == $(this).val() && $(this).val("")
			}), $(Union.logFn.logDomId + " #un_name").bind("blur", function() {
				"" == $(this).val() && $(this).val("用户名/邮箱/KK号")
			})
		}
		$(Union.logFn.logDomId + " .un_tabs a").bind("click", function() {
			var n = $(this).index();
			Union.logFn.toggleUi(n)
		}), $(Union.logFn.logDomId + " .un_btns_reg").bind("click", function() {
			Union.logFn.toggleUi(1)
		}), $(Union.logFn.logDomId + " .un_btns_log").bind("click", function() {
			Union.logFn.doLog()
		}), $(Union.logFn.logDomId + " .un_btns_regl").bind("click", function() {
			Union.logFn.doReg()
		}), $(Union.logFn.logDomId + " .un_close").bind("click", function() {
			Union.logFn.close()
		}), $(Union.logFn.logDomId + " .un_log_qq").bind("click", function() {
			Union.logFn.qqLog()
		}), $(Union.logFn.logDomId + " .un_log_wx").bind("click", function() {
			Union.logFn.wxLog()
		}), $(Union.logFn.logDomId + " .un_log_wb").bind("click", function() {
			Union.logFn.wbLog()
		}), $(Union.logFn.logDomId + " .un_mod_log .un_rem .un_check").bind("click", function() {
			Union.logFn.rember("log"), this.onselectstart = document.body.ondrag = function() {
				return !1
			}
		}), $(Union.logFn.logDomId + " .un_mod_reg .un_rem .un_check").bind("click", function() {
			Union.logFn.rember("reg"), this.onselectstart = document.body.ondrag = function() {
				return !1
			}
		}), $(Union.logFn.logDomId + " .un_mod_reg .un_rem .un_check_fcm").bind("click", function() {
			Union.logFn.rember_fcm(), this.onselectstart = document.body.ondrag = function() {
				return !1
			}
		}), $(".davied").bind("click", function() {
			$("#union .rrname,#union .rrnum").toggle()
		}),$(Union.logFn.logDomId + " .un_mod_log .un_rem .un_rem2 .un_check2").bind("click", function () {
            if( $('.un_check2')[0].className==="un_check2"){
              $('.un_check2')[0].style.background="url(//n.7k7kimg.cn/uploads/cdn/api/loginPlus/img/chk_0.png) no-repeat";
              $('.un_check2')[0].className="un_check2 no"
            }else{
              $('.un_check2')[0].style.background="url(//n.7k7kimg.cn/uploads/cdn/api/loginPlus/img/chk_1.png) no-repeat";
              $('.un_check2')[0].className="un_check2"
            }

        })
	})
}(jQuery);

$(function(){
	//用户中心
	try {
		function addOpenLink(number){
			$('#userBox-main').children().eq(number).on('click',function () {
				switch (number) {
					case 0:
						window.open('http://web.7k7k.com/user/index.php')
						break;
					case 1:
						window.open('http://www.7k7k.com/home.htm')
						break;
					case 2:
						break;
					case 3:
						$('.J-username-box').removeClass('dis');
						$.ajax({
							url:"//web.7k7k.com/user/logout_call.php",
							type:'get',
							dataType:'jsonp',
							data:'',
							jsonp:'callback',
							success:function(result) {}
						});
						$('.header .login_already').hide();
						$('.header .login_no').show();
						break;
				}
			})
		}
		$('.login_already').hover(function () {
			$('#iconUsercenter').css('background-position','-12px -3px')
			$('#userBox-main').css('display','block')
		},function () {
			$('#iconUsercenter').css('background-position','')
			$('#userBox-main').css('display','none')
		})
		for (let i = 0; i <  $('#userBox-main').children().length; i++) {
			$('#userBox-main').children().eq(i).hover(
				function(){
					$('#userBox-main').children().eq(i).children(':first').children().addClass('check')
				},
				function(){
					$('#userBox-main').children().eq(i).children(':first').children().removeClass('check')
				}
			)
			addOpenLink(i)
		}}
	catch (e) {
		console.log(e)
	}
	Union.logFn.config({"logAction":0,"regAction":0,autokk:1});
	var	topName = $('.login_unames');
	// 充值账号 组件
	isLogin()
	function isLogin(){
		// 判断是否登陆
		// Union.logFn.readCookie
		if (Union.logFn.readCookie('userid')&&Union.logFn.readCookie('userid') !== ''){
			//global_top
			$('.header .login_already').show();
			$('.header .login_no').hide();
			// 判断登陆方式
			if (Union.logFn.readCookie('loginfrom') == 'qq') {
				console.log(Union.logFn.readCookie('nickname'))
					// 判断为qq登陆
					topName.text(Union.logFn.readCookie('nickname'));
			}else if(Union.logFn.readCookie('loginfrom') == 'wx'){
					// 判断为微信登陆
					topName.text(Union.logFn.readCookie('nickname'));
			}else{
					// 判断为7k登陆
					topName.text(Union.logFn.readCookie('username'));
			}

		}else{
			$('.header .login_already').hide();
			$('.header .login_no').show();
		}
	}
	// 登录
	$('.login_btn').on('click', function (){
		Union.logFn.open(isLogin);
		Union.logFn.toggleUi(0);
	});
	$('.header .signout').on('click', function (){
		$('.J-username-box').removeClass('dis');
		$.ajax({
			url:"//web.7k7k.com/user/logout_call.php",
			async:false,
			type:'get',
			dataType:'jsonp',
			data:'',
			jsonp:'callback',
			success:function(result) {
			},
			error:function(n){
				play22.fcmCheck();
			}
		});
		if($('.play_game,ifream').length>0){
			$('.play_game').html('')
		}
		$('.header .login_already').hide();
		$('.header .login_no').show();
	});
	$(document).on('click', '.login_btn_nc', function() {
		Union.logFn.open(isLogin);
		Union.logFn.toggleUi(0);
	});
	$(document).on('click', '.login_btn_refresh', function() {
		Union.logFn.loginRefreshPage = true;
		Union.logFn.open(isLogin);
		Union.logFn.toggleUi(0);
	});

	// 热门游戏
	$(".gloable .more").hover(function() {
		$(this).addClass("action")
	}, function() {
		$(this).removeClass("action")
	});
})
