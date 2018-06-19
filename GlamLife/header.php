
<?php  ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>

    <!-- This doesn't ourput anything -->

    <?php wp_head(); ?>

    
  </head>
  <body <?php body_class(); ?>>

    <header>
      <!--  Use php to dynamically get the title of page-->
      

      <img class="logo" src="http://localhost:8080/wordpress/wp-content/uploads/2017/08/glam-logo.png">
      <h1>

        <a href="<?php bloginfo('wpurl'); ?>">
        <?php bloginfo('name'); ?>
        </a>
      </h1>


      <nav>
        <?php wp_nav_menu(array('theme_location' => 'menu1', 'menu_id' => 'main-menu')); ?>
      </nav>

      

    </header>

    <?php 
      if(is_home()){
        ?>
          <img src="<?php header_image(); ?>" height="auto" width="100%" alt="" />
        <?php 
      }

      ?>

    <?php 
    if(is_home()){
    echo do_shortcode("[metaslider id=140]"); 
    }
    ?>

    <main>
