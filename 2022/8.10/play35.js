var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Play35 = /** @class */ (function (_super) {
    __extends(Play35, _super);
    function Play35() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ncpad = true;
        _this.ncpgm = false;
        _this.adTimes = null;
        _this.explore = _this.getExploreName(); //获取浏览器名称;
        _this.isfullScreen = false; // 是否全屏状态
        _this.bl = gameInfo.gamewidth / gameInfo.gameheight; // 游戏默认宽高比
        _this.tempWidth = gameInfo.gamewidth; // 记录全屏之前 播放框的宽
        _this.tempHeight = gameInfo.gameheight; // 记录全屏之前 播放框的高
        _this.tempWidth1 = gameInfo.gamewidth; // 每次缩放纪录宽
        _this.tempHeight1 = gameInfo.gameheight; // 每次缩放纪录高
        _this.isVerticalScreen = _this.bl < 4 / 3 ? true : false; //是否为竖屏 宽高比小于 4/3 认为是竖屏;
        _this.othWidth = gameInfo.gamePartner == 'cg' ? 40 : 340; //游戏区外 其余部分所占宽度
        _this.othHeight = 120 + 75; // 游戏区外 其余部分所占高度
        _this.fullScreenHeader = 36; // 全屏状态头部操作区 高度
        _this.windowWidth = $(window).width() > 980 ? $(window).width() : 980; // 浏览器宽度 最小 不小于980;
        _this.windowHeight = $(window).height() > 675 ? $(window).height() : 675; // 浏览器高度 最小 不小于 675;
        _this.minWidth = 640; // 缩放区 最小宽度限制
        _this.minHeight = 480; // 缩放区 最小高度限制
        _this.maxWidth = 1280; // 缩放区 最大宽度限制
        _this.maxHeight = 1080; // 缩放区 最大高度限制
        _this.unityAllow = false; // 是否支持unity3的
        _this.play_wanfaH = $(".playbox_right .play_wanfa").height();
        _this.changeW = 60; //默认每次点击缩放宽度
        _this.flowers = 0;
        _this.wrap_ad2ReadyLoad = false;
        _this.wrap_page_ad2ReadyLoad = false;
        _this.wrap_pageadReadyLoad = false;
        _this.fcmGetStatusData = {
            code: 5, lastTime: 0, diffTime: 0
        };
        return _this;
    }
    Play35.prototype.IEVersion = function () {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) {
                return 7;
            }
            else if (fIEVersion == 8) {
                return 8;
            }
            else if (fIEVersion == 9) {
                return 9;
            }
            else if (fIEVersion == 10) {
                return 10;
            }
            else {
                return 6; //IE版本<=7
            }
        }
        else if (isEdge) {
            return 'edge'; //edge
        }
        else if (isIE11) {
            return 11; //IE11
        }
        else {
            return -1; //不是ie浏览器
        }
    };
    /**
     * 设置cookie
     * @param name cookie的名称
     * @param value cookie的值
     * @param day cookie的过期时间
     * */
    Play35.prototype.setCooks = function (name, value, day) {
        if (day !== 0) { //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
            var expires = day * 24 * 60 * 60 * 1000;
            var date = new Date(+new Date() + expires);
            document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
            document.cookie = name + "=" + escape(value);
        }
    };
    /**
     * 获取Cookie中的值
     * @param objName
     * @returns
     */
    Play35.prototype.getCooks = function (objName) {
        //获取指定名称的cookie的值
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] == objName) {
                return decodeURI(temp[1]);
            }
        }
    };
    // 打点
    Play35.prototype.analysisAdd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var flashInfo, vuid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.flashCheckerAsync(this.explore)];
                    case 1:
                        flashInfo = _a.sent();
                        try {
                            vuid = qikecore.account.getVUID();
                            vuid && qikecore.utils.analysis.add('player.game.id', {
                                "uid": vuid,
                                "gid": gameInfo.gameId,
                                "explore": this.getExploreNameVersion(),
                                "flashcan": flashInfo.f
                            });
                        }
                        catch (e) { }
                        return [2 /*return*/];
                }
            });
        });
    };
    //游戏五分钟的广告
    Play35.prototype.gameProgressAd = function (openTime) {
        if (gameInfo.gameType == 1) {
            setTimeout(function () {
                //展示广告条幅
                $('.play_game').append('<div id="noLoginPlay" style="    height: 90px;\n' +
                    '    background: url(//www.7k7kjs.cn/static/qike/play/images/noLoginrest.png) no-repeat;\n' +
                    '    background-size: 624px 90px;\n' +
                    '    cursor: pointer;\n' +
                    '    background-position: center;\n' +
                    '    left: 50%;\n' +
                    '    bottom: 10px;\n' +
                    '    position: absolute;\n' +
                    '    width: 624px;\n' +
                    '    transform: translate(-50%, 0)"></div>');
                //五秒后出关闭按钮
                setTimeout(function () {
                    $('#noLoginPlay').append('<div id="noLoginClose" style="background: url(//www.7k7kjs.cn/static/qike/play/images/noLoginClose.png) no-repeat;\n' +
                        '    background-size: 20px 20px;\n' +
                        '    cursor: pointer;\n' +
                        '    bottom: 57px;\n' +
                        '    right: -8px;\n' +
                        '    position: absolute;\n' +
                        '    width: 20px;\n' +
                        '    height: 20px;"></div>');
                    $('#noLoginClose').on('click', function () {
                        $('#noLoginPlay').remove();
                    });
                }, 5000);
                $('.play_game').append('<iframe src="//www.7k7k.com/swf/playvideo/?version=221115" name="VideoIframe" id="addVideoIframe" frameborder="0" style="width: 100%; height: 100%; position: relative; left: 0px; top: 0px; display: none; z-index: 9999;"></iframe>');
                var frameLogin = $('#addVideoIframe')[0];
                window.addEventListener('message', function (event) {
                    if (event.data === 'closeVideoTrue') {
                        //$('#noLoginPlay').css('background','rgba(0, 0, 0, 0) url("http://www.7k7kjs.cn/static/qike/play/images/noLoginFinsh.png") no-repeat scroll 50% 50% / 624px 90px padding-box border-box')
                        play22.setCooks('gameProgressAd', '1', 1);
                        $('#addVideoIframe').remove();
                        $('#noLoginPlay').remove();
                    }
                    else if (event.data === 'closeVideoFalse') {
                        $('#addVideoIframe').css('display', 'none');
                    }
                });
                $('#noLoginPlay').on('click', function () {
                    if ($('#addVideoIframe').length !== 0) {
                        $('#addVideoIframe').css('display', 'block');
                        frameLogin.contentWindow.postMessage('videoOpen', '*');
                    }
                });
            }, openTime * 60 * 1000);
        }
    };
    // 打点
    Play35.prototype.analysisAddImg = function (type, params) {
        try {
            var vuid = qikecore.account.getVUID();
            if (!vuid) {
                return;
            }
            var url = 'http://analysis.7k7k.com/block.gif?analysis_action=' + type;
            params['vuid'] = qikecore.account.getVUID();
            for (var key in params) {
                url += '&' + key + '=' + params[key];
            }
            var img = new Image();
            img.src = url;
        }
        catch (e) { }
    };
    Play35.prototype.analysisAddTimelong = function () {
        var timelong = 0;
        var times = setInterval(function () { timelong++; }, 1000);
        window.onbeforeunload = function (event) {
            var vuid = qikecore.account.getVUID();
            var img = new Image();
            var _src = "http://analysis.7k7k.com/block.js?analysis_action=player.game.timelong&uid=" + vuid + "&gid=" + gameInfo.gameId + "&ep=" + timelong;
            if (timelong > 0) {
                img.src = _src;
            }
            clearInterval(times);
        };
    };
    // 猜你喜欢
    Play35.prototype.renderGuessLike = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, dataList, pageLength, i, domStr, i, j, swiperLikes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getGuessLike(gameInfo.gameId)];
                    case 1:
                        res = _a.sent();
                        if (res.length <= 0) {
                            $(".wrap_like .w_head .w_lr").hide();
                            return [2 /*return*/];
                        }
                        dataList = [], pageLength = 14;
                        for (i = 0; i < res.length / pageLength; i++) {
                            if (i < 5) {
                                dataList.push(res.slice(i * pageLength, (i + 1) * pageLength));
                            }
                            else {
                                break;
                            }
                        }
                        domStr = '';
                        for (i = 0; i < dataList.length; i++) {
                            domStr += '<ul class="game_list swiper-slide">';
                            for (j = 0; j < dataList[i].length; j++) {
                                domStr += '<li class="game_item">' +
                                    '<a href="' + dataList[i][j]['url'] + '">' +
                                    '<div class="pic">' +
                                    '<img src="' + dataList[i][j]['pic'] + '" alt="' + dataList[i][j]['name'] + '"></div>' +
                                    '<p>' + dataList[i][j]['name'] + '</p>' +
                                    '</a>' +
                                    '</li>';
                            }
                            domStr += '</ul>';
                        }
                        $(".wrap_like .swiper-wrapper").html(domStr);
                        swiperLikes = new Swiper('.swiper-likes', {
                            paginationClickable: true,
                            loop: true // 循环模式选项
                        });
                        $('.wrap_like .icon_left').on('click', function () { swiperLikes.swipePrev(); });
                        $('.wrap_like .icon_right').on('click', function () { swiperLikes.swipeNext(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    // 精品页游
    Play35.prototype.loadPageAD = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, srtDom, dataList, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jsonpRequest({
                            url: 'http://www.7k7k.com/api/position/572',
                            callback: "callback572"
                        })];
                    case 1:
                        res = _a.sent();
                        if (res && res[572].length > 0) {
                            srtDom = '', dataList = res[572];
                            for (i = 0; i < dataList.length; i++) {
                                srtDom += '<a href="' + dataList[i].link + '" class="game_item">' +
                                    '<div class="pic2">' +
                                    '<img src="' + dataList[i].thumb + '" alt="' + dataList[i].title + '">' +
                                    '</div>' +
                                    '<div class="game_itme_bottom">' +
                                    '<h3>' + dataList[i].title + '</h3>' +
                                    '<span>' + dataList[i].extratext1 + '</span>' +
                                    '</div>' +
                                    '</a>';
                            }
                            $(".wrap_pagead .game_yeyou").html(srtDom);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Play35.prototype.loadAD = function (dom, id1, id2) {
        return __awaiter(this, void 0, void 0, function () {
            var res, res, swiperStr, i, mySwiper1, res2, res2, geme_MlistStr, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jsonpRequest({
                            url: 'http://www.7k7k.com/api/position/' + id1,
                            callback: "callback" + id1
                        })];
                    case 1:
                        res = _a.sent();
                        if (res && res[id1]) {
                            res = res[id1], swiperStr = '';
                            for (i = 0; i < res.length; i++) {
                                swiperStr += '<div class="swiper-slide">' +
                                    '<img src="' + res[i].thumb + '" alt="">' +
                                    '<div class="swiper_txt_box">' +
                                    '<p class="swiper_txt">' + res[i].title + '</p>' +
                                    '</div>' +
                                    '<a href="' + res[i].link + '" class="swiper_player"></a>' +
                                    '</div>';
                            }
                            $(dom + " .swiper-wrapper").html(swiperStr);
                            mySwiper1 = new Swiper(dom + ' .swiper_type2', {
                                autoplay: 3000,
                                pagination: dom + ' .swiper-pagination2',
                                loop: true,
                                paginationClickable: true
                            });
                            $(dom + ' .icon_swper_prev2').on('click', function (e) { mySwiper1.swipePrev(); });
                            $(dom + ' .icon_swper_next2').on('click', function (e) { mySwiper1.swipeNext(); });
                        }
                        return [4 /*yield*/, this.jsonpRequest({
                                url: 'http://www.7k7k.com/api/position/' + id2,
                                callback: "callback" + id2
                            })];
                    case 2:
                        res2 = _a.sent();
                        if (res2 && res2[id2]) {
                            res2 = res2[id2], geme_MlistStr = '';
                            for (i = 0; i < res2.length; i++) {
                                geme_MlistStr += '<li class="game_item">' +
                                    '<a href="' + res2[i].link + '">' +
                                    '<div class="pic3"><img src="' + res2[i].thumb + '" alt="' + res2[i].title + '"></div>' +
                                    '<p>' + res2[i].title + '</p>' +
                                    '</a>' +
                                    '</li>';
                            }
                            $(dom + " .geme_Mlist").html(geme_MlistStr);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Play35.prototype.loadPageAD2 = function (dom, id1, id2) {
        return __awaiter(this, void 0, void 0, function () {
            var res2, res2, domStr, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jsonpRequest({
                            url: 'http://www.7k7k.com/api/position/' + id2,
                            callback: "callback_" + id2
                        })];
                    case 1:
                        res2 = _a.sent();
                        if (res2 && res2[id2]) {
                            res2 = res2[id2].slice(1, 3), domStr = '';
                            for (i = 0; i < res2.length; i++) {
                                domStr += '<li class="game_item">' +
                                    '<a href="' + res2[i].link + '">' +
                                    '<div class="pic3">' +
                                    '<img src="' + res2[i].thumb + '" alt="' + res2[i].title + '">' +
                                    '</div>' +
                                    '<p>' + res2[i].title + '</p>' +
                                    '</a>' +
                                    '</li>';
                            }
                            $(dom + " .geme_Mlist").html(domStr);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Play35.prototype.flowerRank = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, str, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jsonpRequest({
                            url: "http://zc.7k7k.com/gamecostrank?gid=" + gameInfo.gameId,
                            callback: "callback" + gameInfo.gameId
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.data && res.data.length > 0) {
                            data = res.data;
                            str = '';
                            for (i = 0; i < data.length; i++) {
                                if (i < 3) {
                                    str += "\n                        <li>\n                            <div class=\"xianhua_l\"><span><i class=\"flash_icon5 flash_icon5_rank".concat(i, "\"></i></span><h2>").concat(data[i]['username'], "</h2></div>\n                            <div class=\"xianhua_r\"><i class=\"flash_icon5 flash_icon5_hua\"></i>").concat(data[i]['flowers'], "</div>\n                        </li>\n                    ");
                                }
                                else {
                                    str += "\n                        <li>\n                            <div class=\"xianhua_l\"><span>".concat(i, "</span><h2>").concat(data[i]['username'], "</h2></div>\n                            <div class=\"xianhua_r\"><i class=\"flash_icon5 flash_icon5_hua\"></i>").concat(data[i]['flowers'], "</div>\n                        </li>\n                    ");
                                }
                            }
                            $(".xianhua_modal .xianhua_list").html(str);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Play35.prototype.showNoFlash = function () {
        if ($(".play_no_flash").length > 0) {
            $(".play_no_flash").show();
            return;
        }
        var strHtml = "<div class=\"play_no play_no_flash\" style=\"display: block;\">\n                        <img src=\"http://www.7k7kjs.cn/static/qike/play/images/Flash.png\" alt=\"\" class=\"paly_no_icon\">\n                        <div class=\"play_no_c\">\n                            <i class=\"play_no_c_l\"></i>\n                            <div class=\"play_no_c_r\">\n                                <p>\u6E38\u620F\u9700\u8981Flash\u7684\u652F\u6301\uFF0C</p>\n                                <p>\u70B9\u51FB\u6309\u94AE\uFF0C\u6309\u63D0\u793A\u5F00\u59CB\u6E38\u620F</p>\n                            </div>\n                        </div>\n                        <div class=\"begin_game\">\n                            <div class=\"begin_gameEm_box\"><embed type=\"application/x-shockwave-flash\"></div>\n                            <span>\u5F00\u59CB\u6E38\u620F</span>\n                        </div>\n                        <a href=\"http://www.7k7k.com/gamebrowser/?play\" class=\"liulanqi\">\u7EE7\u7EED\u6E38\u620F\uFF0C\u70B9\u51FB\u5B89\u88C57k7k\u6E38\u620F\u6D4F\u89C8\u5668</a>\n                    </div>";
        $(".playNo").show();
        $(".playNo .play_c").append(strHtml);
    };
    Play35.prototype.showNoDownload = function (os) {
        if ($(".play_no_flash").length > 0) {
            $(".play_no_flash").show();
            return;
        }
        var browserStr = "<!--<div class=\"explore_item explore_item_360\">\n                            <a href=\"https://browser.360.cn/se/\" target=\"_blank\">\n                                <img src=\"http://www.7k7kjs.cn/static/qike/play/images/360-js.png\" alt=\"360\u6D4F\u89C8\u5668\" class=\"js360img\">\n                                <p>360\u5B89\u5168\u6D4F\u89C8\u5668</p>\n                            </a>\n                            <a href=\"https://browser.360.cn/se/\" target=\"_blank\" class=\"exploredl_btn\">\u7ACB\u5373\u4E0B\u8F7D</a>\n                            <div class=\"js360zy\">\n                                <p>360\u5B89\u5168\u6D4F\u89C8\u5668\u8BF7\u5207\u6362\u5230<span>\u6781\u901F\u6A21\u5F0F</span></p>\n                                <img src=\"http://www.7k7kjs.cn/static/qike/play/images/360jszy.jpg\" alt=\"360\u6D4F\u89C8\u5668\u6781\u901F\u6A21\u5F0F\">\n                            </div>\n                        </div>\n                        <i class=\"explore_line explore_line1\"></i>-->\n                        <div class=\"explore_item explore_item_sogou\" style=\"width: 208px;margin: 0px 78px 0 -26px;\">\n                            <a href=\"//down.7k7k.com/www/sogou_explorer_11.0.1.34551_7800.exe\"  target=\"_blank\">\n                                <img src=\"http://www.7k7kjs.cn/static/qike/play/images/sougou.png\" alt=\"\u641C\u72D7\u6D4F\u89C8\u5668\">\n                               \n                            </a>\n                            <span style=\"display: inline-block;width: 172px;height: 32px;font-size: 14px;color: #fff; position: absolute;\">\u641C\u72D7\u6D4F\u89C8\u5668</span>\n                            <a href=\"//down.7k7k.com/www/sogou_explorer_11.0.1.34551_7800.exe\" target=\"_blank\" class=\"exploredl_btn\" style=\"position: relative;left:30px;top: -15px;\">\u7ACB\u5373\u4E0B\u8F7D</a>\n                        </div>\n                        <i class=\"explore_line explore_line1\" style=\"height: 73px\"></i>\n                        <div class=\"explore_item explore_item_2345\" style=\"width: 208px;margin: 0px 26px 0 56px;\">\n                            <a href=\"//download.2345.com/union8082_2345/2345explorer_50889140818.exe\"  target=\"_blank\">\n                                <img src=\"http://www.7k7kjs.cn/static/qike/play/images/2345.png\" alt=\"2345\u6D4F\u89C8\u5668\">\n                                \n                            </a>\n                             <span style=\"display: inline-block;width: 172px;height: 32px;font-size: 14px;color: #fff; position: absolute;\">2345\u6D4F\u89C8\u5668</span>\n                            <a href=\"//download.2345.com/union8082_2345/2345explorer_50889140818.exe\" target=\"_blank\" class=\"exploredl_btn\"  style=\"position: relative;left: 34px;top: -15px;\">\u7ACB\u5373\u4E0B\u8F7D</a>\n                        </div>";
        if (os == 'mac') {
            browserStr = "<div class=\"explore_item explore_item_360jisu\" style=\"width: 278px\">\n                            <a href=\"https://browser.360.cn/ee/mac/\">\n                                <img src=\"http://www.7k7kjs.cn/static/qike/play/images/360-jisu.png\" alt=\"360\u6781\u901F\u6D4F\u89C8\u5668\">\n                            </a>\n                              <span style=\"display: inline-block;width: 139px;height: 32px;font-size: 14px;color: #fff; position: absolute;\">360\u6D4F\u89C8\u5668</span>\n                            <a href=\"https://browser.360.cn/ee/mac/\" target=\"_blank\" class=\"exploredl_btn\" style=\"position: relative;left:17px;top: -10px;\">\u7ACB\u5373\u4E0B\u8F7D</a>\n                        </div>";
        }
        var dl_rStr = '';
        var explore = this.explore;
        if (os == "win") {
            dl_rStr = '<div class="dl_r dl_r_change"><span>支持Flash的第三方浏览器</span><i></i></div>';
        }
        else if (explore == "Chrome" || explore == "Edge" || explore == "Firefox" || explore == "Opera" || explore == "Safari") {
            dl_rStr = '<div class="dl_r dl_r_flash"><span>尝试激活Flash</span><i></i></div>';
        }
        var strHtml = "<div class=\"play_no play_no_download ".concat(os != 'win' ? 'play_no_download_oth' : '', "\" style=\"display: block;\">\n                        <div class=\"download_header\">\n                            <div class=\"dl_h_text\">\n                                <i class=\"dl_h_icon\"></i>\n                                <p class=\"dl_whbox\">\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u8FD0\u884CFlash <i class=\"dl_wenhao\"></i></p>\n                                <p>\u7EE7\u7EED\u6E38\u620F\uFF0C\u9700\u5B89\u88C57k7k\u6E38\u620F\u6D4F\u89C8\u5668</p>\n                                <p class=\"dl_h_hover\">\u81EA2020\u5E7412\u6708\u5F00\u59CB\uFF0CFlash Player \u5C06\u4E0D\u518D\u53D7\u652F\u6301\u3002 \u7EE7\u7EED\u73A9Flash\u6E38\u620F\uFF0C\u9700\u4E0B\u8F7D\u5B89\u88C57k7k\u6E38\u620F\u6D4F\u89C8\u5668\u3002</p>\n                            </div>\n                            <div class=\"dl_h_text dl_h_text_oth\">\n                                <i class=\"dl_h_icon\"></i>\n                                <p>\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u8FD0\u884CFlash</p>\n                                <p>\u7EE7\u7EED\u6E38\u620F\uFF0C\u53EF\u4F7F\u7528\u4EE5\u4E0B\u7B2C\u4E09\u65B9\u6D4F\u89C8\u5668</p>\n                            </div>\n                            ").concat(dl_rStr, "\n                        </div>\n                        <a href=\"http://www.7k7k.com/gamebrowser/\" class=\"linke_dl\"></a>\n                        <div class=\"dl_info\">\n                            <p class=\"dl_info_p1\"><span>7k7k</span>\u6E38\u620F\u6D4F\u89C8\u5668</p>\n                            <p class=\"dl_info_p2\">\u5B8C\u7F8E\u652F\u6301Flash\uFF0C\u7ECF\u5178\u6E38\u620F\u65E0\u9650\u7545\u73A9</p>\n                            <a class=\"dl_nowdl\" href=\"http://www.7k7k.com/gamebrowser/download/\">\u7ACB\u5373\u4E0B\u8F7D</a>\n                            <p class=\"dl_info_p3\">Win7\u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u9002\u7528</p>\n                        </div>\n                        <div class=\"other_explore\">\n                            <p >\u652F\u6301Flash\u7684\u7B2C\u4E09\u65B9\u6D4F\u89C8\u5668</p>\n                            <div class=\"exploreList\">").concat(browserStr, "</div>\n                            <div id=\"flashAds\" class=\"flashWeAds\" style=\" width: 624px; height: 90px;position: relative;bottom: 60px; background: url(").concat(inAd.imgUrl, ") no-repeat;  left: 8px;background-size: 100% 100%;cursor: pointer;\"></div>\n                        </div>\n                    </div>");
        $(".playNo").show();
        $(".playNo .play_c").html(strHtml);
        $(".flashWeAds").on('click', function () {
            window.open(inAd.url);
        });
        var adID_play_ie = '';
        var adContainer_play_ie = '';
        if (gameInfo.gameType == 4 || gameInfo.gameType == 5) {
            if (play22.IEVersion() != -1) {
                if (typeof (adId_ie) != 'undefined') {
                    adID_play_ie = adId_ie;
                    adContainer_play_ie = adContainer_ie;
                }
                console.log(play22.IEVersion());
                $('.dl_h_text.dl_h_text_oth').html('<i class="dl_h_icon"></i>\n' +
                    '<p>当前浏览器无法开始游戏</p>\n' +
                    '<p>继续游戏,可使用以下第三方浏览器</p>\n' +
                    '<p>如果您已经使用搜狗浏览器,请切换成\n' +
                    '<span id="h5ie-gsms" style="\n' +
                    '    color: #35DB33;\n' +
                    '    cursor: pointer;\n' +
                    '    font-size: 17px;\n' +
                    '">高速模式</span>\n' +
                    '</p>');
                if ($('.dl_r.dl_r_flash').length > 0) {
                    $('.dl_r.dl_r_flash').css('width', '120px');
                    $('.dl_r.dl_r_flash span').text('尝试打开高速模式');
                }
                else {
                    $('.download_header').append('<div class="dl_r dl_r_flash" style="width:120px"><span>尝试打开高速模式</span><i></i></div>');
                }
                $('.other_explore').children(':first').text('　');
                var gsms = $('<span id="h5-gsms" style="display: inline-block;width: 172px;height: 32px;position: absolute;top: -24px;color: #35DB33;cursor: pointer;font-size: 17px;">高速模式</span>');
                $('.explore_item.explore_item_sogou').children().eq(1).after(gsms);
                var jsms = $('<span id="h5-jsms" style="display: inline-block;width: 172px;height: 32px;position: absolute;top: -24px;color: #35DB33;cursor: pointer;font-size: 17px;">超速模式</span>');
                $('.explore_item.explore_item_2345').children().eq(1).after(jsms);
                $('#h5ie-gsms').on('click', function () { $('.dl_r.dl_r_flash').trigger('mouseup'); });
                $('#h5-jsms').on('click', function () { $('.dl_r.dl_r_flash').trigger('mouseup'); });
                $('#h5-gsms').on('click', function () { $('.dl_r.dl_r_flash').trigger('mouseup'); });
            }
        }
        var isp = "false";
        /**
         * 设置cookie
         * @param name cookie的名称
         * @param value cookie的值
         * @param day cookie的过期时间
         * */
        function setCookies(name, value, day) {
            if (day !== 0) { //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
                var expires = day * 24 * 60 * 60 * 1000;
                var date = new Date(+new Date() + expires);
                document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
                document.cookie = name + "=" + escape(value);
            }
        }
        /**
         * 获取Cookie中的值
         * @param objName
         * @returns
         */
        function getCookies(objName) {
            //获取指定名称的cookie的值
            var arrStr = document.cookie.split("; ");
            for (var i = 0; i < arrStr.length; i++) {
                var temp = arrStr[i].split("=");
                if (temp[0] == objName) {
                    return decodeURI(temp[1]);
                }
            }
        }
        if (getCookies('isP') && getCookies('isP') !== '') {
            isp = getCookies('isP');
        }
        else if (typeof (getCookies('userid')) !== "undefined" || getCookies('userid') === "") {
            $.ajax({
                url: '//web.7k7k.com/source/userP.php?uid=' + getCookies('userid'),
                type: 'get',
                cache: false,
                async: false,
                crossDomain: true,
                dataType: 'json',
                success: function (ispData) {
                    if (typeof (ispData.status) !== "undefined") {
                        isp = ispData.status;
                        setCookies('isP', ispData.status, 1);
                    }
                }
            });
        }
        //
        if (isp === "true") {
            //男女生站内
        }
        else if (typeof (getCookies('flashWatch')) === 'undefined' || getCookies('flashWatch') === '' || getCookies('flashWatch') != '2') {
            setCookies('flashWatch', '2', 1);
            //男女生站内
        }
        else {
            //站外
            try {
                //无法运行flash广告
                if (typeof (adId_play) != 'undefined' || typeof (adId_ie) != 'undefined') { //
                    if (adID_play_ie == '') {
                        adID_play_ie = adId_play;
                        adContainer_play_ie = adContainer_play;
                    }
                    $('#flashAds').attr('class', adContainer_play_ie);
                    var adScript = $('<script>(window.slotbydup = window.slotbydup || []).push({\n' +
                        '            id: "' + adID_play_ie + '",\n' +
                        '            container: "' + adContainer_play_ie + '",\n' +
                        '            async: true\n' +
                        '        });<\/script>');
                    $('body').append(adScript);
                }
            }
            catch (e) {
                console.log(e);
                console.log('加载失败');
            }
        }
    };
    Play35.prototype.showNoUnity3d = function (os) {
        if ($(".play_no_flash").length > 0) {
            $(".play_no_flash").show();
            return;
        }
        var strHtml = "<div class=\"play_no play_no_unity3d\" style=\"display: block;\">\n                        <img src=\"http://www.7k7kjs.cn/static/qike/play/images/Unity3D.png\" alt=\"\" class=\"paly_no_icon\">\n                        <div class=\"play_no_c\">\n                            <i class=\"play_no_c_l\"></i>\n                            <div class=\"play_no_c_r\">\n                                <p>\u6E38\u620F\u9700\u8981Unity3D\u63D2\u4EF6\u7684\u652F\u6301</p>\n                                <p>\u70B9\u51FB\u6309\u94AE\uFF0C\u4E0B\u8F7D\u5B89\u88C5\u63D2\u4EF6\u540E\u5F00\u59CB\u6E38\u620F</p>\n                            </div>\n                        </div>\n                        <a class=\"begin_game begin_game3d\" href=\"".concat(os == 'mac' ? 'http://webplayer.unity3d.com/download_webplayer-3.x/webplayer-mini.dmg' : 'http://wp-china.unity3d.com/download_webplayer-3.x/UnityWebPlayer64.exe', "\">\u5F00\u59CB\u6E38\u620F</a>\n                        <p class=\"rhaz\">\u5982\u4F55\u5B89\u88C5\u63D2\u4EF6</p>\n                        <div class=\"u3d_zybox\">\n                            <img src=\"").concat(os == 'mac' ? 'http://www.7k7kjs.cn/static/qike/play/images/mac_image.jpg' : 'http://www.7k7kjs.cn/static/qike/play/images/mac_image.jpg', "\" alt=\"\" class=\"zhiyin_unity3d\">\n                            <div class=\"u3d_return\"><i></i><span>\u8FD4\u56DE</span></div>\n                        </div>\n                    </div>");
        $(".playNo").show();
        $(".playNo .play_c").append(strHtml);
    };
    // 检测flash环境
    Play35.prototype.flashChecker = function (explore) {
        var hasFlash = 0; //是否安装了flash
        if (explore == "IE") {
            try {
                // @ts-ignore
                var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (swf) {
                    hasFlash = 1;
                }
            }
            catch (e) { }
            return { f: hasFlash };
        }
        else {
            if ($("#jflashTipEmbed").length <= 0) {
                $("body").append("<embed type='application/x-shockwave-flash' src='kk.swf' id='jflashTipEmbed'>");
            }
            var jflashTipEmbed = $("#jflashTipEmbed")[0];
            hasFlash = jflashTipEmbed.PercentLoaded ? 1 : 0;
            return { f: hasFlash };
        }
    };
    Play35.prototype.flashCheckerAsync = function (explore, form) {
        //console.log(explore)
        var hasFlash = 0; //是否安装了flash
        var flashVersion = 0; //flash版本
        if (explore == "IE") {
            try {
                // @ts-ignore
                var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (swf) {
                    hasFlash = 1;
                }
            }
            catch (e) { }
            return { f: hasFlash };
        }
        else if (explore == "Opera") {
            if (form == "pages") {
                return { f: hasFlash };
            }
            return new Promise(function (resolve, reject) {
                if ($("#jflashTipEmbed").length <= 0) {
                    $("body").append("<embed type='application/x-shockwave-flash' src='kk.swf' id='jflashTipEmbed'>");
                }
                var jflashTipEmbed = $("#jflashTipEmbed")[0];
                var n = 0;
                var times = setInterval(function () {
                    n++;
                    if (jflashTipEmbed.PercentLoaded) {
                        resolve({ f: 1 });
                        clearInterval(times);
                    }
                    else if (n > 3) {
                        resolve({ f: 0 });
                        clearInterval(times);
                    }
                }, 80);
            });
        }
        else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                var swf = navigator.plugins["Shockwave Flash"];
                if (swf) {
                    hasFlash = 1;
                }
            }
            return { f: hasFlash };
        }
    };
    Play35.prototype.initFullwanfa = function () {
        var new_wanfah = $(".play_full_screen").height() - 71;
        $(".play_full_screen .sullSm .play_wanfa_c").height(new_wanfah);
        $(".sullSm .play_wanfa_c").mCustomScrollbar({
            theme: "dark",
            alwaysShowScrollbar: 0,
            timeout: 0,
            scrollInertia: 0,
            mouseWheel: { preventDefault: true }
        });
    };
    Play35.prototype.initRightwanfa = function () {
        var new_wanfah = $(".playbox_c").height() - 180;
        if (new_wanfah < this.play_wanfaH) {
            $(".playbox_right .play_wanfa_c").height(new_wanfah - 35);
            // 滚动条渲染
            $(".playbox_right .play_wanfa_c").mCustomScrollbar({
                theme: "dark",
                alwaysShowScrollbar: 0,
                timeout: 0,
                scrollInertia: 0,
                mouseWheel: { preventDefault: true }
            });
        }
    };
    // 缩放
    Play35.prototype.doScale = function (changeW) {
        var that = this;
        var w = $(".play_game #gameobj").width(), h = $(".play_game #gameobj").height();
        var nw = w + changeW, nh = Math.round((w + changeW) / this.bl);
        if (nw > this.maxWidth) {
            arguments.callee.call(this, this.maxWidth - w);
        }
        else if (nh > this.maxHeight) {
            arguments.callee.call(this, this.maxHeight * this.bl - w);
        }
        else if (nw < this.minWidth && !this.isVerticalScreen) {
            arguments.callee.call(this, this.minWidth - w);
        }
        else if (nh < this.minHeight && this.isVerticalScreen) {
            arguments.callee.call(this, this.minHeight * this.bl - w);
        }
        else {
            this.tempWidth1 = nw;
            this.tempHeight1 = nh;
            $(".play_c #gameobj").width(nw).height(nh);
            if (!this.isfullScreen) {
                if (nw == this.maxWidth || nh == this.maxHeight) {
                    $(".jszuijia").hide();
                }
                else {
                    $(".jszuijia").show();
                }
                $(".play_c").width(nw).height(nh);
                // 右侧推荐游戏列表高度处理
                var playboxH = $(".playbox_c").height() - 50;
                $(".playbox_right .game_list ").height(playboxH);
                // 滚动条渲染
                $(".playbox_right .game_list").mCustomScrollbar({
                    theme: "dark",
                    alwaysShowScrollbar: 0,
                    timeout: 0,
                    scrollInertia: 0,
                    mouseWheel: { preventDefault: true },
                    callbacks: {
                        whileScrolling: function (e) {
                            $(".playbox_game_jianbian").show();
                            that.lazyImg(); // 首屏图片懒加载
                        },
                        onTotalScroll: function () {
                            $(".playbox_game_jianbian").hide();
                        }
                    }
                });
                this.initRightwanfa();
            }
            else {
                this.initFullwanfa();
            }
        }
    };
    Play35.prototype.initCritical = function () {
        if (this.isfullScreen) {
            this.maxWidth = $(window).width() < this.minWidth ? this.minWidth : $(window).width(); // 缩放区 最大宽度限制 不超过浏览器宽度
            this.maxHeight = $(window).height() < (this.fullScreenHeader + this.minHeight) ? this.minHeight : $(window).height() - this.fullScreenHeader; // 缩放区 最大高度限制 不超过浏览器高度
        }
        else if (gameInfo.isScale == 0) {
            this.maxWidth = gameInfo.gamewidth;
            this.maxHeight = gameInfo.gameheight;
            this.minWidth = 0;
            this.minHeight = 0;
        }
        else {
            var windowWidth = $(window).width() > 980 ? $(window).width() : 980; // 浏览器宽度 最小 不小于980;
            var windowHeight = $(window).height() > 675 ? $(window).height() : 675; // 浏览器高度 最小 不小于 675;
            this.maxWidth = windowWidth < (this.maxWidth + this.othWidth) ? windowWidth - this.othWidth : 1280; // 缩放区 最大宽度限制 不超过浏览器宽度
            this.maxHeight = windowHeight < (this.maxHeight + this.othHeight) ? windowHeight - this.othHeight : 1080; // 缩放区 最大高度限制 不超过浏览器高度
        }
        var _changeW = this.maxWidth < this.maxHeight * this.bl ? Math.ceil((this.maxWidth - 640) / 5) : Math.ceil((this.maxHeight * this.bl - 640) / 5);
        this.changeW = _changeW > 60 ? _changeW : 60;
    };
    Play35.prototype.initPlaybox = function () {
        this.initCritical();
        this.doScale(10000);
    };
    Play35.prototype.watchFlash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, explore, time;
            return __generator(this, function (_a) {
                that = this;
                explore = that.explore;
                time = setInterval(function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var flashInfo;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, that.flashCheckerAsync(explore)];
                                case 1:
                                    flashInfo = _a.sent();
                                    if (flashInfo.f) {
                                        location.reload();
                                        clearInterval(time);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    Play35.prototype.creatQipao = function (className1, className2, clickNum) {
        var idx = Math.round(Math.random() * 4) + 1; // 生成1-5随机数;
        clickNum = clickNum >= 30 ? 20 : clickNum;
        var qipao = $('<i class="qipao ' + className2 + Math.floor(clickNum / 10) + '"></i>');
        $("." + className1).append(qipao);
        setTimeout(function () { qipao.remove(); }, 1000);
    };
    // 播放区广告显示
    Play35.prototype.showPlayAd = function () {
        if (gameInfo.gamePartner == 'cg') {
            $(".play_load").hide();
            $(".palyCan, .play_header_r,.play_game,.play_game .play_game_ctr li").show();
            $(".play_game #gameobj").css({ 'margin-left': 'auto', 'opacity': '1', 'pointer-events': 'auto' });
            return;
        }
        $(".palyCan, .play_header_r,.play_load,.play_game").show();
        var explore = this.explore;
        if (gameInfo.gameType == 3) {
            $(".palyCan .play_game #gameobj").show().css({ 'margin-left': '-100%', 'opacity': '0', 'pointer-events': 'none' });
        }
        else {
            $(".palyCan .play_game #gameobj").show().css({ 'opacity': '0', 'pointer-events': 'none' });
        }
        $(".playNo").hide();
        // // 广告倒计时
        var that = this;
        $(".palyCan .play_ad_time span").html(12);
        var n = 12;
        this.adTimes = setInterval(function () {
            n--;
            $(".palyCan .play_ad_time span").html(n);
            if (n <= 0) {
                $(".play_load").hide();
                if (gameInfo.gameType != 1 || gameInfo.gameType == 3) {
                    $(".play_game #gameobj").css({ 'margin-left': 'auto', 'opacity': '1', 'pointer-events': 'auto' });
                }
                $(".play_game .play_game_ctr li").show();
                if (gameInfo.isScale != 1) {
                    $(".jsfangda,.jssuoxiao").hide();
                }
                //that.fcmCheck(); //防成谜 判断
                //加载游戏
                if (play22.ncpgm) {
                    play22.playLoading();
                }
                else {
                }
                clearInterval(that.adTimes);
            }
            else if (n == 6) {
                $(".palyCan .play_ad_time").html("点击跳过广告... <span>7</span> 秒").css({ "pointer-events": "all", 'z-index': 10, 'cursor': 'pointer' });
            }
        }, 1000);
    };
    /**
     * 防沉迷 获取
     * @param uid:用户uid,code:防沉迷标识,lastTime:未成年可玩的剩余时间,diffTime(nextTime):还有多久可以玩
     * @returns
     */
    Play35.prototype.fcmGetStatus = function (uid) {
        $.ajax({
            type: 'get',
            url: '//uid.7k7k.com/fcm/api.php?act=getPiNewV2&uid=' + uid,
            dataType: 'json',
            cache: false,
            async: false,
            success: function (res) {
                if (res.code == 0 && res.pi != '') {
                    if (res.adult == 1) {
                        //成年
                        play22.fcmGetStatusData.code = 1;
                    }
                    else {
                        if (res.login == 0) {
                            //未成年可以玩
                            play22.fcmGetStatusData.code = 2;
                            play22.fcmGetStatusData.lastTime = res.lastTime;
                        }
                        else {
                            //未成年不可以玩
                            play22.fcmGetStatusData.code = 3;
                            play22.fcmGetStatusData.diffTime = res.nextTime;
                        }
                    }
                }
                else {
                    //未实名
                    play22.fcmGetStatusData.code = 0;
                }
            },
            error: function (err) {
                //code走默认值5,请求异常
                console.log(err);
            }
        });
    };
    //防沉迷 校验；
    Play35.prototype.fcmCheck = function () {
        //var userid = "833127946" || Union.logFn.readCookie('userid');
        var userid = Union.logFn.readCookie('userid');
        if (userid && userid !== '') { //已登录
            if ($('#noLoginPlay').length !== 0) {
                $('#noLoginPlay').remove();
            }
            play22.fcmGetStatus(userid);
            $('.fixedModal').remove();
            console.log('提示:');
            console.log(play22.fcmGetStatusData);
            var result = play22.fcmGetStatusData;
            if (play22.ncpad) {
                play22.showPlayAd(); // 显示广告
            }
            else {
            }
            if (result.code == 0) { //未实名 --提示实名
                play22.realNameFixed();
            }
            else if (result.code == 1) { //成年
                //展示游戏
                //play22.playLoading();
                play22.ncpgm = true;
                return;
            }
            else if (result.code == 2) { //未成年可玩--监听游戏时长
                //展示游戏
                //play22.playLoading();
                play22.ncpgm = true;
                play22.gameTimeMonitor(result.lastTime);
            }
            else if (result.code == 3) { //未到游戏时间--游戏倒计时
                play22.notGameTimeFixed(result.diffTime);
            }
            else if (result.code == 4) { //游戏时间结束
                play22.gameTimeOverFixed();
            }
            else if (result.code == 5) {
                //请求异常
            }
            //0：未实名；1：成年；2：未成年可玩 3:未成年不可玩
            //var result = { "code": 3, "diffTime": "5", "lastTime": "5" };
        }
        else { //未登录
            $('.fixedModal').remove();
            this.loginTipFixed(); //未登录
        }
    };
    //未登录状态--提示登陆弹框
    Play35.prototype.loginTipFixed = function () {
        $('.play_game').append('<div class="fixedModal flash_modal2" style="display:block;position:absolute;z-index: 9;" onclick="">' +
            '<div class="" style="position: absolute;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.6);" onclick=""></div>' +
            '<div class="flash_con" style="width: 420px;margin-left: -210px;margin-top:-183px">' +
            '<div class="modal_header"><h2>先登录，再游戏</h2></div>' +
            '<div class="flash_con_center" style="border-bottom:none;">' +
            '<div style="\n' +
            '    padding: 0 10px 0 10px;\n' +
            '    background-color: #e5e5e5;\n' +
            '    height: 100px;\n' +
            '"><p style="\n' +
            '" align="left">健康提示：</p><p style="\n' +
            '    font-size: 13px;margin-top: 23px;\n' +
            '" align="left">\n' +
            '如果您登录账号认证信息是<span style="\n' +
            '    color: #f9651c;\n' +
            '">未成年人</span>(未满18岁)您将会受到以下限制:\n' +
            '</p><p style="\n' +
            '    font-size: 14px;\n' +
            '    color: #f9651c;\n' +
            '">仅周五、周六、周日及法定节假日20:00-21:00进行游戏。</p></div>' +
            '<p style="margin-top: 30px; ">根据<a href="http://news.7k7k.com/content/1537718.html" target="_blank" style="color: #0090eb;text-decoration: underline;">相关规定</a>，需要先登录才能继续游戏</p>' +
            '<p>(所有游戏公司都一样)</p>' +
            '<p onclick="Union.logFn.open();Union.logFn.toggleUi(0);"  style="cursor: pointer;background: #FF7E1C;border-radius: 13px;width:146px;margin:30px auto 15px;height: 40px;line-height: 40px;color:#fff" class="login_btn_nc login_btn">立即登录</p>' +
            '</div>' +
            '</div>' +
            '</div>');
    };
    //已登录状态--提示实名认证弹框
    Play35.prototype.realNameFixed = function () {
        $('.play_game').append('<div class="fixedModal flash_modal2" style="display:block;position:absolute;z-index: 9;" onclick="">' +
            '<div class="" style="position: absolute;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.6);" onclick=""></div>' +
            '<div class="flash_con" style="width: 420px;margin-left: -210px;margin-top:-183px">' +
            '<div class="modal_header"><h2>尚未实名认证</h2></div>' +
            '<div class="flash_con_center" style="border-bottom:none;">' +
            '<img style="width: 35%;" src="http://www.7k7kjs.cn/static/qike/play/images/verified_user_img.png" class="modalImg">' +
            '<p style="margin-top: 30px; ">根据<a href="http://news.7k7k.com/content/1537718.html" target="_blank" style="color: #0090eb;text-decoration: underline;">相关要求</a>，想继续游戏，需要先完成实名认证。</p>' +
            '<p style="margin-top: 5px;">实名后可点击<a href="javaScript:location.reload()" target="_self" style="color: #0090eb;text-decoration: underline;">&gt;&gt;刷新认证&lt;&lt;</a>，实名认证<a href="http://web.7k7k.com/kf/" target="_blank" style="color: #0090eb;text-decoration: underline;">遇到问题？</a></p>' +
            '<p style="background: #FF7E1C;border-radius: 13px;width: 146px;margin: 30px auto 15px;height: 40px;line-height: 40px;">' +
            '<a id="realNameAnti" href="http://web.7k7k.com/user/index.php" target="_blank" style="color:#fff"> 前往实名认证</a>' +
            '</p>' +
            //'<p style="font-size: 15px;cursor: pointer;" class="checkAccount login_btn_refresh" onclick="$.ajax({url: \'//web.7k7k.com/user/logout_call.php\',type: \'get\',dataType: \'jsonp\',data: \'\',jsonp: \'callback\',success: function (result) {}});location.reload();">切换账号</p>'+
            '</div>' +
            '</div>' +
            '</div>');
        $('#realNameAnti').on('click', function () {
            var ralNameNums = 0;
            var domVisType = null;
            var realNameDo = false;
            var domVis = setInterval(function () {
                if (document.visibilityState === 'hidden') {
                    domVisType = false;
                }
                if (document.visibilityState === 'visible') {
                    if (domVisType === false) {
                        domVisType = true;
                        realNameDo = true;
                    }
                }
            }, 1000);
            var realNameType = setInterval(function () {
                try {
                    if (realNameDo === true && ralNameNums <= 6) {
                        realNameDo = false;
                        ralNameNums++;
                        $.ajax({
                            url: '//uid.7k7k.com/fcm/api.php',
                            type: 'GET',
                            cache: false,
                            data: {
                                act: 'getPiNew',
                                uid: Union.logFn.readCookie('userid'),
                                version: '220224'
                            },
                            dataType: 'json',
                            success: function (res) {
                                if (res.pi !== '') {
                                    window.clearInterval(realNameType);
                                    window.clearInterval(domVis);
                                    location.reload();
                                }
                            }
                        });
                    }
                    else if (ralNameNums > 6) {
                        window.clearInterval(realNameType);
                        window.clearInterval(domVis);
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }, 5000);
            $('#realNameAnti').unbind('click');
        });
    };
    // 时间戳转换 日期
    Play35.prototype.getTimeStr = function (diffTime) {
        var d = Math.floor(diffTime / (24 * 60 * 60));
        var h = Math.floor(diffTime / (60 * 60) % 24);
        var m = Math.floor(diffTime / 60 % 60);
        var s = Math.floor(diffTime % 60);
        d = d < 10 ? "0" + d : d;
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        return (d != '00' ? (d + '天') : '') + h + ':' + m + ':' + s;
    };
    //未成年--未到游戏时间
    Play35.prototype.notGameTimeFixed = function (diffTime) {
        var that = this;
        $('.play_game').append('<div class="fixedModal flash_modal2" style="display:block;position:absolute;">' +
            '<div style="position: absolute;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.6);" onclick=""></div>' +
            '<div class="flash_con" style="width: 490px;margin-left: -245px;margin-top:-150px">' +
            '<div class="modal_header"><h2>未到游戏时间段</h2></div>' +
            '<div class="flash_con_center" style="border-bottom:none;padding-left: 30px;padding-right: 30px;">' +
            '<p style="line-height: 24px">根据国家防沉迷通知的相关要求和7K7K最新强化的防沉迷策略，由于您是未成年玩家，游戏时间仅能在周五、周六、周日和法定节假日的20时至21时，其他时间无法游戏。</p>' +
            '<div style="margin-top: 30px;background: #F5F5F5;padding: 15px;">' +
            '<p style="margin-top:0px;">距离游戏时间段还有</p>' +
            '<p style="color: #F75005;font-size: 32px;" id="timeinter">' + this.getTimeStr(diffTime) + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
        var time = setInterval(function () {
            diffTime--;
            $("#timeinter").text(that.getTimeStr(diffTime));
            if (diffTime <= 0) {
                clearInterval(time);
                $(".fixedModal").hide();
            }
        }, 1000);
    };
    //未成年监听游戏时长
    Play35.prototype.gameTimeMonitor = function (lasttime) {
        var that = this;
        var time = setInterval(function () {
            lasttime--;
            if (lasttime <= 0) {
                that.gameTimeOverFixed();
                clearInterval(time);
            }
        }, 1000);
    };
    //已登录--未成年--游戏时间结束
    Play35.prototype.gameTimeOverFixed = function () {
        $('.play_game').append('<div class="fixedModal flash_modal2" style="display:block;position:absolute;" onclick="return false;">' +
            '<div style="position: absolute;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.6);" onclick="return false;"></div>' +
            '<div class="flash_con" style="width: 420px;margin-left: -210px;margin-top:-138px">' +
            '<div class="modal_header"><h2>游戏时间已结束</h2></div>' +
            '<div class="flash_con_center" style="border-bottom:none;">' +
            '<img style="width: 35%;" src="http://www.7k7kjs.cn/static/qike/play/images/verified_end_img.png" class="modalImg">' +
            '<p style="margin-top: 30px;margin-bottom: 30px;">您今天的游戏时间已经结束，欢迎下次再来</p>' +
            '</div>' +
            '</div>' +
            '</div>');
    };
    //加载游戏
    Play35.prototype.playLoading = function () {
        var flash_width = gameInfo.gamewidth + "px";
        var flash_height = gameInfo.gameheight + "px";
        var game_path = '';
        var game_id = gameInfo.gameId;
        try {
            var myDateDays = new Date();
            var myDateYearOne = myDateDays.getFullYear().toString();
            var myDateMonthOne = myDateDays.getMonth().toString();
            var myDateDayOne = myDateDays.getDate().toString();
            var myDateHoursOne = myDateDays.getHours().toString();
            var myDateMinutesOne = myDateDays.getMinutes().toString();
            var myDateTimeOne = myDateYearOne + myDateMonthOne + myDateDayOne + myDateHoursOne + myDateMinutesOne;
        }
        catch (e) {
            var myDateTimeOne = '1';
        }
        //同步请求
        $.ajaxSettings.async = false;
        /*if(game_id=='201436'){*/
        $.get("http://www.7k7k.com/swf/game/" + game_id + "/?time=" + myDateTimeOne, function (data) {
            if (typeof (data.result.url) !== "undefined") {
                game_path = data.result.url;
            }
            else {
                console.log('地址异常');
            }
        }, 'json');
        /*}else {
            $.get("http://www.7k7k.com/open_api/request?action=Flash.Game&game="+game_id+"&time="+myDateDayOne,function (data) {
                if(typeof(data.result.url)!=="undefined"){
                    game_path = data.result.url
                }else {
                    console.log('地址异常')
                }
            },'json')
        }*/
        $.ajaxSettings.async = true;
        if (game_path.indexOf('.swf') !== -1) {
            $('.play_game').append('<embed type="application/x-shockwave-flash" id="gameobj" name="gameobj" width="640" height="458" src="' + game_path + '" allowscriptaccess="never" allownetworking="internal" wmode="Opaque" quality="high">\n' +
                '            <div class="loading">\n' +
                '            <i class="bg_star"></i>\n' +
                '                <i class="bg_yun"></i>\n' +
                '                <div class="loading_con">\n' +
                '            <img src="http://www.7k7kjs.cn/static/qike/play/images/logo.png" alt="">\n' +
                '            <div class="progress">\n' +
                '\n' +
                '            <div class="progress_actived">\n' +
                '            <i class="star_b"></i>\n' +
                '                <i class="star_s star_s1"></i>\n' +
                '                <i class="star_s star_s2"></i>\n' +
                '                <i class="star_s star_s3"></i>\n' +
                '                <i class="star_s star_s4"></i>\n' +
                '                <i class="star_s star_s5"></i>\n' +
                '                <i class="star_s star_s6"></i>\n' +
                '                <i class="star_s star_s7"></i>\n' +
                '                <i class="star_s star_s8"></i>\n' +
                '                <i class="star_s star_s9"></i>\n' +
                '                <i class="star_s star_s10"></i>\n' +
                '                <i class="star_s star_s11"></i>\n' +
                '                </div>\n' +
                '                <p class="loading_bottom">正在加载 <span>0%</span></p>\n' +
                '            </div>\n' +
                '            </div>\n' +
                '            </div>');
        }
        else {
            $('.play_game').append('<iframe style=width:' + flash_width + ';height:' + flash_height + '; src=' + game_path + ' frameborder="0" name="gameobj" id="gameobj" height="600" width="338" marginwidth="0" marginheight="0" scrolling="no" border="0"></iframe>');
        }
        $(".jszuijia").click();
        $(".loading").show();
        var gameobj = $("#gameobj")[0];
        var explore = this.explore;
        var n = 0, k = 0;
        var times = setInterval(function () {
            if (gameInfo.gamePartner == 'cg') {
                n++;
                if (n >= 60 || n < 0) {
                    $(".loading").hide();
                    clearInterval(times);
                }
                else {
                    $(".progress_actived").css("width", n + '%');
                    $(".loading_bottom span").text(n + '%');
                }
            }
            else {
                try {
                    if (gameobj.PercentLoaded && n >= 0) {
                        n = gameobj.PercentLoaded();
                        if (n == 100 || n < 0) {
                            $(".loading").hide();
                            if (gameInfo.gameType != 3) {
                                $(".play_game #gameobj").show().css({ 'margin-left': 'auto', 'opacity': '1', 'pointer-events': 'auto' });
                            }
                            clearInterval(times);
                            /*if(play22.getCooks('gameProgressAd') != '1'&&play22.getCooks('isP')!="true"){
                                play22.gameProgressAd(5)
                            }*/
                        }
                        else {
                            $(".progress_actived").css("width", n + '%');
                            $(".loading_bottom span").text(n + '%');
                        }
                    }
                    else if (k < 20 && n == 0) {
                        k++;
                    }
                    else {
                        $(".loading").hide();
                        if (gameInfo.gameType != 3) {
                            $(".play_game #gameobj").show().css({ 'margin-left': 'auto', 'opacity': '1', 'pointer-events': 'auto' });
                        }
                        clearInterval(times);
                        /*if(play22.getCooks('gameProgressAd') != '1'&&play22.getCooks('isP')!="true"){
                            play22.gameProgressAd(5)
                        }*/
                    }
                }
                catch (err) {
                    $(".loading").hide();
                    if (gameInfo.gameType != 3) {
                        $(".play_game #gameobj").show().css({ 'margin-left': 'auto', 'opacity': '1', 'pointer-events': 'auto' });
                    }
                    clearInterval(times);
                    /*if(play22.getCooks('gameProgressAd') != '1'&&play22.getCooks('isP')!="true"){
                        play22.gameProgressAd(5)
                    }*/
                }
            }
        }, 100);
    };
    Play35.prototype.onReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, userAgent, storageKey, playedStr, gameStorageStr, n_1, times_1, flashInfo, os, h5tuijian;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        this.play_wanfaH = $(".playbox_right .play_wanfa").height();
                        userAgent = navigator.userAgent;
                        if (userAgent.indexOf('spider') > -1 || userAgent.indexOf('bot') > -1) {
                            $(".game_item img,#pinglun").each(function () {
                                $(this).attr('src', $(this).attr('lz_src'));
                            });
                            $(".play_c .play_load,.play_c .play_game,.play_info_time,.wrap_ad1,.wrap_ad2,.wrap_page_ad2").hide();
                            $(".play_info").show();
                            return [2 /*return*/];
                        }
                        // 当前游戏 写入我玩过的缓存
                        if (window.Storage) {
                            storageKey = 'unlogin_playedgames_small';
                            if (Union.logFn.readCookie('userid') && Union.logFn.readCookie('userid') !== '') {
                                storageKey = "prev_user_playedgames_small";
                            }
                            playedStr = localStorage.getItem(storageKey);
                            gameStorageStr = '1|' + gameInfo.gameId + '|' + gameInfo.gameName + '|' + new Date().getTime() + '|' + 'http://www.7k7k.com/flash/' + gameInfo.gameId + '.htm' + '|' + gameInfo.gamePic;
                            if (playedStr) {
                                if (playedStr.indexOf(gameInfo.gameId) < 0) {
                                    playedStr += ',' + gameStorageStr;
                                }
                                else {
                                    playedStr = playedStr.replace(new RegExp(gameInfo.gameName + "\\|[0-9]{13}", "g"), gameInfo.gameName + '|' + new Date().getTime());
                                }
                                localStorage.setItem(storageKey, playedStr);
                            }
                            else {
                                localStorage.setItem(storageKey, gameStorageStr);
                            }
                        }
                        if (!(gameInfo.outLink && gameInfo.outLink !== '')) return [3 /*break*/, 1];
                        $(".play_c .play_load,.play_c .play_game, .play_ctr").hide();
                        $(".play_c .play_info").show();
                        $(".palyCan").css({ "padding": '0px 15px 15px' });
                        $(".play_c").height(540);
                        n_1 = 10, times_1 = setInterval(function () {
                            n_1--;
                            $(".play_info_time>span").html(n_1);
                            n_1 <= 0 && (clearInterval(times_1), window.location.href = gameInfo.outLink);
                        }, 1000);
                        return [3 /*break*/, 4];
                    case 1:
                        // 3. flash和u3d环境判断
                        /**
                         * 1 Flash; 3 Unity3D; 4 H5游戏但只能电脑玩，手机不兼容; 5 H5游戏电脑手机都能玩; 6 都改成4了，废弃
                         */
                        if (gameInfo.gamePartner == 'cg') {
                            this.flowerRank();
                        }
                        if (!(gameInfo.gameType == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.flashCheckerAsync(this.explore)];
                    case 2:
                        flashInfo = _a.sent();
                        //console.log("flashInfo:",flashInfo)
                        if (flashInfo.f == 1) { // flash已授权/可用
                            this.initPlaybox();
                            //this.showPlayAd(); // 显示广告
                            //验证防沉迷
                            this.fcmCheck();
                            gameInfo.isScale == 1 && $(".playbox").removeClass("playbox_noScale");
                        }
                        else {
                            this.ncpad = false;
                            $(".palyCan, .play_header_r").hide();
                            $(".begin_gameEm_box").html('<embed type="application/x-shockwave-flash">');
                            os = this.getOS();
                            if (os == "Win7" || os == "Win8" || os == "Win10") {
                                this.showNoDownload("oth");
                            }
                            else if (os == "Mac") {
                                this.showNoDownload("mac");
                            }
                            else {
                                this.showNoDownload("oth");
                            }
                            this.watchFlash(); // 启动监听flash授权情况
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        if (gameInfo.gameType == 3) { //U3D
                            //console.log("U3D");
                            unityObject.embedUnity("player", "213", 640, 480, null, null, function (t) {
                                //console.log(123456);
                                if (t.success) {
                                    that.initPlaybox();
                                    //that.showPlayAd(); // 显示广告
                                    //验证防沉迷
                                    that.fcmCheck();
                                    gameInfo.isScale == 1 && $(".playbox").removeClass("playbox_noScale");
                                }
                                else {
                                    //不显示广告的情况,记录下来，登录后判断
                                    that.ncpad = false;
                                    $(".palyCan, .play_header_r").hide();
                                    var agent = navigator.userAgent.toLowerCase();
                                    agent.indexOf('mac') >= 0 ? that.showNoUnity3d('mac') : that.showNoUnity3d('win');
                                }
                            });
                        }
                        else if (gameInfo.gameType == 4) { //H5游戏但只能电脑玩，手机不兼容
                            if (play22.IEVersion() != -1) {
                                this.ncpad = false;
                                $(".palyCan, .play_header_r").hide();
                                $(".begin_gameEm_box").html('<embed type="application/x-shockwave-flash">');
                                this.showNoDownload("oth");
                            }
                            else {
                                this.initPlaybox();
                                //this.showPlayAd(); // 显示广告
                                //验证防沉迷
                                this.fcmCheck();
                                gameInfo.isScale == 1 && $(".playbox").removeClass("playbox_noScale");
                            }
                        }
                        else if (gameInfo.gameType == 5) { //H5游戏电脑手机都能玩;
                            if (play22.IEVersion() != -1) {
                                this.ncpad = false;
                                $(".palyCan, .play_header_r").hide();
                                $(".begin_gameEm_box").html('<embed type="application/x-shockwave-flash">');
                                this.showNoDownload("oth");
                            }
                            else {
                                this.initPlaybox();
                                //this.showPlayAd(); // 显示广告
                                //验证防沉迷
                                this.fcmCheck();
                                gameInfo.isScale == 1 && $(".playbox").removeClass("playbox_noScale");
                                $(".shoujiwan").css({ "display": "inline-block" });
                            }
                        }
                        else if (gameInfo.gameType == 6) { //flash转h5,只能电脑玩
                            if (play22.IEVersion() != -1) {
                                this.ncpad = false;
                                $(".palyCan, .play_header_r").hide();
                                $(".begin_gameEm_box").html('<embed type="application/x-shockwave-flash">');
                                this.showNoDownload("oth");
                            }
                            else {
                                this.initPlaybox();
                                //this.showPlayAd(); // 显示广告
                                //验证防沉迷
                                this.fcmCheck();
                                gameInfo.isScale == 1 && $(".playbox").removeClass("playbox_noScale");
                            }
                        }
                        _a.label = 4;
                    case 4:
                        this.lazyImg(); // 首屏图片懒加载
                        if (gameInfo.gamePartner == 'cg') {
                            $(".playbox").addClass("playbox_chengguang");
                            $(".wrap_switch .game_list").mCustomScrollbar({
                                theme: "dark",
                                alwaysShowScrollbar: 0,
                                timeout: 0,
                                scrollInertia: 0,
                                mouseWheel: { preventDefault: true },
                                callbacks: {
                                    whileScrolling: function (e) {
                                        that.lazyImg(); // 首屏图片懒加载
                                    }
                                }
                            });
                        }
                        else {
                            // 滚动条渲染
                            $(".playbox_right .play_wanfa_c").mCustomScrollbar({
                                theme: "dark",
                                alwaysShowScrollbar: 0,
                                timeout: 0,
                                scrollInertia: 0,
                                mouseWheel: { preventDefault: true }
                            });
                            // 滚动条渲染
                            $(".sullSm .play_wanfa_c").mCustomScrollbar({
                                theme: "dark",
                                alwaysShowScrollbar: 0,
                                timeout: 0,
                                scrollInertia: 0,
                                mouseWheel: { preventDefault: true }
                            });
                            // 滚动条渲染
                            $(".playbox_right .game_list").mCustomScrollbar({
                                theme: "dark",
                                alwaysShowScrollbar: 0,
                                timeout: 0,
                                scrollInertia: 0,
                                mouseWheel: { preventDefault: true },
                                callbacks: {
                                    whileScrolling: function (e) {
                                        $(".playbox_game_jianbian").show();
                                        that.lazyImg(); // 首屏图片懒加载
                                    },
                                    onTotalScroll: function () { $(".playbox_game_jianbian").hide(); }
                                }
                            });
                        }
                        h5tuijian = new Swiper('.wrap_playbox .swiper-container', {
                            paginationClickable: true,
                            loop: true // 循环模式选项
                        });
                        $('.wrap_playbox .icon_left').on('click', function () { h5tuijian.swipePrev(); });
                        $('.wrap_playbox .icon_right').on('click', function () { h5tuijian.swipeNext(); });
                        this.getPlayedRender(".wrap_change"); // 侧边栏我玩过的
                        return [4 /*yield*/, this.renderGuessLike()];
                    case 5:
                        _a.sent(); //猜你喜欢
                        setTimeout(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, that.loadPageAD()]; // 精品页游广告
                                        case 1:
                                            _a.sent(); // 精品页游广告
                                            return [4 /*yield*/, that.loadAD('.wrap_ad2', 578, 579)]; //热门网游广告
                                        case 2:
                                            _a.sent(); //热门网游广告
                                            return [4 /*yield*/, that.loadPageAD2('.wrap_page_ad2', 494, 577)];
                                        case 3:
                                            _a.sent(); // 热门网游广告
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }, 60);
                        return [2 /*return*/];
                }
            });
        });
    };
    Play35.prototype.eventHandle = function () {
        var that = this;
        // 切换 播放区右侧播放列表
        $(".playbox_right .w_tabs_i").click(function () {
            $(".playbox_right .w_tabs_i").removeClass("w_tabs_ied");
            $(this).addClass("w_tabs_ied");
            var idx = $(this).index();
            $(".playbox_game_box ul").hide().eq(idx).show();
        });
        // 切换 播放区右侧播放列表
        $(".wrap_switch .w_tabs_i").click(function () {
            $(".wrap_switch .w_tabs_i").removeClass("w_tabs_ied");
            $(this).addClass("w_tabs_ied");
            var idx = $(this).index();
            $(".switch_game_box ul").hide().eq(idx).show();
        });
        $(".wrap_switch .game_list").mCustomScrollbar({
            theme: "dark",
            alwaysShowScrollbar: 0,
            timeout: 0,
            scrollInertia: 0,
            mouseWheel: { preventDefault: true }
        });
        //开关灯
        $(".play_guandeng").click(function () {
            var w = $(".play_game #gameobj").width(), h = $(".play_game #gameobj").height();
            $(".play_game #gameobj").width(w).height(h);
            $(".play_game").addClass("play_game_close");
            $(".play_load").css({ "background-color": "#000" });
        });
        $(".play_kaideng").click(function () {
            $(".play_game").removeClass("play_game_close");
            $(".play_game #gameobj").css({ "width": '100%', "height": '100%' });
            $(".play_load").css({ "background-color": "#f7f7f7" });
        });
        // 跳过广告
        $(".play_ad_time").click(function () {
            $(".play_load").hide();
            $(".play_game .play_game_ctr li").show();
            if (gameInfo.isScale != 1) {
                $(".jsfangda,.jssuoxiao").hide();
            }
            var explore = that.explore;
            if (gameInfo.gameType != 1 || gameInfo.gameType == 3) {
                $(".play_game #gameobj").css({ 'margin-left': 'auto', 'opacity': '1', 'pointer-events': 'auto' });
            }
            clearInterval(that.adTimes);
            //that.fcmCheck();
            //加载游戏
            if (play22.ncpgm) {
                play22.playLoading();
            }
            else {
            }
        });
        // 全屏
        $(".jsquanping").click(function () {
            that.tempWidth = $(".play_game #gameobj").width();
            that.tempHeight = $(".play_game #gameobj").height();
            $('.play_game_ctr').css('z-index', '10');
            that.isfullScreen = true;
            if (gameInfo.isScale == 1) {
                var windowWidth = $(window).width(), windowHeight = $(window).height();
                if (that.bl > windowWidth / (windowHeight - that.fullScreenHeader)) {
                    $(".play_game #gameobj").width(windowWidth).height(windowWidth / that.bl);
                }
                else {
                    $(".play_game #gameobj").width((windowHeight - that.fullScreenHeader) * that.bl).height(windowHeight - that.fullScreenHeader);
                }
            }
            $(".play_game").addClass("play_full_screen");
            that.initFullwanfa();
            $("body").addClass("fullBody");
            that.initCritical();
        });
        // 退出全屏
        $(".play_game_tuichu").click(function () {
            that.isfullScreen = false;
            $(".play_game").removeClass("play_full_screen");
            $("body").removeClass("fullBody");
            $(".play_game #gameobj").css({ "width": that.tempWidth, "height": that.tempHeight });
            that.initCritical();
        });
        // flash 弹框
        $(document).on('mouseup', '.play_no_flash .begin_game,.play_no_download .dl_r_flash', function () {
            if ($(".flash_modal1").length > 0) {
                $(".flash_modal1").show();
                return;
            }
            if (gameInfo.gameType == 4 || gameInfo.gameType == 5) {
                if (play22.IEVersion() != -1) {
                    $("body").append("<div class=\"fixedModal flash_modal1\" style=\"display:block\">\n                                    <div class=\"fixedModal_mask\"></div>\n                                    <div class=\"flash_con\">\n                                        <div class=\"modal_header\">\n                                            <h2>\u5982\u4F55\u5207\u6362\u9AD8\u901F/\u8D85\u901F\u6A21\u5F0F\u6559\u7A0B</h2>\n                                            <i class=\"close_fixedModal\"></i>\n                                        </div>\n                                        <div class=\"flash_con_center\">\n                                        <p style=\"margin: 0 0 10px 30px;float: left;\">1\u3001\u70B9\u51FB\u5730\u5740\u680F\u6B64\u5904\u6309\u94AE</p>\n                                            <img src=\"//www.7k7kjs.cn/static/qike/play/images/iejc1.png\" class=\"modalImg\">\n                                        <p style=\"margin: 0 0 10px 30px;float: left;\">2\u3001\u9009\u62E9\u9AD8\u901F/\u8D85\u901F\u6A21\u5F0F</p>\n                                            <img src=\"//www.7k7kjs.cn/static/qike/play/images/iejc2.png\" class=\"modalImg\"\n                                        </div>\n                                    </div>\n                                </div>");
                }
            }
            else {
                $("body").append("<div class=\"fixedModal flash_modal1\" style=\"display:block\">\n                                    <div class=\"fixedModal_mask\"></div>\n                                    <div class=\"flash_con\">\n                                        <div class=\"modal_header\">\n                                            <h2>\u8BF7\u5141\u8BB8Flash</h2>\n                                            <i class=\"close_fixedModal\"></i>\n                                        </div>\n                                        <div class=\"flash_con_center\">\n                                            <img src=\"http://www.7k7kjs.cn/static/qike/play/images/".concat(that.explore, "1.jpg\" class=\"modalImg\">\n                                            <p>\u627E\u5230\u6D4F\u89C8\u5668\u5F39\u51FA\u7684\u5BF9\u8BDD\u6846\uFF0C\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u70B9\u51FB\u201C\u5141\u8BB8\u201D\u6309\u94AE\u4EE5\u8FD0\u884CFlash</p>\n                                        </div>\n                                        <div class=\"flash_modal_btn\">\u6CA1\u6709\u627E\u5230\u5BF9\u8BDD\u6846</div>\n                                    </div>\n                                </div>"));
            }
        });
        $(document).on('click', '.flash_modal_btn', function () {
            $(".fixedModal").hide();
            if ($(".flash_modal2").length > 0) {
                $(".flash_modal2").show();
                return;
            }
            $('body').append("<div class=\"fixedModal flash_modal2\" style=\"display:block\">\n                                <div class=\"fixedModal_mask\"></div>\n                                <div class=\"flash_con\">\n                                    <div class=\"modal_header\"><h2>\u8BF7\u5141\u8BB8Flash</h2><i class=\"close_fixedModal\"></i> </div>\n                                    <div class=\"flash_con_center\"><img src=\"http://www.7k7kjs.cn/static/qike/play/images/".concat(that.explore, "2.jpg\" class=\"modalImg\"></div>\n                                    <div class=\"fixedModal_more\"> <a href=\"http://www.7k7k.com/help/flashplay.html\">\u67E5\u770B\u66F4\u591A\u89E3\u51B3\u65B9\u6848</a> </div>\n                                </div>\n                            </div>"));
        });
        $(document).on('click', '.close_fixedModal,.fixedModal_mask', function () { $(".fixedModal").hide(); });
        // U3D如何安装
        $(".rhaz").click(function () { $(".u3d_zybox").show(); });
        $(".u3d_return").click(function () { $(".u3d_zybox").hide(); });
        // 缩小
        $(".jssuoxiao").click(function () { that.doScale(-that.changeW); });
        // 放大
        $(".jsfangda").click(function () {
            if (that.isfullScreen) {
                that.initCritical();
            }
            else {
                that.maxWidth = 2560;
                that.maxHeight = 1920;
            }
            that.doScale(that.changeW);
        });
        // 浏览器拖动窗口
        $(window).resize(function () {
            // 游戏可缩放，并且能正常播放,监听窗口缩放;
            if (gameInfo.outLink && gameInfo.outLink !== '') {
                return;
            }
            that.maxWidth = 1280;
            that.maxHeight = 1080;
            if (gameInfo.isScale == 1 && $(".palyCan").css('display') == 'block') {
                that.initPlaybox();
            }
            ;
        });
        //最佳
        $(".jszuijia").click(function () {
            that.maxWidth = 1280;
            that.maxHeight = 1080;
            that.initPlaybox();
        });
        // 重玩
        $(".jschongwan").click(function () {
            var src = $(".play_game #gameobj").attr('src');
            $(".play_game #gameobj").attr('src', src);
        });
        // 点赞
        var clickNum1 = 0, clickTimes1;
        $(".jsdianzan").click(function () {
            return __awaiter(this, void 0, void 0, function () {
                var netTime, goodbad, userid, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            netTime = new Date().getTime();
                            (netTime - clickTimes1) > 1000 ? clickNum1 = 0 : clickNum1++,
                                clickTimes1 = netTime;
                            that.creatQipao("jsdianzan", "qipao_dz", clickNum1);
                            goodbad = that.getStorage('goodbad');
                            if (!(!goodbad || goodbad != 1)) return [3 /*break*/, 4];
                            if (!(Union.logFn.readCookie('userid') && Union.logFn.readCookie('userid') !== '')) return [3 /*break*/, 2];
                            userid = Union.logFn.readCookie('userid');
                            return [4 /*yield*/, that.jsonpRequest({
                                    url: 'http://www.7k7k.com/open_api/request?action=Flash.GoodBad&game_id=' + gameInfo.gameId + '&user_id=' + userid + '&type=1',
                                    callback: "callbackGoodBad1"
                                })];
                        case 1:
                            res = _a.sent();
                            res.result.error == 0 && that.setStorage('goodbad', 1, 86400);
                            return [3 /*break*/, 3];
                        case 2:
                            Union.logFn.open();
                            Union.logFn.toggleUi(0);
                            _a.label = 3;
                        case 3:
                            that.analysisAddImg('game.goodbad', {
                                "gid": gameInfo.gameId,
                                "type": "1"
                            });
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
        // 差评
        var clickNum2 = 0, clickTimes2;
        $(".jschaping").click(function () {
            return __awaiter(this, void 0, void 0, function () {
                var netTime, goodbad, userid, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            netTime = new Date().getTime();
                            (netTime - clickTimes2) > 1000 ? clickNum2 = 0 : clickNum2++,
                                clickTimes2 = netTime;
                            that.creatQipao("jschaping", "qipao_cp", clickNum2);
                            goodbad = that.getStorage('goodbad');
                            if (!(!goodbad || goodbad != 2)) return [3 /*break*/, 4];
                            if (!(Union.logFn.readCookie('userid') && Union.logFn.readCookie('userid') !== '')) return [3 /*break*/, 2];
                            userid = Union.logFn.readCookie('userid');
                            return [4 /*yield*/, that.jsonpRequest({
                                    url: 'http://www.7k7k.com/open_api/request?action=Flash.GoodBad&game_id=' + gameInfo.gameId + '&user_id=' + userid + '&type=2',
                                    callback: "callbackGoodBad2"
                                })];
                        case 1:
                            res = _a.sent();
                            res.result.error == 0 && that.setStorage('goodbad', 2, 86400);
                            return [3 /*break*/, 3];
                        case 2:
                            Union.logFn.open();
                            Union.logFn.toggleUi(0);
                            _a.label = 3;
                        case 3:
                            that.analysisAddImg('game.goodbad', {
                                "gid": gameInfo.gameId,
                                "type": "2"
                            });
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
        // 写评论
        $(".xiepinglun").click(function () { window.scrollTo(0, $('.wrap_pinglun').offset().top); });
        // 手机玩
        $(".shoujiwan").click(function () { window.scrollTo(0, $('.game_shouji').offset().top); });
        // qq分享
        $("#share_qq").click(function () {
            var desc = $("meta[name='Description']").attr('content');
            var title = $('title').html();
            var pic = $("meta[property='og:image']").attr('content');
            var url = 'http://www.7k7k.com/flash/' + gameInfo.gameId + '.htm';
            window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + url + '&title=' + title + '&pics=' + pic + '&desc=&summary=' + desc + '&site=baidu');
        });
        // 游戏玩法 关闭
        $(".play_wanfa_close").click(function () {
            $(".play_wanfa").hide();
        });
        // 游戏玩法 展开
        $(".play_ctr_zmwan").click(function () {
            $(".playbox_right .play_wanfa").css('display') == 'block' ? $(".play_wanfa").hide() : $(".play_wanfa").show();
        });
        // 全屏状态 游戏玩法
        $(".sullSm_zk").click(function () {
            $(".sullSm").hasClass('sullSm_open') ? $(".sullSm").removeClass('sullSm_open') : $(".sullSm").addClass('sullSm_open');
        });
        $(document).on('click', '.play_no_download .dl_r_change', function () {
            if ($(".play_no_download").hasClass("play_no_download_oth")) {
                $(".play_no_download").removeClass("play_no_download_oth");
                $(".dl_r span").text("支持Flash的第三方浏览器");
            }
            else {
                $(".dl_r span").text("官方推荐使用7k7k游戏浏览器");
                $(".play_no_download").addClass("play_no_download_oth");
            }
        });
        $(document).on('mouseover mouseout', '.dl_wenhao', function (event) {
            if (event.type == "mouseover") {
                $(".dl_h_hover").show();
            }
            else if (event.type == "mouseout") {
                $(".dl_h_hover").hide();
            }
        });
        // 鲜花榜
        $(".xianhua_Rank").click(function () { $(".xianhua_modal").show(); });
        // 禁右
        $(document).bind("contextmenu", function (e) {
            return false;
        });
        //查询是否收藏
        /*$.ajax({
            url:'//www.7k7k.com/open_api/request/?action=Faved.CheckFavedGame&gid='+ gameInfo.gameId,
            type: "GET",
            dataType:'jsonp',
            success:function(res){
                if(res.result.status == 1){
                    if($('.flash_icon3.flash_icon3_shoucang').length>0){
                        $('.flash_icon3.flash_icon3_shoucang').css('background-position','0 -64px')
                    }

                    //$(".shoucang_tip span").html('游戏已收藏');
                    //$(".shoucang_tip").show().delay(1000).hide(0).css({"margin-left":"-45px"});;
                }
            }
        })*/
        // 收藏游戏
        $(".shoucang").click(function () {
            Union.logFn.config({ "logAction": 0, "regAction": 0, autokk: 1 });
            if (Union.logFn.readCookie('userid') && Union.logFn.readCookie('userid') !== '') {
                $.ajax({
                    url: '//api.7k7k.com/open_api/request/?action=Faved.FavedGame&gid=' + gameInfo.gameId,
                    type: "GET",
                    dataType: 'jsonp',
                    success: function (res) {
                        if (res.result.status == 1) {
                            if ($('.flash_icon3.flash_icon3_shoucang').length > 0) {
                                $('.flash_icon3.flash_icon3_shoucang').css('background-position', '0 -64px');
                            }
                            //$(".shoucang_tip span").html('游戏已收藏');
                            //$(".shoucang_tip").show().delay(1000).hide(0).css({"margin-left":"-45px"});;
                        }
                        else if (res.result.status == 0) {
                            window.open("//www.7k7k.com/faved/");
                        }
                        else if (res.result.status == 2) {
                            $(".shoucang_tip span").html('收藏游戏数量已到上限');
                            $(".shoucang_tip").show().delay(2000).hide(0).css({ "margin-left": "-77px" });
                        }
                    }
                });
            }
            else {
                Union.logFn.open();
                Union.logFn.toggleUi(0);
            }
        });
        var pageGameTop = $(".fixed-scroll").offset().top;
        var columnsTop = $(".columns").offset().top;
        $(window).on('scroll', function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // if((!that.wrap_ad2ReadyLoad) && $(window).height() > ($(".wrap_ad2").offset().top - $(document).scrollTop())){
                    //     that.wrap_ad2ReadyLoad = true;
                    //     await that.loadAD('.wrap_ad2', 578, 579) //热门网游广告
                    // }
                    // if((!that.wrap_page_ad2ReadyLoad) && $(window).height() > ($(".wrap_page_ad2").offset().top - $(document).scrollTop())){
                    //     that.wrap_page_ad2ReadyLoad = true;
                    //     await that.loadPageAD2('.wrap_page_ad2', 494, 577); // 热门网游广告
                    // }
                    // if((!that.wrap_pageadReadyLoad) && $(window).height() > ($(".wrap_pagead").offset().top - $(document).scrollTop())){
                    //     that.wrap_pageadReadyLoad = true;
                    //     await that.loadPageAD() // 精品页游广告
                    // }
                    that.lazyImg();
                    if ((columnsTop + $(".columns").height()) < ($(document).scrollTop() + $(".fixed-scroll").height())) {
                        $(".fixed-scroll").css({
                            "position": 'absolute',
                            'top': 'auto',
                            "bottom": 0
                        });
                    }
                    else if ((pageGameTop - $(document).scrollTop()) <= 0) {
                        $(".fixed-scroll").css({
                            "position": 'fixed',
                            'top': 0,
                            'bottom': 'auto'
                        });
                    }
                    else {
                        $(".fixed-scroll").css({ "position": 'relative' });
                    }
                    return [2 /*return*/];
                });
            });
        });
    };
    return Play35;
}(Qike));
var play22 = new Play35();
// 1. 新的同步方法获取flash状态
// 2. 未授权开启监听，监听状态改变 刷新页面；
