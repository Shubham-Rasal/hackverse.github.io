$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

// document.querySelector(document).addEventListener("click", '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault();
//     document.querySelector(this).ekkoLightbox();
//   });