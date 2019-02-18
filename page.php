<?php

/* Template Name: Regular Page Template*/

// Add custom page body class to the head.
add_filter('body_class', 'infinity_add_body_class');
function infinity_add_body_class($classes)
{

    $classes[] = 'custom-page';

    return $classes;

}


// add_action('genesis_before_content', 'genesis_do_post_title', 5);

//* Remove Page Title From About Page
// add_action('get_header', 'remove_titles_from_pages');
        // remove the post title from the about page
remove_action('genesis_entry_header', 'genesis_do_post_title');
        // add an action that will insert a new special header
    // add_action('genesis_entry_header', 'sd_special_header');

add_action('genesis_before_content', 'sd_special_header');
function sd_special_header()
{
    echo '<div class="custom-page-title"><h1 class="page-title">' . get_the_title() . '</h1></div>';

}


// function custom_header_image()
// {
//     add_action('genesis_entry_header', 'genesis_do_post_title');
// }

// //* Replace Page Title With Custom Header
// function sd_special_header()
// {
//     // check if the page has a featured image
//     if (has_post_thumbnail()) {
//         the_post_thumbnail('thumbnail', array('class' => 'aligncenter specialfeatured'));
//     }
//     // get special title and tagline from post meta
//     $specialtitle = get_post_meta(get_the_ID(), 'sd_page_title', true);
//     $specialtag = get_post_meta(get_the_ID(), 'sd_page_tagline', true);
//     // display title and tagline
//     echo '<h1 class="page-title">' . $specialtitle . '</h1>';
//     echo '<p class="page-tagline">' . $specialtag . '</p>';
// }


genesis();
