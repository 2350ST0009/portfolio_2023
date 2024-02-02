// アコーディオンをクリックした時の動作

// タイトル要素をクリックしたら
$('.title').on('click',function(){
    // クラス名.boxがついた全てのアコーディオンを閉じる
    $('.box').slideUp(500);

    // タイトル直後のアコーディオンを行うエリアを取得し
    var findElm = $(this).next(".box");

    // タイトル要素のクラス名closeがあれば
    if($(this).hasClass('close')){
        // クラス名を除去し
        $(this).removeClass('close');

        // それ以外は
    } else {
        // クラス名closeを全て除去した後
        $('.close').removeClass('close');

        // クリックしたタイトルにクラス名classを付与し
        $(this).addClass('close');

        // アコーディオンを開く
        $(findElm).slideDown(500);
    }
});

// ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作

$(window).on('load', function(){
    // accrdion-areaのハウ締めのliにあるsectionにopenクラスを追加
    $('.accordion-area li:first-of-type section').addClass("open");

    // openクラスを取得
    $(".open").each(function(index, element){
        // openクラスの子要素のtitleクラスを取得
        var Title =$(element).children('.title');

        // タイトルにクラス名closeを付与し
        $(Title).addClass('close');

        // openクラスの子要素boxクラスを取得
        var Box =$(element).children('.box');

        // アコーディオンを開く
        $(Box).slideDown(500);
    });
});