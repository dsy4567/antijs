var popTimer = null;
var playGameCountdownTimer = null;
// 下次可玩需要等待时间
var nextPlayWaitSeconds = 0;
// 下次可玩时间
var nextPlayTs = 0;

window.smevent = function() {

}

//判断是否为ie
smevent.IEVersion = function() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        return true;
    } else if (isEdge || isIE11) {
        return true;
    } else {
        return false;
    }
}

//弹窗组件
function popup(url, codenum, top) {
    $("#top .codegs").remove();
    var iframe = '<iframe id="codezd" class="codegs" width="100%" height="100%" frameborder="no" scrolling="no" style="display: block !important;padding: 0px;z-index: -1;opacity: 0;position: fixed;"></iframe>';
		url = url.replace(/^https{0,1}:/, '');
		$.get(url + "?runa=" + Math.random(), function(data3) {
        //前置函数，对弹窗内容进行处理
        if (typeof top === "function") {
            data3 = top(data3);
        }
        if (smevent.IEVersion()) {
            $("#top").append(iframe);
            $("#top").append(data3);
            setTimeout(function() {
                var obj = $("#codepop" + String(codenum)),
                    codezd = $("#codezd");
                if (obj.length > 0) {
                    codezd.css("top", obj.offset().top + "px");
                    codezd.css("left", obj.offset().left + "px");
                    codezd.css("width", obj.outerWidth(true) + "px");
                    codezd.css("height", obj.outerHeight(true) + "px");
                }
            }, 500);
        } else {
            $("#top").append(data3);
        }
        $("#top .codegs .remove").click(function() {
						$("#top .codegs").remove();
				});

				$("#top .codegs .refresh").click(function() {
						location.reload(true);
				});
				
				// 点击确定退出游戏
				$("#top .codegs  .exit-game").click(function() {
						immedToWeb('');
				});

				if (game_config['guardian']) {
						$(".realname-apply-modify").hide();
				}
        // for (clas in smevent.tcTime) { $("." + clas).html(smevent.tcTime[clas]); } //配置赋值
    });
}

function poplist(codenum) {
    $.getJSON("//web.4399.com/fcmtc/dbtc/index.html?runa=" + Math.round(new Date() / 1000), function(data) {
        eval("popup(data.code" + codenum + "," + codenum + ",undefined)");
    });
}

/**
 * @description: 立即关闭游戏跳转官网
 * @param {String} gwurl 跳转url，传入为空时默认获取游戏菜单官网地址进行跳转
 * @return {*}
 */
 function immedToWeb(gwurl) {
	var yxgwurl = $("#top_bar .r_menu li a").filter(function() { 
		return $(this).text() == "游戏官网"; 
	}).attr("href");

	var newgwurl = (gwurl === '') ? yxgwurl : gwurl,
			dhref = location.href;

	// 退出游戏
	$("#game_box").attr("src", '');
	$("#game_box").remove();
	
	// 10s后跳转
	if (dhref !== newgwurl) {
		if (gwurl) {
				location.href = newgwurl;
		} else {
				location.replace(newgwurl);
		}
	}
}

/**
 * @description: 等待10秒 公共跳转方法，处理退出游戏，跳转到其他网址，点击确认或者
 * @param {String} gwurl 跳转url，传入为空时默认获取游戏菜单官网地址进行跳转
 * @return {*}
 */
function toweb(gwurl) {
		var yxgwurl = $("#top_bar .r_menu li a").filter(function() { 
			return $(this).text() == "游戏官网"; 
		}).attr("href");

		var newgwurl = (gwurl === '') ? yxgwurl : gwurl,
				dhref = location.href;

		// 退出游戏
		$("#game_box").attr("src", '');
		$("#game_box").remove();
		
		// 10s后跳转
		if (dhref !== newgwurl) {
			setTimeout(function() {
				if (gwurl) {
						location.href = newgwurl;
				} else {
						location.replace(newgwurl);
				}
			}, 10000);
		}
}

function exitGame() {
		// 退出游戏
		$("#game_box").attr("src", '');
		$("#game_box").remove();
}

function tofcmdjs() {
    var fcmdjs = setInterval(function() { if ($(".codegs .fcmdjs").length > 0) { $(".codegs .fcmdjs").html(smevent.data2.time) && clearInterval(fcmdjs); } }, 500);
}

// 关闭弹窗
function closePop() {
		if (popTimer) {
				clearTimeout(popTimer);
				popTimer = null;
		}

		popTimer = setTimeout(function () {
				$("#top .codegs").remove();
				clearTimeout(popTimer);
				popTimer = null;
		}, 10000);
}

