$(function () {
  let header = $("#header");
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  $(window).on("scroll road resize", function () {
    let headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      700
    );
  });

  /* Nav Toggle */
  $("#navToggle").on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });
});
