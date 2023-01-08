'use strict'; 　/*エラーチェックを使用する*/
{
    document.head.insertAdjacentHTML(`afterbegin`,`
    
    <meta http-equiv="Content-Type" content="text/html; charset=shift_jis" />
    <meta name="Keywords" content="アサギマダラ、バウンドテニス、ガジェット" />
    <meta name="Description" content="Kozzyのホームページです。レスポンシブに未対応" />
    <link href="./css/style.css" rel="stylesheet" type="text/css" /> 
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jq_dim.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/jquery.ui.core.js"></script>
    `);
}


{
   const $hdr_side= document.getElementById('hdr_side' );
   $hdr_side.insertAdjacentHTML("afterbegin",`
   
   <div id="side">
   <div class="side_box">
     <div class="side_btn"><a href="contact.html"><img src="img/side_btn_df.jpg" alt="お問い合わせ・ご予約はコチラ" /></a></div>
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
         <li><a href="access.html">アクセスマップ<br />
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
          <p><a href="#">お得なキャンペーン実施していません！</a></p>

        </div>
        <div class="side_prbox">
<!--　削除禁止【ＰＲ枠】ここから　-->
<!--prno.130321ver2.01set016-->
Design by <a href="http://www.megapx.com/" target="_blank">Megapx</a><br />
Template by <a href="http://www.s-hoshino.com/" target="_blank">s-hoshino.com</a>
<!--　/削除禁止【ＰＲ枠】ここまで　-->
        </div>
   `)
}
{
    const $hdr_foot= document.getElementById('hdr_foot' );
    $hdr_foot.insertAdjacentHTML("afterbegin",`
    <!--footer start-->
    <div id="foot_base">
    <div id="foot">
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
        <li><a href="recruit.html">情報</a></li>
        <li><a href="sitemap.html">サイトマップ</a></li>
      </ul>
      <div id="f_logo">Kozzy Site</div>
      <p>〒929-1344　石川県羽咋郡宝達志水町<br />
        TEL:01-2345-6789 / FAX:01-2345-6789</p>
    </div>
     
      <address>
      Copyright(C) KozzyTechnical All Rights Reserved.
      </address>
    </div>
    <!--/footer end-->
    `)
}
{
    const $hdr_top= document.getElementById('hdr_top' );
    $hdr_top.insertAdjacentHTML("afterbegin",`
    <!--head start-->
    <div id="head">
      <h1>Welcome to My Non-WordPress Site</h1>
      <a href="index.html" title="kozzy.info　トップページへ"><img src="img/logo.gif" alt="kozzy.info　ロゴ" id="logo" /></a>
      <div id="info">お問い合わせ・ご相談はお気軽にどうぞ<br />
        <span>Tel.</span><strong>0120-123-456</strong></div>
      <ul id="h_list">
        <li><a href="contact.html">お問い合わせ・ご相談</a></li>
        <li><a href="recruit.html">情報</a></li>
        <li><a href="sitemap.html">サイトマップ</a></li>
      </ul>

    `);
}
{
    const $hdr_topmenu= document.getElementById('hdr_topmenu' );
    $hdr_topmenu.insertAdjacentHTML("afterbegin",`

    <div id="navi">
    <ul id="jsnavi">
      <li><a href="index.html" class="toplevel">トップページ<br />
      <span>HOME</span></a></li>
      <li><a href="asagi.html" class="toplevel">アサギマダラ<br />
        <span>Asagimadara</span></a></li>
      <li><a href="gallery.html" class="toplevel">ギャラリー<br />
        <span>Gallery</span></a></li>
      <li><a href="favorites.html" class="toplevel">お気に入り<br />
        <span>Favorites</span></a>
        <ul>
          <li><a href="favorites.html#staff01">favor001</a></li>
          <li><a href="favorites.html#staff02">favor002</a></li>
          <li><a href="favorites.html#staff03">favor003</a></li>
        </ul>
      </li>
      <li><a href="blog.html" class="toplevel">ブログ<br />
        <span>Blog</span></a></li>
      <li><a href="information.html" class="toplevel">ご案内<br />
        <span>Information</span></a>
        <ul>
          <li><a href="information.html#info01">情報</a></li>
          <li><a href="information.html#info02">ご挨拶</a></li>
          <li><a href="information.html#info03">概要</a></li>
          <li><a href="information.html#info04">沿革</a></li>
        </ul>
      </li>
      <li><a href="access.html" class="toplevel">アクセス<br />
        <span>Access</span></a></li>
      <li><a href="link.html" class="toplevel">リンク集<br />
        <span>Link</span></a></li>
    </ul>
  </div>


    `);
}
