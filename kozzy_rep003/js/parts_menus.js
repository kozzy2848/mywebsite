'use strict'; /*エラーチェックを使用する*/
/*ヘッド部表示部*/
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
          <li><a href="information.html">ご案内<br />
            <span>Information</span></a></li>
          <li><a href="access.html">アクセス<br />
            <span>Access</span></a></li>
          <li><a href="link.html">リンク集<br />
            <span>Link</span></a></li>
        </ul>
    </nav>
  
  `);
  }
/*サイドメニュー共通表示部*/
{
    const $hdr_side= document.getElementById('hdr_side' );
    $hdr_side.insertAdjacentHTML("afterbegin",`
    <div id="side">
    <div class="side_box">
      <div class="side_btn"><a href="contact.html"><img src="img/side_btn_df.jpg" alt="お問い合わせはコチラ" /></a></div>
    </div>
    <h3>Site Menu</h3>
    <div class="side_box">
      <div class="side_inbox">
        <ul>
          <li><a href="index.html">トップページ<br />
            <span>HOME</span></a></li>
          <li><a href="asagi.html">アサギマダラ<br />
            <span>Asagimadara</span></a></li>
          <li><a href="gallery.html">ギャラリー<br />
            <span>Gallery</span></a></li>
          <li><a href="favorites.html">お気に入り<br />
            <span>Favorites</span></a></li>
          <li><a href="blog.html">ブログ<br />
            <span>Blog</span></a></li>
          <li><a href="information.html">ご案内<br />
            <span>Information</span></a></li>
          <li><a href="access.html">アクセス<br />
            <span>Access</span></a></li>
          <li><a href="link.html">リンク集<br />
            <span>Link</span></a></li>
        </ul>
      </div>
    </div>
    <div class="side_box">
      <h3>NEWS</h3>
      <div class="side_inbox">
        <p><a href="#">今年流行の最新メニューを追加いたしません！</a><span class="chui">NEW!</span></p>
        <p><a href="#">お得なキャンペーン実施してません！</a></p>
      </div>
  
    </div>
  </div>
  <!--/side end-->
  `);
  }

/*フッター共通表示部*/
{
    const $hdr_foot= document.getElementById('hdr_foot' );
    $hdr_foot.insertAdjacentHTML("afterbegin",`
    <div id="foot_base">
    <footer>
    
    <div class="prbox">
    <!--　削除禁止【ＰＲ枠】ここから　-->
    <!--prno.130321ver2.01set016-->
    Design by <a href="http://www.megapx.com/" title="ホームページデザイン：メガピクス" target="_blank">Megapx</a>　/　Template by <a href="http://www.s-hoshino.com/" title="テンプレート配布元：フリー素材屋Hoshino" target="_blank">s-hoshino.com</a>
    <!--　/削除禁止【ＰＲ枠】ここまで　-->
    </div>
    
      <ul id="f_ul01">
        <li><a href="index.html">トップページ</a></li>
        <li><a href="asagi.html">アサギマダラ</a></li>
        <li><a href="gallery.html">ギャラリー</a></li>
        <li><a href="favorites.html">お気に入り</a></li>
        <li><a href="blog.html">ブログ</a></li>
        <li><a href="information.html">ご案内</a></li>
        <li><a href="access.html">アクセスマップ</a></li>
        <li><a href="link.html">リンク集</a></li>
      </ul>
      <ul id="f_ul02">
        <li><a href="contact.html">お問い合わせ・ご相談</a></li>
        <li><a href="recruit.html">採用情報</a></li>
        <li><a href="sitemap.html">サイトマップ</a></li>
      </ul>
      <div id="f_logo">Kozzy.info Site</div>
      <p>〒929-4567　石川県宝達志水町1－2　サンプルビル5F<br />
        TEL:01-2345-6789 / FAX:01-2345-6789</p>
    </footer>
      <address>
      Copyright(C) KozzyTechnical All Rights Reserved.
      </address>
    </div>
   
    <!--/footer end-->
  
    `);
  }