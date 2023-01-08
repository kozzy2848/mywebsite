<?php

# Sidebar
register_sidebar(array(
'before_widget' => '<div id="%1$s" class="widget %2$s">',
'after_widget' => '</div></div></div>',
'before_title' => '<h3>',
'after_title' => '</h3><div class="side_box"><div class="side_inbox">',
));

/* アイキャッチ画像 */
add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 578, 578 );
# Limit Post
function the_content_limit($max_char, $more_link_text = '', $stripteaser = 0, $more_file = '') {
    $content = get_the_content($more_link_text, $stripteaser, $more_file);
    $content = apply_filters('the_content', $content);
    $content = str_replace(']]>', ']]&gt;', $content);
    $content = strip_tags($content);

   if (strlen($_GET['p']) > 0) {
      echo "";
      echo $content;
      echo "&nbsp;<a href='";
      the_permalink();
      echo "'>"."Read More &rarr;</a>";
      echo "";
   }
   else if ((strlen($content)>$max_char) && ($espacio = strpos($content, " ", $max_char ))) {
        $content = substr($content, 0, $espacio);
        $content = $content;
        echo "";
        echo $content;
        echo "...";
        echo "&nbsp;<a href='";
        the_permalink();
      echo "'>"."Read More &rarr;</a>";
        echo "";
   }
   else {
      echo "";
      echo $content;
      echo "&nbsp;<a href='";
      the_permalink();
      echo "'>"."Read More &rarr;</a>";
      echo "";
   }
}


# Displays post image attachment (sizes: thumbnail, medium, full)
function get_thumbnail($postid=0, $size='thumbnail', $attributes='') {
	if ($postid<1) $postid = get_the_ID();
	if ($images = get_children(array(
		'post_parent' => $postid,
		'post_type' => 'attachment',
		'numberposts' => 1,
		'post_mime_type' => 'image', )))
		foreach($images as $image) {
			$thumbnail=wp_get_attachment_image_src($image->ID, $size);
			?>

<img src="<?php echo $thumbnail[0]; ?>" <?php echo $attributes; ?> />
<?php
		}
	else {
		echo '<img src=' . get_bloginfo ( 'stylesheet_directory' );
		echo '/img/noimage.gif>';
	}
	
}

function new_excerpt_more($post) {
	return '...<a href="'. get_permalink($post->ID) . '">' . '続きを読む' . '</a>';	
}	
add_filter('excerpt_more', 'new_excerpt_more');
?>
<?php add_theme_support( 'menus' ); ?>
