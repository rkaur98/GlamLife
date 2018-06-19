

<?php

  get_header();

  // The loop
  if ( has_post_thumbnail() ) {
    the_post_thumbnail();
  }

  if(have_posts()==true)
  {
    while(have_posts()==true)
    {
      // Iterates the next post

      the_post();

      
      
      

      // get out of php
      ?>
      <div class="navigate"><?php previous_post_link(); ?> | <?php next_post_link(); ?></div>
      <h2><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h2><br/>
      
      <?php

      
      the_content();
      

      

       ?>
       
      <?php

      // get back to php
    }

  }
  
  get_footer();



 ?>
 