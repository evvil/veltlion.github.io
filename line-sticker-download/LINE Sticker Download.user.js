// ==UserScript==
// @name            LINE Sticker Download
// @name:zh-CN      LINE Sticker Download
// @namespace       https://veltlion.github.io/line-sticker-download
// @include         https://store.line.me/stickershop/product/*
// @version         1.3.1
// @description     Add download button for line sticker store
// @description:zh-cn  在 LINE STORE Sticker 页面添加下载按钮
// @author          空
// @grant           none
// ==/UserScript==

var id = window.location.pathname.replace(/[^\d]/g, '');
var link = 'https://sdl-stickershop.line.naver.jp/stickershop/v1/product/' + id + '/iphone/stickers@2x.zip';
var aslink = 'https://sdl-stickershop.line.naver.jp/stickershop/v1/product/' + id + '/iphone/stickerpack@2x.zip';
if ($("span").hasClass("MdIcoAni_b") || $("span").hasClass("MdIcoPlay_b") ||$("span").hasClass("MdIcoSound_b") ||
    $("span").hasClass("MdIcoFlashAni_b") || $("span").hasClass("MdIcoFlash_b")) link = aslink;
var lang = navigator.language;
var btnstr = 'Download';
if (lang.indexOf('zh') > -1) btnstr = '下载';
else if (lang.indexOf('ja') > -1) btnstr = 'ダウンロード';
var btn = '<li class="mdCMN08Li" style="list-style-type: none">';
    btn += '<a href="' + link + '"class="MdBtn01 mdBtn01" style="background: #33b1ff">';
    btn += '<span class="mdBtn01Inner">';
    btn += '<span class="mdBtn01Txt">' + btnstr + '</span>';
    btn += '</span></a></li>';

if ($("div").hasClass("mdCMN08Txt")) {
    var gift = document.getElementsByClassName("mdCMN08Ul")[0];
    gift.removeChild(gift.firstElementChild);
    gift.removeChild(gift.firstElementChild);
    $("div.mdCMN08Txt>ul").prepend(btn);
}
else if ($("div").hasClass("mdMN05Btn")) {
    $(".MdBtn01").remove();
    $("div.MdMN05Error").append(btn);
}
