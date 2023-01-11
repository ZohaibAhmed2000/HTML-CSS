$(function () {



    $('[href="#"]').attr("href", "javascript:;");
    //*****************************
    // Match Height Functions
    //*****************************
    $('.matchheight').matchHeight();
    //     $('table tr td').each(function () {
    //     if ($(this).text() == 'null') {
    //         $(this).css({'border-left' : 'transparent','border-right' : 'transparent'});
    //     }
    // });
    $("input[data-input]").flatpickr();


    //*****************************
    // Request Popup Form
    //*****************************

    $('.hasnotification').click(function () {
        $('.notif-menu').toggleClass('active');
        $('.overlay-bg:not(.popup)').fadeToggle();

    });

    
    $('.profile-menu-toggle').click(function () {
        $(this).next().toggleClass('active');
        $('.overlay-bg:not(.popup)').fadeToggle();

    });

    
    $('.overlay-bg').click(function () {
        $('.notif-menu').removeClass('active');

        $('.profile-menu-toggle').next().removeClass('active');
        $('.overlay-bg').hide();

    });

    $(".dropdownbox").click(function () {
        $(this).next('.DPmenu').slideToggle();
        $(this).children('p').toggleClass('active');
        $(".DPmenu > li").click(function () {
            $(this).parent().prev().children('p').html($(this).html());
            $(this).parent().prev().children('p').toggleClass('active');
            // $(".dropdownbox > p").html($(this).html());
            $(this).parent().slideUp("");
        });
    });


    $('.overlay-menu').click(function () {
        $('.nav-btn').children('span.lines').toggleClass('active');
        $('.burgerMenu').slideToggle('');
        $('.overlay-menu').fadeOut();
    });


    $('.edit-btn-toggle').click(function () {
        $('.popup-window.form-popup').fadeIn();
        $('.overlay-bg').fadeIn();
    });
    $('.create-btn').click(function () {
        $('.popup-window.create').fadeIn();
        $('.overlay-bg').fadeIn();
    });

    $('.closebtn,.overlay-bg.popup').click(function () {
        $('.popup-window').fadeOut();
        $('.overlay-bg, .overlay-bgg').fadeOut();

    });
    $(document).ready(function () {
        $('.careers_list > div.careerfilter.' + $(this).attr('rel')).show();

        $('div.filterByCheck').find('input:checkbox').live('click', function () {
            var legchecked = $('input[type=checkbox]:checked').length;

            if (legchecked > 0) {
                $('.careers_list > div.careerfilter').hide();
                $('div.filterByCheck').find('input:checked').each(function () {
                    $('.careers_list > div.careerfilter.' + $(this).attr('rel')).show();
                });
            }
            else {
                $('.careers_list > div.careerfilter').show();
            }
        });
    });
    $(document).ready(function () {
        $('.CareerError').hide();

        $("#filter").keyup(function () {
            // if( this.value.length < 3 ) return;

            // Retrieve the input field text and reset the count to zero
            var filter = $(this).val(),
                count = 0;

            // Loop through the comment list
            $(".box.career .title").each(function () {

                // If the list item does not contain the text phrase fade it out
                if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                    $(this).parent().parent().fadeOut(0);

                    // Show the list item if the phrase matches and increase the count by 1
                } else {
                    $(this).parent().parent().show();
                    count++;

                }

            });

            // Update the count
            var numberItems = count;
            $("#filter-count").text("Number of Comments = " + count);
            if (count == 0) {

                $('.CareerError').show();
                // alert('not found');
            }
            else {
                $('.CareerError').hide();

            }
        });
    });
    $(document).ready(function () {

        // /* Hamburger menu animation */
        // $('.open-button').click(function () {
        //     $(this).toggleClass('open');
        // });

        // /* Menu fade/in out on mobile */
        // $(".open-button").click(function (e) {
        //     e.preventDefault();
        //     $(".mobile-menu").toggleClass('open');
        // });

    });
    //*****************************
    // Tabbing
    //*****************************
    $('.tabbing-link li').first().addClass('current');
    $('.tabbing-content .tab-content').first().addClass('current');

    $('.tabbing-link li').click(function () {
        $('.tabbing-link li').removeClass('current');
        $('.tabbing-content .tab-content').removeClass('current');
        $(this).addClass('current');
        var tab_id = $(this).index();
        tab_id += 1;
        $('.tabbing-content .tab-content:nth-child(' + tab_id + ')').addClass('current');
        if($(this).hasClass('file-search-toggle')){
            $('.filesSearch').slideDown();
        }
        else{
            $('.filesSearch').slideUp();
        }
        if($(this).hasClass('contacts-search-toggle')){
            $('.contactsSearch').slideDown();
        }
        else{
            $('.contactsSearch').slideUp();
        }
    });
    $(document).ready(function () {

        if ($(window).width() < 992) {
            $('.single_gallery-slider').removeClass('single_slider-dna');
            $('.single_gallery-slider').addClass('dots-n-arrow');
        }
    });

    if ($(window).width() < 786) {
        // mobile nav
        $('.mainnav > li > a').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).parents('li').children('.sub-menu').slideUp();
            } else {
                $('.menu-item-has-children > a').removeAttr("href");
                $(this).addClass('active');
                $(this).parents('li').children('.sub-menu').slideDown();
                $(this).parents('li').siblings('li').children('a').removeClass('active');
                $(this).parents('li').siblings('li').children('.sub-menu').slideUp();
            }
        });

        $('.mainnav > li > ul > li > a').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).siblings('.sub-menu').slideUp();
            } else {
                $(this).addClass('active');
                $(this).parents('li').children('.sub-menu').slideDown();
                $(this).parents('li').siblings('li').children('a').removeClass('active');
                $(this).parents('li').siblings('li').children('.sub-menu').slideUp();
            }
        });

        $('.mainnav > li > ul > li > ul > li > a').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).siblings('.sub-menu').slideUp();
            } else {
                $(this).addClass('active');
                $(this).parents('li').children('.sub-menu').slideDown();
                $(this).parents('li').siblings('li').children('a').removeClass('active');
                $(this).parents('li').siblings('li').children('.sub-menu').slideUp();
            }
        });

    }
    else {

    }
    //*****************************
    //*****************************
    // Mobile Navigation
    //*****************************
    $('.overlay-bg').click(function () {
        $('.overlay-bg').hide();
    });
    $('.mobile-nav-btn').click(function () {
        $('.mobile-nav-btn, .mobile-nav, .app-container, body').toggleClass('active');
        $('.overlay-bg').fadeToggle();

        $(document).mouseup(function (e) {
            var container = $(".mobile-nav, .mobile-nav-btn");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.mobile-nav-btn, .mobile-nav, .app-container').removeClass('active');
            }
        });
    });

   
	
		// Drag and drop + sortable
		// Working on tablets and mobile devices?
		$( function() {
			$( ".panel-body" ).sortable({
				connectWith: ".panel-body",
				start: function( event, ui ) {
					
				},
				receive: function(event, el) {
					//$(el).find('.progress-bar').css('background-color', $(el).find('.panel-yellow').css('background-color'));
					var node = $(el.item[0].offsetParent.children[0]);
					var color = $(node[0]).css('border-top-color');
					
					$(el.item).find('.progress-bar').css('background-color', color);
				}
			});
		});
	
		
		
		
		
});