!function ($, undefined) {
    Union = window.Union || {}, Array.prototype.indexOf = function (n) {
        for (var o = 0, s = this.length; o < s; o++)
            if (this[o] === n) return o;
        return -1
    }, Union.logFn = {
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
        msg: ["这是系统自动分配给你的kk号", "4-32位数字、字母、或组合", "6-32位数字、字母、_或组合", "两次密码不一致", "用户名已被注册", "用户名可以使用", "上次使用QQ登陆", "上次使用微信登陆", "上次使用账号登陆", "身份证上的姓名", "身份证号码", "真实姓名为2-12个汉字", "身份证号码为15或18位数字", "注册失败，你还是未成年！", "第三方登录无需注册"],
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
        },config: function (n) {
            $.extend(Union.logFn.defaults, n)
        },
        readCookie: function (n) {
            var o, s = "";
            return "string" == typeof n && "" !== n &&
            (o = String(document.cookie).match(new RegExp("(?:^| )" + n + "(?:(?:=([^;]*))|;|$)"))) && (s = o[1] ? decodeURIComponent(o[1]) : ""), s
        },
    }
}(jQuery);
$(function () {
    Union.logFn.config({"logAction": 0, "regAction": 0, autokk: 1});
    function isLogin() {
        // 判断是否登陆
        if (Union.logFn.readCookie('userid') && Union.logFn.readCookie('userid') !== '') {
            try {
                if(window.jQuery){

                }else {
                    window.jQuery = jquery
                }
                var myScript =document.createElement('script')
                myScript.type = "text/javascript";
                myScript.src='//n.7k7kimg.cn/uploads/cdn/api/loginPlus/js/built.2ebc4bc6.202203111930.js';
                document.body.appendChild(myScript);
            }catch (e){
                console.log(e)
                console.log('Anti加载失败')
            }
        } else {
            console.log('跳登录');
            window.location = 'http://h5.7k7k.com/users'+'?refer='+window.location.href;
        }
    }
    isLogin()
})
