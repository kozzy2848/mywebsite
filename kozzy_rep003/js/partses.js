'use strict'; /*エラーチェックを使用する*/
{
  document.head.insertAdjacentHTML(`afterbegin`,`
  
  <meta http-equiv="Content-Type" content="text/html; charset=shift_jis" />
  <meta name="Keywords" content="アサギマダラ、バウンドテニス、ガジェット" />
  <meta name="Description" content="レスポンシブ対応のKozzyのホームページです。" />
  <link rel="stylesheet" href="style.css" type="text/css" /> 
  <link rel="stylesheet" href="css/original.css" type="text/css" /> 
  <link rel="stylesheet" href="lbox/css/lightbox.css" type="text/css" media="screen" />
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/jq_dim.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <script type="text/javascript" src="js/jquery.ui.core.js"></script>
  <script src="js/jquery-2.0.2.min.js"></script>
  <script src="js/js.js"></script>
  <meta name="viewport" content="width=device-width,user-scalable=no,maximum-scale=1" />
  `);
}
{
  const $hdr_top= document.getElementById('hdr_top' );
  $hdr_top.insertAdjacentHTML("afterbegin",`

  <h1>Welcome My responsibile Website </h1>
  <a href="index.html" title="kozzy.info　トップページへ"><img src="img/logo_kozzy.gif" alt="レスポンシブkozzy.Technicalロゴ" id="logo" /></a>
  <div id="info">お問い合わせ・ご相談はお気軽にどうぞ<br />
    <span>Tel.</span><strong>0120-123-456</strong></div>
  <ul id="h_list">
    <li><a href="contact.html">お問い合わせ・ご相談</a></li>
    <li><a href="recruit.html">採用情報</a></li>
    <li><a href="sitemap.html">サイトマップ</a></li>
  </ul>

  `);
}





/*ナビメニュー表示　強調（strong）なし*/
{
  const $hdr_nav= document.getElementById('hdr_nav' );
  $hdr_nav.insertAdjacentHTML("afterbegin",`
  <nav id="g_navi">
    <a class="menu">メニュー一覧<span></span></a>
      <ul class="gl_menu">
        <li><<a href="index.html">トップページ<br />
          <span>HOME</span></a></li>
        <li><a href="asagi.html">アサギマダラ<br />
          <span>Asagimadara</span></a></li>
        <li><a href="gallery.html">ギャラリー<br />
          <span>Gallery</span></a></li>
        <li><a href="favorites.html">お気に入り<br />
          <span>Favorites</span></a></li>
        <li><a href="blog.html">ブログ<br />
          <span>Blog</span></a></li>
        <li><a href="shop.html">ご案内<br />
          <span>Information</span></a></li>
        <li><a href="access.html">アクセス<br />
          <span>Access</span></a></li>
        <li><a href="link.html">リンク集<br />
          <span>Link</span></a></li>
      </ul>
  </nav>

`);
}