// 开始可玩游戏倒计时
function playGameCountdown() {
		if (playGameCountdownTimer) {
			clearTimeout(playGameCountdownTimer);
			playGameCountdownTimer = null;
		}

		playGameCountdownTimer = setTimeout(function () {
				nextPlayWaitSeconds--;
				handleCountdownShow();
				playGameCountdown();

				if (nextPlayWaitSeconds <= 0) {
						// 倒计时为0刷新页面
						window.location.reload(true);
				}
		}, 1000);
}

// 获取是周几
function getCnWeek(time) {
		var weeks = ['日', '一', '二', '三', '四', '五', '六'];
		var day = (new Date(time * 1000)).getDay();
		return weeks[day];
}

// 判断是什么周 time -> 下次的可玩时间的时间戳
function getWeek(time) {

	return isSameWeek(time * 1000) ? '本周' : '下周';

	// var now = new Date();
	// var curDay = now.getDay();
	// var day = (new Date(time * 1000)).getDay();
	// var timeInterval = time -  now.getTime() / 1000

	// if (timeInterval > 14 * 24 * 3600) return '下周'
	
	// if (timeInterval > 24 * 3600) {
	// 		return curDay >= day ? '下周' : '本周';
	// } else {
	// 		return '本周'
	// }
}

// 判断是否为同一周，同一周为：本周，下一周为：下周
function isSameWeek(time){
	var now = new Date();
	var oneDayTime = 1000*60*60*24;
	var old_count = parseInt(time / oneDayTime);
	var now_other = parseInt(now.getTime() / oneDayTime);

	return parseInt((old_count+4)/7) === parseInt((now_other+4)/7);
}

// 格式化分钟时间
function formateCountdownTime(time) {
	if (!time) return '';

	var minute = Math.floor(time / 60);
	var seconds =  time % 60;

	return minute + '分钟' + seconds + '秒';
}

// 处理时间格式化
function handleCountdownShow() {
	var text = '';
	if (
		nextPlayWaitSeconds <= 20 * 3600 && 
		nextPlayWaitSeconds > 3600
	) {
		// 当天可玩且在00:00-18:59:59
		text = "下次可玩游戏时段：今天晚上20:00~21:00";
	}	else if (
		// 当天可玩时间在19:00-19:59:59
		nextPlayWaitSeconds <= 3600 && 
		nextPlayWaitSeconds > 0
	) {
		// 格式化时间 分/秒
		var time = formateCountdownTime(nextPlayWaitSeconds);
		text = "距下次可玩游戏剩余：" + time;
	}	else if (
		nextPlayWaitSeconds <= 44 * 3600 && 
		nextPlayWaitSeconds > 20 * 3600
	) {
		// 当天不可玩且次日可玩
		text = "下次可玩游戏时段：明天晚上20:00~21:00";
	} else if (nextPlayWaitSeconds > 44 * 3600) {
		// 当日不可玩且次日不可玩
		var week = getCnWeek(nextPlayTs);
		var whichWeek = getWeek(nextPlayTs);
		text = "下次可玩游戏时段：" + whichWeek + week + " 晚上20:00~21:00";
	}

	// 更新文案的显示
	updateCountdownText(text);
}

// 更新文案的显示
function updateCountdownText(text) {
		$('#game_countdown').show();
		$('#game_countdown').text(text);
}

