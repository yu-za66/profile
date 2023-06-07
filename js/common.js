//ドロップダウンメニュー
$(function() {
  $('.drop li').mouseover(function(e) {
      $('ul', this).stop().slideDown('fast');
  })
  .mouseout(function(e) {
      $('ul', this).stop().slideUp('fast');
  });
});
//--------------------  --

  // ローカルでサーバーを立てないとできないので断念
// header共通読み込み
// function include_header(){
//   $.ajax({
//       url: 'header.html', // リクエストを送信するURLを指定
//       async: false, // 非同期リクエストを無効にする
//   }).done(function(header_html){ // 通信が成功したら
//       document.write(header_html); // herder.htmlを表示する
//   });
// }
// ---------------------