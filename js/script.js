$(document).ready(function(){
    
    /* ------------------------------------ */
    /* Sticky Nav */ /* Downloaded from waypoints jQuery/Zepto */
    /* ------------------------------------ */
    
    $('.js__features_section').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky_nav');
        } else{
            $('nav').removeClass('sticky_nav');
        }
    }, {
          offset: '60px;'
    });
    
    /* ------------------------------------ */
    /* Scroll on Buttons */
    /* ------------------------------------ */ 
    
    $('.js__scroll_to_plans').click(function(){
       $('html, body').animate({scrollTop:$('.js__plan_price_section').offset().top},1200) ;
    });
    
    $('.js__scroll_to_features').click(function(){
    $('html, body').animate({scrollTop:$('.js__features_section').offset().top},1000) ;
    });
    
    /* ------------------------------------ */
    /* Scroll on Navigations */ /* Downloaded from CSS Tricks Smooth Scrolling */
    /* ------------------------------------ */ 
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
    /* ------------------------------------ */
    /* Animation on Scroll */ /* Downloaded from waypoints and Animate.css */
    /* ------------------------------------ */
    
    $('.js__animate_features').waypoint(function(direction){
        $('.js__animate_features').addClass('animated fadeIn');
    },{
    offset:'50%;'
    });
    
    $('.js__animate_step_screen').waypoint(function(direction){
        $('.js__animate_step_screen').addClass('animated fadeInUp');
    },{
    offset:'50%;'
    });
    
    $('.js__animate_cities').waypoint(function(direction){
        $('.js__animate_cities').addClass('animated fadeIn');
    },{
    offset:'50%;'
    });
    
    $('.js__animate_premium_price').waypoint(function(direction){
        $('.js__animate_premium_price').addClass('animated tada');
    },{
    offset:'50%;'
    });
    
    /* ------------------------------------ */
    /* Mobile Navigation*/
    /* ------------------------------------ */
    
    $('.js__mobile_nav_icon').click(function(){
        var nav = $('.js__main_nav');
        var icon = $('.js__mobile_nav_icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
});