// 结合处理
function countdown(data1, data2) {
    smevent.data1 = data1;
    smevent.data2 = data2;
	
    var run = false,
				timer = null,
        incode = {
						// 进入游戏提示，未成年限制登录提醒（实名状态审核中）
						6035: function() {
								if (smevent.code6035 == undefined) {
										poplist(28);
										exitGame();
										smevent.code6035 = true;
								}
						},

						// 进入游戏提示，未成年限制登录提醒（实名状态已认证）
						6036: function() {
								if (smevent.code6036 == undefined) {
										poplist(26);
										exitGame();
										
										// 开始倒计时，倒计时不同时的提示不同
										nextPlayWaitSeconds = data2.data.next_play_wait_seconds;
										nextPlayTs = data2.data.next_play_ts;

										playGameCountdown();
										smevent.code6036 = true;
								}
						},

						// 进入游戏提示，未成年防沉迷提醒（实名状态审核中）
						6037: function() {
								if (smevent.code6037 == undefined) {
										poplist(28);
										exitGame();
										smevent.code6037 = true;
								}
						},

						// 进入游戏提示，未成年防沉迷提醒（实名状态已认证）
						6038: function() {
								if (smevent.code6038 == undefined) {
										poplist(20);
										tofcmdjs();
										closePop();
										smevent.code6038 = true;
								}
						},

						// 游戏即将退出（实名状态审核中），20:50触发
						6039: function() {
								if (smevent.code6039 == undefined) {
										poplist(28);
										exitGame();
										smevent.code6039 = true;
								}
						},

						// 游戏即将退出（实名状态已认证），20:50触发
						6040: function() {
								if (smevent.code6040 == undefined) {
										poplist(23);
										tofcmdjs();
										closePop();
										smevent.code6040 = true;
								}
						},

						// 游戏即将退出（实名状态审核中），20:57触发
						6041: function() {
								if (smevent.code6041 == undefined) {
										poplist(28);
										exitGame();
										smevent.code6041 = true;
								}
						},

						// 游戏即将退出（实名状态已认证），20:57触发
						6042: function() {
								if (smevent.code6042 == undefined) {
										poplist(24);
										tofcmdjs();
										closePop();
										smevent.code6042 = true;
								}
						},

						// 游戏下线提醒
						6043: function() {
								if (smevent.code6043 == undefined) {
										poplist(25);
										toweb('');
										closePop();
										smevent.code6043 = true;
								}
						},
						
						// 未认证或者认证为假，弹出厦门身份验证弹窗
						6044: function() {
								if (smevent.code6044 == undefined) {
										a1101824(game_config['uid'], game_config['bizid']);
										smevent.code6044 = true;
								}
						},

						// 厦门防沉迷异常
						6045: function() {
								if (smevent.code6045 == undefined) {
										fcm_error_handle();
										// 停止运行
										run = true;
								}
						},

            6666: function() {
								// a1101824(game_config['uid'], bizid)
								// smevent.a1101824()
								// TODO 自定义事件，可能会弹其他弹窗
                // eval(smevent.data2.script);
            }
        };

    if (data2.code == 6666) {
        incode[data2.code]();
        // 没有下次true，继续循环：false
        return smevent.data2.run;
    }

    if (data2.code == 100) {
        return true;
    }

    if (data2.code == 6002) {
        return false;
    }

    if (data2.code == 6001) {
        var gwurl = $("#top_bar .r_menu .menu_box .o_list .s_menu").attr("href");
        location.href = gwurl;
        return true;
    }

    if (incode[data2.code] != undefined) {
        incode[data2.code]();
        return run;
    }

    return run;
}

// 防沉迷异常处理
function fcm_error_handle() {
		poplist(29);
		exitGame();
		smevent.code6045 = true;
		// 停止轮询
}

var error_nums = 0;
// 接口异常3次后重发
function news_handle(data1) {
    if (data1.code == 401 || data1.code == 402 || data1.code == 403) { //异常重发
				if (error_nums < 3) {
						error_nums++;
						setTimeout(heartbeat, 1000);
				} else {
						fcm_error_handle();
						error_nums = 0;
				}
        
        return;
    } else if (data1.code == 100) {
        return;
    }

    window.game_config['token'] = (data1.code == 402) ? '' : data1.result.token;
    window.game_config['is_adult'] = data1.result.is_adult ? data1.result.is_adult : '';
    var interval = parseInt(data1.result.interval) * 1000;

    var wbdata = {
        game: game_config['game'],
        uid: game_config['uid'],
        playtime: data1.result.playtime,
        idcard_status: data1.result.idcard_status,
				ver: 'v2'
    };

    $.getJSON("//web.4399.com/user/?_c=indulge&_a=gzhandle&jsoncallback=?", wbdata, function(data2) {
					if (countdown(data1, data2) === false) { 
							setTimeout(heartbeat, interval); 
					}
    });
}

//开始轮寻
function heartbeat() {
    var todata = {
        ptid: 4,
        gid: game_config['game'],
        uid: game_config['uid'],
        is_adult: game_config['is_adult'] ? game_config['is_adult'] : '',
        token: game_config['token'] ? game_config['token'] : ''
    };

    // $.getJSON("//apps.4399.com/online/heartbeat?callback=?", todata, function(data) { news_handle(data); });

		$.ajax({
				url: "//apps.4399.com/online/heartbeat",
				data: 'ptid=4&gid=' + todata.gid + '&uid=' + todata.uid + '&is_adult=' + todata.is_adult + '&token=' + todata.token,
				type: "get",
				processData: false,
				timeout: 15000,
				dataType: "jsonp",  // not "json" we'll parse
				jsonp: "callback",
				success: function(data) {
					news_handle(data);
				},
				error: function(error) {
					if (error_nums < 3) {
							error_nums++;
							setTimeout(heartbeat, 1000);
					} else {
							fcm_error_handle();
							error_nums = 0;
					}
				}
		});
	}


