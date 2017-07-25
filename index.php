<?php

/*
Plugin Name: Post Edit Category Search
Plugin URI: https://github.com/guiliredu/wp-post-edit-category-search
Description: This plugin adds a search input to the category boxes on admin add/edit pages that filter the list by the searched string
Version: 0.1
Author: Guilherme Redü
Author URI: https://github.com/guiliredu
*/

function register_wp_post_edit_category_search($hook)
{	
	if ( 'post.php' != $hook && $hook != 'post-new.php' ){
		return;
	}	
	
	wp_register_script('wp_post_edit_category_search', site_url().'/wp-content/plugins/wp-post-edit-category-search/js/script.js');
	wp_enqueue_script('wp_post_edit_category_search', false, array(), false, true);
}

add_action( 'admin_enqueue_scripts', 'register_wp_post_edit_category_search');