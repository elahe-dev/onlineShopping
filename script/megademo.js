/*global jQuery*/
/*global document*/
jQuery(document).ready(function ($) {
    //alert(1);
    // variables
    'use strict';
    var Options,
        get_options,
        bt1 = true,
        bt2 = true,
        bt3 = true,
        bt4 = true,
        bt5 = true,
        bt6 = true,
        bt7 = true,
        bt8 = true,
        bt9 = true,
        bt10 = true,
        bt11 = true,
        bt12 = true;

    // object
    Options = (function () {

        // constructor
        Options = function Options(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
            this.menu_width = a;
            this.items_text_align = b;
            this.items_direction = c;
            this.items_indicator_icon = d;
            this.description_hide = e;
            this.vertical_lines_hide = f;
            this.search_bar_hide = g;
            this.menu_top_fixed = h;
            this.transparent = i;
            this.logo_hide = j;
            this.logo_align = k;
            this.sticky_header = l;
            this.sticky_header_animation = m;
            this.drop_down_trigger = n;
        };

        // classes
        Options.prototype.options_change = function () {
            // call menu plugin
            $('#menu-1').megaMenu({
                // DESKTOP VIEW SETTINGS
                menu_width                  : this.menu_width, // 1280,
                items_text_align            : this.items_text_align, // 'left',
                items_direction             : this.items_direction, // 'normal',
                items_indicator_icon        : false,//this.items_indicator_icon, // 'fa-angle-down',
                description_hide            : true,// this.description_hide, // false,
                vertical_lines_hide         : this.vertical_lines_hide, // false,
                outside_click_drop_down_hide: true,
                search_bar_hide             : this.search_bar_hide, // false,
                elements_animation          : 'sweep-to-right',
                menu_top_fixed              : this.menu_top_fixed, // false,
                transparent                 : this.transparent, // 1,
                // LOGO SETTINGS
                logo_hide                   : this.logo_hide, // false,
                logo_align                  : this.logo_align, // 'left',
                // DROP DOWN SETTINGS
                drop_down_show_trigger      : this.drop_down_trigger, // 'hover',
                drop_down_hide_trigger      : this.drop_down_trigger, // 'hover',
                drop_down_show_delay        : 200,
                drop_down_hide_delay        : 10,
                // STICKY HEADER SETTINGS
                sticky_header               : true,//this.sticky_header, // false,
                sticky_header_height        : 500,
                un_sticky_header_height     : 100,
                sticky_header_animation     : this.sticky_header_animation // 'fade'
            });
        };

        // return options
        return Options;
    }());

    // call object
    get_options = new Options();
    // call functions
    get_options.options_change();


   
    


    // menu width change
    $('#btn-1').prop('checked', false).click(function () {
        if (bt1 === true) {
            get_options.menu_width = false;
            get_options.options_change();
            bt1 = false;
        } else {
            get_options.menu_width = 1280;
            get_options.options_change();
            bt1 = true;
        }
    });

    // items text align
    $('#btn-2').prop('checked', false).click(function () {
        if (bt2 === true) {
            get_options.items_text_align = 'center';
            get_options.options_change();
            bt2 = false;
        } else {
            get_options.items_text_align = 'left';
            get_options.options_change();
            bt2 = true;
        }
    });

    // items direction
    $('#btn-3').prop('checked', false).click(function () {
        if (bt3 === true) {
            get_options.items_direction = 'reverse';
            get_options.options_change();
            bt3 = false;
        } else {
            get_options.items_direction = 'normal';
            get_options.options_change();
            bt3 = true;
        }
    });

    // items indicator icon
    $('#btn-4').prop('checked', false).click(function () {
        if (bt4 === true) {
            get_options.items_indicator_icon = false;
            get_options.options_change();
            bt4 = false;
        } else {
            get_options.items_indicator_icon = 'fa-angle-down';
            get_options.options_change();
            bt4 = true;
        }
    });

    // description hide
    $('#btn-5').prop('checked', false).click(function () {
        if (bt5 === true) {
            get_options.description_hide = true;
            get_options.options_change();
            bt5 = false;
        } else {
            get_options.description_hide = false;
            get_options.options_change();
            bt5 = true;
        }
    });

    // vertical lines hide
    $('#btn-6').prop('checked', false).click(function () {
        if (bt6 === true) {
            get_options.vertical_lines_hide = true;
            get_options.options_change();
            bt6 = false;
        } else {
            get_options.vertical_lines_hide = false;
            get_options.options_change();
            bt6 = true;
        }
    });

    // search bar hide
    $('#btn-7').prop('checked', false).click(function () {
        if (bt7 === true) {
            get_options.search_bar_hide = true;
            get_options.options_change();
            bt7 = false;
        } else {
            get_options.search_bar_hide = false;
            get_options.options_change();
            bt7 = true;
        }
    });

    // menu top fixed
    $('#btn-8').prop('checked', false).click(function () {
        if (bt8 === true) {
            get_options.menu_top_fixed = true;
            get_options.options_change();
            $('#btn-12').attr('disabled', true).parent('label').addClass('disable');
            bt8 = false;
        } else {
            get_options.menu_top_fixed = false;
            get_options.options_change();
            $('#btn-12').attr('disabled', false).parent('label').removeClass('disable');
            bt8 = true;
        }
    });

    // transparent
    $('#btn-9').prop('checked', false).click(function () {
        if (bt9 === true) {
            get_options.transparent = 0.9;
            get_options.options_change();
            bt9 = false;
        } else {
            get_options.transparent = 1;
            get_options.options_change();
            bt9 = true;
        }
    });

    // logo hide
    $('#btn-10').prop('checked', false).click(function () {
        if (bt10 === true) {
            get_options.logo_hide = true;
            get_options.options_change();
            bt10 = false;
        } else {
            get_options.logo_hide = false;
            get_options.options_change();
            bt10 = true;
        }
    });

    // logo align
    $('#btn-11').prop('checked', false).click(function () {
        if (bt11 === true) {
            get_options.logo_align = 'right';
            get_options.options_change();
            bt11 = false;
        } else {
            get_options.logo_align = 'left';
            get_options.options_change();
            bt11 = true;
        }
    });

    // sticky header
    $('#btn-12').prop('checked', false).click(function () {
        if (bt12 === true) {
            get_options.sticky_header = true;
            get_options.options_change();
            $('body').addClass('stickyHeader');
            $('#btn-8').attr('disabled', true).parent('label').addClass('disable');
            $(this).parent('label').addClass('active');
            bt12 = false;
        } else {
            get_options.sticky_header = false;
            get_options.options_change();
            $('body').removeClass('stickyHeader');
            $('#btn-8').attr('disabled', false).parent('label').removeClass('disable');
            $(this).parent('label').removeClass('active');
            bt12 = true;
        }
    });

    // color change
    $('#btn-17').val('blue').on('change keydown keyup', function (get_value) {
        get_value = $(this).val();
        $('#menu-1').attr('data-color', get_value);
        if (get_value === 'blue') {
            $('.logo-change').attr('src', 'images/logo-1.png');
        } else if (get_value === 'green') {
            $('.logo-change').attr('src', 'images/logo-2.png');
        } else if(get_value === 'orange') {
            $('.logo-change').attr('src', 'images/logo-4.png');
        } else if(get_value === 'purple') {
            $('.logo-change').attr('src', 'images/logo-5.png');
        } else {
            $('.logo-change').attr('src', 'images/logo-3.png');
        }
        get_options.options_change();
    });

    // sticky header animations
    $('#btn-16').val('fade').on('change keydown keyup', function (get_value) {
        get_value = $(this).val();
        get_options.sticky_header_animation = get_value;
        get_options.options_change();
    });

    // drop down animations
    $('#btn-18').val('fade').on('change keydown keyup', function (get_value) {
        get_value = $(this).val();
        $('#menu-1').find('.drop-down, .drop-down-medium, .drop-down-large').attr('data-animation', get_value);
        get_options.options_change();
    });

    // drop down animations
    $('#btn-25').val('hover').on('change keydown keyup', function (get_value) {
        get_value = $(this).val();
        get_options.drop_down_trigger = get_value;
        get_options.options_change();
    });

});

