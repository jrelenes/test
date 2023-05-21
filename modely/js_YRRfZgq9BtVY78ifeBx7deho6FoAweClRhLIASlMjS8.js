  // Show less and more
  (function ($, Drupal) {
    Drupal.behaviors.video = {
      attach(context) {
        var video = $('.field--name-field-video-bg video');
        video.on('error', function(){
          $(this).parent().parent().parent().parent().removeClass('video-bg');
        });
      },
    };
  })(jQuery, Drupal);
;
