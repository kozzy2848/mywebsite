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
          <li><a href="shop.html">ご案内<br />
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