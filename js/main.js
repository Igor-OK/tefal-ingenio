jQuery(document).ready(function($) {
    jQuery(".recipe-details").mCustomScrollbar({
        axis:"y",
    });

    header_rotator = new Swiper('#homepage-rotator', {
        loop: true,
        loopedSlides: 0,
        /*autoplay: 5000,
        autoplayDisableOnInteraction: false,*/
        grabCursor: true,
        slidesPerView: 1,
        prevButton: '.homepage-rotator-prev',
        nextButton: '.homepage-rotator-next'
    });

    jQuery('.fancybox-video').fancybox({
        'padding'       : 0,
        'autoScale'     : false,
        'transitionIn'  : 'none',
        'transitionOut' : 'none',
        'href'          : jQuery(this).attr('href'),
        'type'          : 'iframe'
    });


    jQuery('.main-title').click(function(){
    	jQuery('body,html').animate({scrollTop:jQuery(this).offset().top}, 1000);
    });

    jQuery('.move-to-slider').click(function(){
        jQuery('body,html').animate({scrollTop:jQuery('.slider-row').offset().top}, 1000);
    });

    jQuery('.recipe-item-preview').click(function(){
        jQuery('.recipe-details-item-show').removeClass('recipe-details-item-show');
        jQuery('.recipe-downloads-item-show').removeClass('recipe-downloads-item-show');
        jQuery('.recipe-item-preview-active').removeClass('recipe-item-preview-active');

        jQuery('.recipe-details-item').eq(jQuery(this).index()).addClass('recipe-details-item-show');
        jQuery('.recipe-downloads-item').eq(jQuery(this).index()).addClass('recipe-downloads-item-show');
        jQuery(this).addClass('recipe-item-preview-active');
    });

    jQuery('.preview-videos-item').click(function(){
        jQuery('.full-videos-item-show').removeClass('full-videos-item-show');

        jQuery('.full-videos-item').eq(jQuery(this).index()).addClass('full-videos-item-show');
    });

    jQuery('.highs-right-item-title').click(function(){
      console.log('hi');
        var new_index = jQuery(this).parent().index();
        jQuery('.highs-right-item-active').removeClass('highs-right-item-active');
        jQuery('.highs-left-item-active').removeClass('highs-left-item-active');
        jQuery('.highs-left-item').eq(new_index).addClass('highs-left-item-active');
        jQuery('.highs-right-item').eq(new_index).addClass('highs-right-item-active');
    });

    jQuery('.block2_mobile .see_all').click(function(){
        jQuery('body,html').animate({scrollTop:jQuery('.block3_mobile').offset().top}, 500);
        return false;
    });

    $('.b2_slider').bxSlider({
        touchEnabled: true,
        pager: false
    });
    $('.b3_slider').bxSlider({
        touchEnabled: true,
        pager: false
    });
    $(".head-entry .dropmenu-toggle").click(function(e) {
        $(".head-entry .content-toggle").removeClass("open"), $(".head-entry .dropmenu-toggle").children().removeClass("hover"), $(".head-entry .dropmenu-toggle").removeClass("hover"), e.stopPropagation(), $(this).parent().find(".content-toggle").toggleClass("open"), $(this).children().length > 0 ? ($(this).children().toggleClass("hover"), e.preventDefault()) : $(this).siblings("div").length > 0 && $(this).toggleClass("hover")
    }), $("body").click(function(e) {
        $(".spanauto").is(e.target) || 0 !== $(".spanauto").has(e.target).length || ($(".head-entry .content-toggle").removeClass("open"), $(" .dropmenu-toggle").children().removeClass("hover"), $(".head-entry .dropmenu-toggle").removeClass("hover"))
    })

    $('.block_app_inner .main_btns li a, .second_catalog_navs li a').click(function(event) {
        var showBlock = $(this).attr('href');
        $('.block_app .block_app_inner').slideUp();
        $(showBlock).slideDown(function () {
          if (showBlock == "#app_test") {
            $('#test_step1').find('h2').addClass('fadeInLeft');
            $('#test_step1').find('.question_item').addClass('fadeInUp');
          }
        });
        $('.second_catalog_navs li a').removeClass('app_active_menu');
        $('.second_catalog_navs li a[href="'+showBlock+'"]').addClass('app_active_menu');

        return false;
    });
    $('.block_app_inner a.go_home').click(function(event) {
        $('.block_app .block_app_inner').slideUp(100);
        $('#app_main').slideDown(300);
        return false;
    });

    jQuery('.second_catalog_items a').fancybox({
        padding : 0,
        wrapCSS: 'app_popup_wrapp',
        helpers: {
          overlay: {
            locked: false
          }
        },
        beforeLoad: function () {

        },
        afterLoad: function () {
          var checked = $('#app_sets').find('[data-check="checked"]').length;
          $('.app_popup .compare_btn_popup .btn_compare').children('i').text(checked);
          if ($(this.element).parent('.grid_item').attr('data-check')== 'checked') {
            this.content.find('label').children('input').prop('checked', true).addClass('check');
            console.log('checked')
          }
          else{
            this.content.find('label').children('input').removeAttr('checked');;
            console.log('no-checked');
          }
          $('.btn_compare_set').children('i').text(checked);
          var addThis = $(this.element);
          if (addThis.attr('rel') == 'app_group2') {
            this.content.find('label input').change(function() {
              //
              if ($(this).is(':checked')) {
                addThis.closest('.grid_item').attr('data-check', 'checked');
                var checked = $('#app_sets').find('[data-check="checked"]').length;
                addThis.next('label').children('input').prop('checked', true);
                $('.btn_compare_set').children('i').text(checked);
                $('.app_popup .compare_btn_popup .btn_compare').children('i').text(checked);
                if (checked >= 2) {
                  $('#app_sets .btn_compare_set, .app_popup .compare_btn_popup .btn_compare').show();
                }
                else{
                  $('#app_sets .btn_compare_set, .app_popup .compare_btn_popup .btn_compare').hide();
                }
              }
              else{
                addThis.closest('.grid_item').attr('data-check', '');
                addThis.next('label').children('input').prop('checked', false);
                var checked = $('#app_sets').find('[data-check="checked"]').length;
                $('.btn_compare_set').children('i').text(checked);
                $('.app_popup .compare_btn_popup .btn_compare').children('i').text(checked);
                if (checked >= 2) {
                $('#app_sets .btn_compare_set, .app_popup .compare_btn_popup .btn_compare').show();
                }
                else{
                    $('#app_sets .btn_compare_set, .app_popup .compare_btn_popup .btn_compare').hide();
                }
              }
            });
          }

          this.content.find('.btn_compare').click(function() {
            $.fancybox.close ;
          });


        },


    });


    $('#app_sets label input').change(function() {

        var popupID = $(this).closest('.grid_item').find('a').attr('href');

        if ($(this).is(':checked')) {
            $(this).closest('.grid_item').attr('data-check', 'checked');
            $(popupID).find('label').children('input').prop('checked', true);
             var checked = $('#app_sets').find('[data-check="checked"]').length;
             $('.btn_compare_set, .app_popup .compare_btn_popup .btn_compare').children('i').text(checked);
            if (checked >= 2) {
              $('#app_sets .btn_compare_set, .app_popup .compare_btn_popup .btn_compare').show();
            }
            else{
              $('#app_sets .btn_compare_set, .app_popup .compare_btn_popup .btn_compare').hide();
            }
        }
        else{
           $(this).closest('.grid_item').attr('data-check', '');
           var checked = $('#app_sets').find('[data-check="checked"]').length;
           $(popupID).find('label').children('input').prop('checked', false);
           $('.btn_compare_set, .app_popup .compare_btn_popup .btn_compare').children('i').text(checked);
           if (checked >= 2) {
                $('#app_sets .btn_compare_set, .app_popup .compare_btn_popup .btn_compare').show();
            }
            else{
                $('#app_sets .btn_compare_set, .app_popup .compare_btn_popup .btn_compare').hide();
            }
        }
    });

    $('#app_sets .btn_compare_set, .app_popup .btn_compare').click(function() {
      $.fancybox.close();
      $('.block_app .block_app_inner').slideUp();
      $('#app_compare_block').slideDown();

      $('#app_sets .grid_item[data-check="checked"]').each(function() {
       var imgTitle= $(this).find('a').html();
       var popupID = $(this).find('a').attr('href');
       var popupInfo = $(popupID).find('.right_info table').html();
       $('#app_compare_block .compare_slider').append('<div class="item">'+imgTitle+'<table>'+popupInfo+'</table>'+'</div>');
      });

      var slider = $('#app_compare_block .compare_slider').bxSlider({
        controls: false,
        pager: false,
        touchEnabled: true,
        minSlides: 3,
        maxSlides: 3,
        slideSelector: '.compare_slider .item',
        slideWidth: 230,
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSliderLoad: function () {
          $('#app_compare_block .go_in_catalog').click(function() {
            slider.destroySlider();
          });
        }
      });

      return false;
    });

    $('#app_compare_block .go_in_catalog').click(function() {
      $('#app_compare_block').slideUp();
      $('#app_sets').slideDown();
      $('#app_compare_block .compare_slider').html(' ');
      return false;
    });


    function testIngenio() {
      $('.test_questions').each(function() {
        var set = $(this).find('.question_item.active_question').attr('data-answer1-1');
        var acs1 = $(this).find('.question_item.active_question').attr('data-answer2-1'),
            acs2 = $(this).find('.question_item.active_question').attr('data-answer2-2'),
            acs3 = $(this).find('.question_item.active_question').attr('data-answer2-3');
        if (set) {
          var setHtml = $('.app_second_block').find('a[href="'+set+'"]').html();
          $('#app_test .test_result .result_row1 table tr').append('<td><a href="'+set+'">'+setHtml+'</a></td>')
        }
        if (acs1) {
          var acs1Html = $('.app_second_block').find('a[href="'+acs1+'"]').html();
          $('#app_test .test_result .result_row2 table tr').append('<td><a href="'+acs1+'">'+acs1Html+'</a></td>')
        }
        if (acs2) {
          var acs2Html = $('.app_second_block').find('a[href="'+acs2+'"]').html();
          $('#app_test .test_result .result_row2 table tr').append('<td><a href="'+acs2+'">'+acs2Html+'</a></td>')
        }
        if (acs3) {
          var acs3Html = $('.app_second_block').find('a[href="'+acs3+'"]').html();
          $('#app_test .test_result .result_row2 table tr').append('<td><a href="'+acs3+'">'+acs3Html+'</a></td>')
        }
      });
      var indexAnswerText = $('#test_step1 .active_question').index();
      if (indexAnswerText == 0) {
        $('.test_result h4').text('Освоить новые рецепты станет проще с комплектом посуды Ingenio, который мы подобрали специально для вас.');
      }
      else if(indexAnswerText == 1){
        $('.test_result h4').text('Теперь готовить вкусные и аппетитные блюда каждый день станет легко с комплектом посуды Ingenio, который мы подобрали специально для вас.');
      }
      else if(indexAnswerText == 2){
        $('.test_result h4').text('Создавайте новые кулинарные шедевры на своей кухне с комплектом посуды Ingenio, который мы подобрали специально для вас.');
      }
      else if(indexAnswerText == 3){
        $('.test_result h4').text('Достигайте превосходных результатов в приготовлении блюд любой сложности с комплектом посуды Ingenio, который мы подобрали специально для вас.');
      }
    };

    jQuery('.results_wrapp td a').fancybox({
        padding : 0,
        wrapCSS: 'app_popup_wrapp app_popup_result_test',
        helpers: {
          overlay: {
            locked: false
          }
        }

    });


    $('#app_test .test_questions .question_item').click(function() {
      $(this).addClass('active_question');
      if ($(this).parent().parent().is('#test_step4')) {
        testIngenio();
        $(this).closest('.test_questions').find('h2').addClass('fadeOutLeft');
        $(this).closest('.test_questions').find('.question_item').removeClass('fadeInUp').addClass('fadeOutDown');
        $(this).closest('.test_questions').delay(1000).hide(function () {
          $(this).closest('.test_questions').next('.test_result').slideDown(300, function () {
            $('.test_questions').find('.question_item').removeClass('fadeOutDown');
            $('.test_questions').find('h2').removeClass('fadeInLeft fadeOutLeft');
          });
        });

      }

      $(this).closest('.test_questions').find('h2').addClass('fadeOutLeft');
      $(this).closest('.test_questions').find('.question_item').removeClass('fadeInUp').addClass('fadeOutDown');
      $(this).closest('.test_questions').delay(1000).hide(function () {
        $(this).closest('.test_questions').next('.test_questions').show(function () {
          $(this).find('h2').addClass('fadeInLeft');
          $(this).find('.question_item').addClass('fadeInUp');
        });
      });


    });

    $('#app_test #retest').click(function() {
      $('#app_test .test_questions .questions_wrap .question_item').removeClass('active_question');

      $('#app_test .test_result').slideUp();
      $('#app_test #test_step1').slideDown(function () {
        $('#test_step1').find('h2').addClass('fadeInLeft');
        $('#test_step1').find('.question_item').addClass('fadeInUp');
      });
      $('#app_test .results_wrapp table tr td').remove();

      return false;
    });




    if ($(window).width() < 768) {
        $('.chiefs-list').bxSlider({
            touchEnabled: true,
            pager: false,
            infiniteLoop: true,
            slideSelector: '.chief-item',
        });

        $('#preview-videos').bxSlider({
            pager: false,
            touchEnabled: true,
            infiniteLoop: false,
            slideSelector: '.preview-videos-item',
        });
    }

});
