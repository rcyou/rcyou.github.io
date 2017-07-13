function typed() {
  $(".js-typed_titles").typed({
    stringsElement: $('.personal_titles'),
    loop: true,
    loopCount: false, //infinite
    startDelay: 5000,
    typeSpeed: 50,
    backDelay: 2000,
    backSpeed: 75
  });
}

// track outbound links
// on click, get the href attribute and fire an anaytics event
// include URL in parameters sent to Google Analytics
// via http://veithen.github.io/2015/01/24/outbound-link-tracking.html
//
function trackOutboundLink() {
  $("a.outbound").click(function(e) {
      var url = $(this).attr("href");
      ga("send", "event", "outbound", "click", url, {
        'transport': 'beacon'
      });
    });
}

// add a class to the SVG illustration to trigger a wink
function wink_animation() {
  setInterval(function(){
      $("#illustration").toggleClass('winky_face');
  }, 5000);
}

$(document).ready(function() {
  typed();
  trackOutboundLink();
  wink_animation();
});
