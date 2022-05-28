  /* ----------------------------------------------------------- */
  /*  CURSOR
  /* ----------------------------------------------------------- */

"use strict";

var myCursor = jQuery(".mouse-cursor");

if (myCursor.length) {
  if ($("body")) {
    const e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");
    let n,
      i = 0,
      o = !1;
    (window.onmousemove = function (s) {
      o ||
        (t.style.transform =
          "translate(" + s.clientX + "px, " + s.clientY + "px)"),
        (e.style.transform =
          "translate(" + s.clientX + "px, " + s.clientY + "px)"),
        (n = s.clientY),
        (i = s.clientX);
    }),
      $("body").on("mouseenter", "a,.trigger, .cursor-pointer", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      }),
      $("body").on("mouseleave", "a,.trigger, .cursor-pointer", function () {
        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
          (e.classList.remove("cursor-hover"),
          t.classList.remove("cursor-hover"));
      }),
      (e.style.visibility = "visible"),
      (t.style.visibility = "visible");
  }
}

var wrapper = jQuery(".gaspar");
var button = jQuery(".style-switch-wrapper .cursor li a");
var show = jQuery(".style-switch-wrapper .cursor li a.show");
var hide = jQuery(".style-switch-wrapper .cursor li a.hide");

button.on("click", function () {
  var element = jQuery(this);
  if (!element.hasClass("showme")) {
    button.removeClass("showme");
    element.addClass("showme");
  }
  return false;
});
show.on("click", function () {
  wrapper.attr("data-magic-cursor", "");
});
hide.on("click", function () {
  wrapper.attr("data-magic-cursor", "hide");
});