/***以下是对于flash的引导弹窗***/
smevent.flashenabled = 0;
smevent.flashChecker = function() {
    var hasFlash = 0; //是否安装了flash
    var flashVersion = 0; //flash版本
    var isValid = 0; //是否过期
    var isIe = 0;
    //IE浏览器
    if ("ActiveXObject" in window) {
        try {
            var swf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            hasFlash = 1;
            isValid = 1;
            VSwf = swf.GetVariable("$version");
            flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
            //isiebrowsersymbol = 1;

        } catch (e) {}
        isIe = 1;
        //非IE浏览器
    } else {
        if (smevent.IEVersion()) {
            isIe = 1;
        } else {
            isIe = 0;
        }
        try {
            if (navigator.plugins && navigator.plugins.length > 0) {
                var swf = navigator.plugins["Shockwave Flash"];
                if (swf) {
                    hasFlash = 1;
                    isValid = 1;
                    var words = swf.description.split(" ");
                    for (var i = 0; i < words.length; ++i) {
                        if (isNaN(parseInt(words[i]))) continue;
                        flashVersion = parseInt(words[i]);
                    }
                    if (swf.filename && swf.filename == 'internal-not-yet-present') { //过期
                        isValid = 0;
                    }
                }
            }
        } catch (e) {}
    }
    return { flash: hasFlash, version: flashVersion, vaild: isValid, ie: isIe };
}

//创建一个小的flash
function setRenderMode() {
    var meta = document.createElement('meta');
    meta.content = "ie=7";
    meta.setAttribute("http-equiv", 'x-ua-compatible');
    document.getElementsByTagName('head')[0].appendChild(meta);

    var testswf = "//web.4399.com/js/flash.swf";
    IEVersion = (navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1) ? new RegExp("MSIE (\\d+\\.\\d+);").test(navigator.userAgent) && parseFloat(RegExp["$1"]) : '-1';
    if (IEVersion == 7 || IEVersion == 8) {
        document.write("<div id='testflashplayer'><OBJECT ID='testplayer' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0' width='10' height='10'>");
        document.write("<PARAM NAME='movie' VALUE='" + testswf + "'>");
        document.write("<embed id='testplayer1' name='testplaye' src='" + testswf + "' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='10' height='10'></embed>");
        document.write("<PARAM NAME='quality' VALUE='high'>");
        document.write("</OBJECT></div>");

    } else {
        var checkflashdiv = document.createElement('div');
        checkflashdiv.id = "testflashplayer";
        checkflashdiv.innerHTML = '<object id="testplayer" type="application/x-shockwave-flash" data="' + testswf + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="10" height="10"> ' +
            '<param name="align" value="middle"> ' +
            '<param name="quality" value="high"> ' +
            '<param name="allowscriptaccess" value="always"> ' +
            '<param name="wmode" value="transparent"> ' +
            '<embed id="testplayer1" name="testplaye" src="' + testswf + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="10" height="10"></embed>' +
            '<param name="allowfullscreen" value="true"></object> ';
        document.getElementsByTagName('body')[0].appendChild(checkflashdiv);
    }
}

function popwebtips() { //弹窗
    $("#top .webtipss").remove();
    var iframe = '<iframe id="webtipszd" class="webtipss" width="100%" height="100%" frameborder="no" scrolling="no" style="display: block !important;padding: 0px;z-index: -1;opacity: 0;position: fixed;"></iframe>';
    $.get('//web.4399.com/quanzhangudingnarong/quanzhantishi/a1092102.html' + "?runa=" + Math.random(), function(data3) {
        if (smevent.IEVersion()) { //ie 的flash遮罩层
            $("#top").append(iframe);
            $("#top").append(data3);
            var obj = $("#webtips1"),
                webtipszd = $("#webtipszd");
            setInterval(function() {
                webtipszd.css("top", obj.offset().top + "px");
                webtipszd.css("left", obj.offset().left + "px");
                webtipszd.css("width", obj.outerWidth() + "px");
                webtipszd.css("height", obj.outerHeight() + "px");
            }, 500);

        } else {
            $("#top").append(data3);
        }
        browser = 'other'; //判断浏览器
        if (navigator.userAgent.indexOf("Firefox") > -1) {
            browser = 'Firefox';
        } else if (navigator.userAgent.indexOf("Trident") > -1) {
            browser = 'Trident'; //ie
        } else if (navigator.userAgent.indexOf("Chrome") > -1) {
            browser = 'Chrome';
        }

				$("#top").height = "100%";
        $("#top .wtipss." + browser).show(); //展示相应文案
        $("#top .delwebtips").click(function() { $("#top .webtipss").remove(); $("#top").height = "34px"; }); //点击隐藏
    });
}

