<?php
/**
 * Plugin Name: My Gutenberg Block
 * Plugin URI: https://alexdev.com
 * Description: Gutenberg Block
 * Author: Egor Alexseev
 * Author URI: https://alexdev.com
 */

 function genius_gutenberg_block_init(){
    register_block_type_from_metadata( __DIR__ );
 }
 add_action('init','genius_gutenberg_block_init');