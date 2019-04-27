// Mozilla, Opera, Webkit 
if ( document.addEventListener ) {
  document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
    domReady();
  }, false );

// If IE event model is used
} else if ( document.attachEvent ) {
  // ensure firing before onload
  document.attachEvent("onreadystatechange", function(){
    if ( document.readyState === "complete" ) {
      document.detachEvent( "onreadystatechange", arguments.callee );
      domReady();
    }
  });
}

//
function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

var isInViewport = function (elem) {
    rect = elem.getBoundingClientRect();
  
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
};

function forEachVisibleItem(nodeList) {
  for (i = 0; i < nodeList.length; ++i) {
    if (isInViewport(nodeList[i]) && !nodeList[i].hasAttribute("data-visible")) {
      nodeList[i].setAttribute("data-visible", "true"); 
    }
  }
}

// track outbound links
// on click, get the href attribute and fire an anaytics event
// include URL in parameters sent to Google Analytics
// via http://veithen.github.io/2015/01/24/outbound-link-tracking.html

function trackOutboundLink() {
  $("a.outbound").click(function(e) {
      var url = $(this).attr("href");
      ga("send", "event", "outbound", "click", url, {
        'transport': 'beacon'
      });
    });
}

var menu_toggle = document.getElementById('menu_toggle');
var navigation = menu_toggle.parentNode;
var site_menu = document.getElementById('site_menu');

function toggle_menu() {
	menu_toggle.addEventListener('click', function () {
		if (navigation.getAttribute('data-state') == 'open') {
			navigation.setAttribute('data-state', 'closed');
			site_menu.setAttribute('aria-hidden', 'true');
		} else {
			navigation.setAttribute('data-state', 'open');
			site_menu.setAttribute('aria-hidden', 'false');
		}
	});
}

function domReady () {
  document.body.className += " javascript";
  // trackOutboundLink();
  toggle_menu();

  var page_sections = document.querySelectorAll('main > section'), i;
  var aside_sections = document.querySelectorAll('aside > div'), i;

  forEachVisibleItem(page_sections);
  forEachVisibleItem(aside_sections);

  window.addEventListener('scroll', function (event) {
    forEachVisibleItem(page_sections);
    forEachVisibleItem(aside_sections);
  }, false);
}
