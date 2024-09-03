// global  modal variables
var modal = $(".modal");
var closeButton = $(".js-close-button");

modal.click(function(e) {
  e.stopPropagation();
});

function stopVimeoPlayer(){
  var iframe = $( 'iframe[src*="vimeo"]' )
    // var player = $f(iframe);

  iframe.each(function( ) {
    var player = new Vimeo.Player( this );
    player.pause();
  });
}


// video  modal windows
var modalContainerForVideo = $("#modal__container-for-video");
var videoModalCloseButton = $(".js__video-close");

var colectomyOpenButton = $(".poster__colectomy");
var colectomyVideo = $("#video__colectomy");

var hysterectomyOpenButton = $(".poster__hysterectomy");
var hysterectomyVideo = $("#video__hysterectomy");

var lungOpenButton = $(".poster__lung");
var lungVideo = $("#video__lung");

var abdominalHerniaOpenButton = $(".poster__abdominal-hernia");
var abdominalHerniaVideo = $("#video__abdominal-hernia");

var antiRefluxOpenButton = $(".poster__anti-reflux");
var antiRefluxVideo = $("#video__anti-reflux");

var appendectomyOpenButton = $(".poster__appendectomy");
var appendectomyVideo = $("#video__appendectomy");

var bariatricOpenButton = $(".poster__bariatric");
var bariatricVideo = $("#video__bariatric");

var cholecystectomyOpenButton = $(".poster__cholecystectomy");
var cholecystectomyVideo = $("#video__cholecystectomy");

var splenectomyOpenButton = $(".poster__splenectomy");
var splenectomyVideo = $("#video__splenectomy");

modalContainerForVideo.click(function() {
  modal.addClass("closed");
  modalContainerForVideo.addClass("closed");
  stopVimeoPlayer();
});
videoModalCloseButton.click(function() {
  modal.addClass("closed");
  modalContainerForVideo.addClass("closed");
  stopVimeoPlayer();
});

colectomyOpenButton.click(function() {
  openVideoModal(colectomyVideo);
});
hysterectomyOpenButton.click(function() {
  openVideoModal(hysterectomyVideo);
});
lungOpenButton.click(function() {
  openVideoModal(lungVideo);
});
abdominalHerniaOpenButton.click(function() {
  openVideoModal(abdominalHerniaVideo);
});
antiRefluxOpenButton.click(function() {
  openVideoModal(antiRefluxVideo);
});
appendectomyOpenButton.click(function() {
  openVideoModal(appendectomyVideo);
});
bariatricOpenButton.click(function() {
  openVideoModal(bariatricVideo);
});
cholecystectomyOpenButton.click(function() {
  openVideoModal(cholecystectomyVideo);
});
splenectomyOpenButton.click(function() {
  openVideoModal(splenectomyVideo);
});

function openVideoModal(modalToOpen) {
  modalContainerForVideo.removeClass("closed");
  modalToOpen.removeClass("closed");

  var iframe = modalToOpen.children('iframe')
  var player = new Vimeo.Player( iframe );
  player.play();
};

// infographic modal windows
var modalContainer = $("#modal__container");
var lessPainOpenButton = $("#less-pain-open-button");
var lessPain = $("#less-pain");
var shorterStaysOpenButton = $("#shorter-stays-open-button");
var shorterStays = $("#shorter-stays");
var fasterRecoveryOpenButton = $("#faster-recovery-open-button");
var fasterRecovery = $("#faster-recovery");
var normalActivitiesOpenButton = $("#normal-activities-open-button");
var normalActivities = $("#normal-activities");
var smallerScarsOpenButton = $("#smaller-scars-open-button");
var smallerScars = $("#smaller-scars");
var fewerComplicationsOpenButton = $("#fewer-complications-open-button");
var fewerComplications = $("#fewer-complications");

modalContainer.click(function() {
  modal.addClass("closed");
  modalContainer.addClass("closed");
});
closeButton.click(function() {
  modal.addClass("closed");
  modalContainer.addClass("closed");
});

lessPainOpenButton.click(function() {
  modalContainer.removeClass("closed");
  lessPain.removeClass("closed");
});

shorterStaysOpenButton.click(function() {
  shorterStays.removeClass("closed");
  modalContainer.removeClass("closed");
});

fasterRecoveryOpenButton.click(function() {
  fasterRecovery.removeClass("closed");
  modalContainer.removeClass("closed");
});

normalActivitiesOpenButton.click(function() {
  normalActivities.removeClass("closed");
  modalContainer.removeClass("closed");
});

smallerScarsOpenButton.click(function() {
  smallerScars.removeClass("closed");
  modalContainer.removeClass("closed");
});

fewerComplicationsOpenButton.click(function() {
  fewerComplications.removeClass("closed");
  modalContainer.removeClass("closed");
});


//Smooth Scrolling. Needs improvement to add #ahnch-name to URL
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        target.focus(); // Setting focus
        if (target.is(":focus")){ // Checking if the target was focused
          return false;
        } else {
          target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        };
        return false;
      }
    }
  });
});

// Call Owl Carousel
$(document).ready(function(){
  $(".quotes-carousel--desktop").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 6000, 
    smartSpeed: 1000,
    margin:10,
    items:1
  });

  $(".quotes-carousel--responsive").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 6000, 
    smartSpeed: 1000,
    margin:10,
    items:1
  });

  $(".video-carousel").owlCarousel({
    loop:false,
    autoplay: false,
    smartSpeed: 500,
    margin:10,
    items:4,
    dots:false,
    nav: true,
    navText: ['<i class="icon icon-chevron-left-1"></i>GO BACK','MORE VIDEOS<i class="icon icon-chevron-right-1"></i>'],
    responsive : {
      // breakpoint from 640 up
      832 : {
        items:4,
        navText: ['<i class="icon icon-chevron-left-1"></i>','<i class="icon icon-chevron-right-1"></i>']
      }
    }
  });

  $(".video-carousel-mobile").owlCarousel({
    loop:false,
    autoplay: false,
    smartSpeed: 500,
    margin:10,
    items:2,
    dots:false,
    nav: true,
    navText: ['<i class="icon icon-chevron-left-1"></i>GO BACK','MORE VIDEOS<i class="icon icon-chevron-right-1"></i>'],
    responsive : {
      // breakpoint from 640 up
      832 : {
        items:4,
        navText: ['<i class="icon icon-chevron-left-1"></i>','<i class="icon icon-chevron-right-1"></i>']
      }
    }
  });
});

