<?php 

	get_header(); 

	
    ?>
    <div id="header"></div>

    <div id="productdes" class="productdes"></div>

    
    <?php
    if (have_posts()==true)

	{

		while(have_posts()==true)
		{

			the_post();

            ?>
            

            <div>

            <?php

      
                the_content();
      

                
            ?>

            </div>  

            <?php
		}
	}
	

  get_footer(); 

 ?>