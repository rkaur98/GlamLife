
<?php

  // This is where we will add functionality to theme and customiziblity
  // we will also add script and styles the css

  function scratch_setup_theme()
  {
    add_theme_support('custom-background');
    add_theme_support('custom-header');
    add_theme_support( 'post-thumbnails', array( 'post' ) );

    register_nav_menu('menu1','Primary Navigation');
    
  }
  //  This part adds the function to our wordpress
  add_action('after_setup_theme','scratch_setup_theme');

  function scratch_scripts_and_styles(){

    wp_enqueue_style('some-other', get_template_directory_uri() . '/icomoon/style.css', array(), "1");

    wp_enqueue_style('the-main-stylesheet', get_template_directory_uri() . '/style.css', array(), "1");


    wp_enqueue_script('jquery');

    // wp_enqueue_script('my-script',get_template_directory_uri() . '/script.js');

    if( is_home())
    {
      wp_enqueue_script('my-script', get_template_directory_uri() . '/script.js');
    }
    else if(is_page("brand"))
    {
      wp_enqueue_script('my-script', get_template_directory_uri() . '/brand.js');
      wp_enqueue_script('myscript', get_template_directory_uri() . '/script.js');
    }
    else if(is_page("MyCart")){
      wp_enqueue_script('my-script', get_template_directory_uri() . '/cart.js');
      wp_enqueue_script('myscript', get_template_directory_uri() . '/script.js');
    }
    else{
      wp_enqueue_script('my-script', get_template_directory_uri() . '/app.js');
      wp_enqueue_script('myscript', get_template_directory_uri() . '/script.js');
    }

  }
  add_action('wp_enqueue_scripts','scratch_scripts_and_styles');

 ?>
