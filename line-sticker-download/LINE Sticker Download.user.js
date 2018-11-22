// ==UserScript==
// @name               LINE Sticker Download
// @name:zh-CN         LINE Sticker Download
// @namespace          https://veltlion.github.io/line-sticker-download
// @include            https://store.line.me/stickershop/product/*
// @version            1.4.1
// @description        Add download button for line sticker store
// @description:zh-cn  在 LINE STORE Sticker 页面添加下载按钮
// @author             空
// @grant              GM_download
// ==/UserScript==

var id = window.location.pathname.replace(/[^\d]/g, '');
var link = 'https://sdl-stickershop.line.naver.jp/stickershop/v1/product/' + id + '/iphone/stickers@2x.zip';
var aslink = 'https://sdl-stickershop.line.naver.jp/stickershop/v1/product/' + id + '/iphone/stickerpack@2x.zip';
if ($('span').hasClass('MdIcoAni_b') || $('span').hasClass('MdIcoPlay_b') ||$('span').hasClass('MdIcoSound_b') ||
    $('span').hasClass('MdIcoFlashAni_b') || $('span').hasClass('MdIcoFlash_b')) link = aslink;
var file = { url: link, name: document.title.replace(/(.+) (-|–) .+/g, '$1') + '.zip' };
//var lang = navigator.language;
var lang = document.documentElement.lang;
var btnstr = 'Download';
if (lang.indexOf('zh') > -1) btnstr = '下载';
else if (lang.indexOf('ja') > -1) btnstr = 'ダウンロードする';
var btn = '<li class="mdCMN08Li" style="list-style-type: none">'
        + '<a class="MdBtn01 mdBtn01" id="download" style="background: #33b1ff">'
        + '<span class="mdBtn01Inner">'
        + '<span class="mdBtn01Txt">' + btnstr + '</span>'
        + '</span></a></li>';
if ($('div').hasClass('mdCMN08Txt')) {
    $('.mdCMN08Txt>ul').find('li:eq(0)').remove();
    $('.mdCMN08Ul').prepend(btn);
}
else if ($('div').hasClass('mdMN05Btn')) {
    //$('.MdBtn01').remove();
    $('.mdMN05Btn').prepend(btn);
}
$('body').on('click', '#download', function(){
    var result = GM_download(file);
});