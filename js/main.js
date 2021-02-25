$(document).ready(function() {
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    }); //плавный скролл

    // APP CHOISE

    $('#data').click(function() {
        $('.app__1_content').removeClass('app__active')
        $('#app_1').addClass('app__active');
        $('.app__content_button').removeClass('app_button_active')
        $('#data').addClass('app_button_active');
    });
    $('#pim').click(function() {
        $('.app__1_content').removeClass('app__active')
        $('#app_2').addClass('app__active');
        $('.app__content_button').removeClass('app_button_active')
        $('#pim').addClass('app_button_active');
    });
    $('#pgi').click(function() {
        $('.app__1_content').removeClass('app__active')
        $('#app_3').addClass('app__active');
        $('.app__content_button').removeClass('app_button_active')
        $('#pgi').addClass('app_button_active');
    });
    $('#oms').click(function() {
        $('.app__1_content').removeClass('app__active')
        $('#app_4').addClass('app__active');
        $('.app__content_button').removeClass('app_button_active')
        $('#oms').addClass('app_button_active');
    });
    $('#push').click(function() {
        $('.app__1_content').removeClass('app__active')
        $('#app_5').addClass('app__active');
        $('.app__content_button').removeClass('app_button_active')
        $('#push').addClass('app_button_active');
    });
    $('#lang').click(function() {
        $('.app__1_content').removeClass('app__active')
        $('#app_6').addClass('app__active');
        $('.app__content_button').removeClass('app_button_active')
        $('#lang').addClass('app_button_active');
    });
    $('#api').click(function() {
        $('.app__1_content').removeClass('app__active')
        $('#app_7').addClass('app__active');
        $('.app__content_button').removeClass('app_button_active')
        $('#api').addClass('app_button_active');
    });

    //REVIEW SLIDER

    var counter = 2;
    var rev1 = $('#review_1');
    var rev2 = $('#review_2');
    var rev3 = $('#review_3');
    rev1.fadeIn();
    rev2.fadeOut();
    rev3.fadeOut();
    $('.app__control_left').click(function() {
        counter--;
        console.log(counter);
        if (counter == 1) {
            rev1.show();
            rev2.hide();
            rev3.hide();
            counter = 4;
        } else if (counter == 2) {
            rev1.hide();
            rev2.show();
            rev3.hide();
        } else if (counter == 3) {
            rev1.hide();
            rev2.hide();
            rev3.show();
        } else if (counter < 1) {
            counter = 4;
        }
    });
    $('.app__control_right').click(function() {
        counter++;
        console.log(counter);
        if (counter == 1) {
            rev1.show();
            rev2.hide();
            rev3.hide();
        } else if (counter == 2) {
            rev1.hide();
            rev2.show();
            rev3.hide();
        } else if (counter == 3) {
            rev1.hide();
            rev2.hide();
            rev3.show();
            counter = 0;
        } else if (counter > 3) {
            counter = 1;
        }
    });

    // COOCKIE HIDE

    if (Cookies.get('coockie_check') == 'true') {
        $('.cookie_notify').css('display', 'none');
    }

    $('#cookie_ok').click(function() {
        $('.cookie_notify').addClass('cookie_notify-hidden');
        Cookies.set('coockie_check', 'true');
    });

    //HOLD CHOISE

    $(document).ready(function($) {
        $('#error_hold_button').click(function() {
            $('.popup-fade').css('display', 'block');
            return false;
        });

        // Клик по ссылке "Закрыть".
        $('#popup-close').click(function() {
            $(this).parents('.popup-fade').fadeOut();
            return false;
        });

        // Закрытие по клавише Esc.
        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.popup-fade').fadeOut();
            }
        });

        // Клик по фону, но не по окну.
        $('.popup-fade').click(function(e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });

    //CHOISE LOCATION
    $('#error_hold_lang').click(function() {
        $('.error_hold_loc_list').toggleClass('list_active');
        $('#error_loc_down').toggleClass('error_down_black_rotate');
        $('#error_loc_down').toggleClass('error_down_black_default');
    });

    $('.error_hold_loc_item').click(function() {
        var activeLocation = $(this).html();
        $('.error_hold_loc_choised').html(activeLocation);
    });

    //CHOISE LANGUAGE
    $('#error_hold_loc_choise').click(function() {
        $('.error_hold_lang_list').toggleClass('list_active_lang');
        $('#error_down_left').toggleClass('error_down_black_rotate');
        $('#error_down_left').toggleClass('error_down_black_default');
    });

    $('.error_hold_lang_item').click(function() {
        var activeLanguage = $(this).html();
        $('.error_lang_choised').html(activeLanguage);
    });

    // CARDS SLIDE

    //REVIEW SLIDER

    var tar1 = $('.cards_1');
    var tar2 = $('.cards_2');
    tar1.fadeIn();
    tar2.fadeOut();
    $('.tariff__body_left').click(function() {
        tar1.show();
        tar2.hide();
    });
    $('.tariff__body_right').click(function() {
        tar1.hide();
        tar2.show();
        tar2.attr('style', 'display: flex');
    });

    //NAVBAR

    $('.mobile_menu_hide').click(function() {
        $('.mobile__menu').addClass('mb_inactive');
        $('.mobile__menu').removeClass('mb_active');
        $('.mobile__menu_body').css('display', 'none');
        $('.header__content, .content, .app').removeClass('navbar-filter');
        $("body").attr("style", "overflow: scroll");
        $("html").attr("style", "overflow: scroll");
    });

    $('.mobile_menu_show').click(function() {
        $('.mobile__menu').addClass('mb_active');
        $('.mobile__menu').removeClass('mb_inactive');
        $('.header__content, .content, .app').addClass('navbar-filter');

        function menu_show_animate() {
            $('.mobile__menu_body').css('display', 'block')
        }
        setTimeout(menu_show_animate, 200);
        $("body").attr("style", "overflow: hidden");
        $("html").attr("style", "overflow: hidden");
    });

    //CHANGE MOB DATA
    $('.mobile__navbar_link a').click(function() {
        $("body").attr("style", "overflow-y: scroll");
        $("html").attr("style", "overflow-y: scroll");
        $('.header__content, .content, .app').removeClass('navbar-filter');
        $('.mobile__menu').addClass('mb_inactive');
        $('.mobile__menu').removeClass('mb_active');
        $('.mobile__menu_body').css('display', 'none');
    });
    if ($(window).width() < 600) {
        $('.header__phone').attr('src', 'image/mobile_header.svg');
        $('#for_who_1').attr('src', 'image/for_who_1_full.svg');
        $('#for_who_2').attr('src', 'image/for_who_2_full.svg');
        $('#for_who_3').attr('src', 'image/for_who_3_full.svg');
        $('#for_who_4').attr('src', 'image/for_who_4_full.svg');
        $('.tariff__body_cards').css('display', 'none');
        //TARIFF SLIDER

        $('.tariff__body_card').not('.cards_mob_1').hide();

        var tariffCounter = 1;
        var tariff1 = $('.cards_mob_1');
        var tariff2 = $('.cards_mob_2');
        var tariff3 = $('.cards_mob_3');
        var tariff4 = $('.cards_mob_4');

        $('#tariff__body_left').click(function() {
            tariffCounter--;
            console.log(tariffCounter);
            if (tariffCounter == 1) {
                $('.tariff__body_card').not(tariff1).hide();
                tariff1.show();
                tariffCounter = 5;
            } else if (tariffCounter == 2) {
                $('.tariff__body_card').not(tariff2).hide();
                tariff2.show();
            } else if (tariffCounter == 3) {
                $('.tariff__body_card').not(tariff3).hide();
                tariff3.show();
            } else if (tariffCounter == 4) {
                $('.tariff__body_card').not(tariff4).hide();
                tariff4.show();
            } else if (tariffCounter < 1) {
                tariffCounter = 5;
            }
        });
        $('#tariff__body_right').click(function() {
            tariffCounter++;
            console.log(tariffCounter);
            if (tariffCounter == 1) {
                $('.tariff__body_card').not(tariff1).hide();
                tariff1.show();
            } else if (tariffCounter == 2) {
                $('.tariff__body_card').not(tariff2).hide();
                tariff2.show();
            } else if (tariffCounter == 3) {
                $('.tariff__body_card').not(tariff3).hide();
                tariff3.show();
            } else if (tariffCounter == 4) {
                $('.tariff__body_card').not(tariff4).hide();
                tariff4.show();
                tariffCounter = 0;
            } else if (tariffCounter > 4) {
                tariffCounter = 0;
            }
        });
    } else {
        return false;
    }

    //UP BUTTON

    var btn = $('.up-button');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});