function flashpop(callback) { //检测flash弹窗
    if ($("#game_box").attr('src').indexOf("h5=1") > -1) {
        return; //是H5的游戏
    } else if (navigator.userAgent.indexOf("Windows NT 10.0") > -1 || navigator.userAgent.indexOf("Windows NT 6.2") > -1 || navigator.userAgent.indexOf("Windows NT 6.1") > -1) { //对win7/win10

        if (!!window.ActiveXObject || "ActiveXObject" in window) {
            setRenderMode();
            var isiebrowsersymbol = 1;
        } else {
            var isiebrowsersymbol = 0;
        }

        var trycount = 0;

        var testpoint = setInterval(function() {
            try {
                if (isiebrowsersymbol == 1) {
                    smevent.flashenabled = document.getElementById("testplayer").checkflash();
                } else {
                    smevent.flashenabled = document.getElementById("testplayer1").checkflash();
                }
                callback(1);
                clearInterval(testpoint);
            } catch (e) {
                trycount++;
                if (trycount > 5) { //主站大佬的重试多次
                    var fls = smevent.flashChecker();

										// 曲线救国，跳转至官网的
										// var gamebox = document.getElementById("game_box");
										// var isHavTopBar = gamebox.contentWindow.document.getElementById("top_bar");
										// isHavTopBar

                    if (!fls.flash || isiebrowsersymbol == 1) {
                        popwebtips();
                    }

                    clearInterval(testpoint);
                }
            }
        }, 300);
    }
}

/***以上是对于flash的引导弹窗***/

//对于游戏中的玩家假身份进行操作
function a1101824(uid, bizId) {
		// 退出游戏
		$("#game_box").attr("src", '');
		$("#game_box").remove();

		// 打开实名弹窗打点
		realNameSucTrack(1);
		
    //使用厦门的验证弹窗
    popup('//web.4399.com/fcmtc/dbtc/a1101824.html', '13', function(data4) {
        $('#webtipsbox13,#codepop13,#webtips13').remove();
        $("#codezd").remove();
        return data4.replace("//ptlogin.4399.com/ptlogin/realNameVerify.do", "//ptlogin.4399.com/ptlogin/realNameVerify.do?appid=www_home&regLevel=4&canBack=false&canExit=true&isLogin=true&uid=" + uid + '&bizId=' + bizId);
    });

    if (typeof UniLogin !== "object") {
        window.UniLogin = {};
    }

    if (typeof UniLogin._closePopupCertify !== "function") {
        UniLogin._closePopupCertify = function(code, ori_idcard_state) {
            $('#webtipsbox13,#codepop13,#webtips13').remove();
            $("#codezd").remove();
            if (code == 40000) {
                if ($(".loginout").length > 0) {
                    $(".loginout").eq(0)[0].click();
                } else if ($(".global_logout").length > 0) {
                    $(".global_logout").eq(0)[0].click();
                }
            } else if (code == 10000) {
								// 认证完成实名打点
								realNameSucTrack();
								// 刷新页面
								setTimeout(function() {
									window.location.reload(true);
								}, 200)
						}
        };
    }
}

// 实名认证打点  isOpenDialog=1 来标识，不传或者 传0 实名成功的
function realNameSucTrack(isOpenDialog) {
	$.getJSON("//web.4399.com/user/?_c=indulge&_a=handleAck&jsoncallback=?", {
		game: game_config['game'],
		isOpenDialog: isOpenDialog || 0
	}, function(data) {});
}

/***以上是查询用户实名制情况的****/

(function() {
		// 如果code为6045，即表示轮询失败
		if (game_config['code'] == 6045) {
			fcm_error_handle();
			return false;
		}

    // 保留厦门打点，开始打点轮询 
		heartbeat();
		
    flashpop(function(val) { smevent.flashenabled = val; });

		// 如果初始进来默认就是审核中或者认证为假，弹厦门的弹窗
		if (
				game_config['validateState'] == 0 || 
				game_config['validateState'] == 4 ||
				game_config['validateState'] == 2 
		) {
				// 认证为假或者认证中
				a1101824(game_config['uid'], game_config['bizid']);
				// 认证的弹窗已经弹出标识
				smevent.code6044 = true;
		} else if (
				game_config['validateState'] == 3 ||
				game_config['validateState'] == 5
		) {
				// 认证审核中
				poplist(28);
				exitGame();
		}
})();