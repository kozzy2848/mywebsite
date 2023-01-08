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
        <li><a href="shop.html">ご案内</a></li>
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