


<?php

  get_header();

  // The loop
  ?>
  
    <h2 class="sub-heading"><span>Products</span></h2>
  <?php

  if(have_posts()==true)
  {

    while(have_posts()==true)
    {
      // Iterates the next post
      echo "<article>";
      the_post();
      if ( has_post_thumbnail() ) {
         the_post_thumbnail();
      }

      // get out of php
      ?>
      <h2><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h2>
      <?php

      
      echo "</article>";

       ?>
      <?php
      // get back to php

    }

  }

  ?>

  <h2 class="sub-heading"><span>Featured Products</span></h2>

  <div class="featured">

  <a class="slidemin" onclick="plus(-1)"></a>

  <div class="gallery gallery1">
    <div>
      <img src="img/e8c59b78ebeaec5c4b6aeba49a9ff0f6_ra,w158,h184_pa,w158,h184.png">
      <a href="brand#blush#maybelline"><h3>Maybelline Face Studio Booster Blush</h3></a>
    </div>
    
    <div>
      <img src="img/d03d4a62759d7805ff8b41caebb4cbb0_ra,w158,h184_pa,w158,h184.jpeg">
      <a href="brand#bronzer#almay"><h3>Almay Smart Shade Powder Bronzer</h3></a>
    </div>

    <div>
      <img src="img/201350fd3e173307ade44520dc87d8fb_ra,w158,h184_pa,w158,h184.png">
      <a href="brand#eyeshadow#maybelline"><h3>Maybelline The Nudes Eye Shadow Palette</h3></a>
    </div>

  </div>

  <div class="gallery gallery2">
    <div>
      <img src="img/1a62206fbf4800fd0cc9e6690ae7aa9d.jpg">
      <a href="brand#eyebrow#iman"><h3>Perfect Eyebrow Pencil Blackest Brown</h3></a>
    </div>
    
    <div>
      <img src="img/39be9facd53cf124ff38e9a25de09e10_ra,w158,h184_pa,w158,h184.jpeg">
      <a href="brand#foundation#l'oreal"><h3>L'Oreal Visible Lift Serum Absolute</h3></a>
    </div>

    <div>
      <img src="img/e960bba3ac7a8cb393b2293a976c2b61_ra,w158,h184_pa,w158,h184.jpeg">
      <a href="brand#nail_polish#revlon"><h3>Revlon Nail Enamel and Nail Polish</h3></a>
    </div>
  </div>

  <div class="gallery gallery3">
    <div>
      <img src="img/086bd6bba51f630f60511cdc24c68096_ra,w158,h184_pa,w158,h184.jpeg">
      <a href="brand#mascara#maybelline"><h3>Maybelline Illegal Extensions Mascara</h3></a>
    </div>
    
    <div>
      <img src="img/76076d06ebd517f1ae7e359d96d50b32_ra,w158,h184_pa,w158,h184.jpg">
      <a href="brand#lipstick#revlon"><h3>Revlon ColorBurst Matte Balm Lipstick</h3></a>
    </div>

    <div>
      <img src="img/0b1191651b7aef22b11e96f8c7c548d4_ra,w158,h184_pa,w158,h184.png">
      <a href="brand#lip_liner#l'oreal"><h3>L'Oreal Paris Infallible Lip Liner</h3></a>
    </div>
  </div>

  <a class="slidemax" onclick="plus(1)"></a>

  </div>
  <?php

  get_footer();

 ?>
