// const SMOOTH_SCROLL_DURATION = 700;

// $('.smooth-scroll').on('click', 'a', function () {

//   const elAttr = $(this).attr('href');
//   if (typeof elAttr !== typeof undefined && elAttr.indexOf('#') === 0) {

//     const offset = $(this).attr('data-offset') ? $(this).attr('data-offset') : 0;
//     const setHash = $(this).parentsUntil('.smooth-scroll').last().parent().attr('data-allow-hashes');

//     $('body,html').animate({
//       scrollTop: $(elAttr).offset().top - offset
//     }, SMOOTH_SCROLL_DURATION);

//     if (typeof setHash !== typeof undefined && setHash !== false) {

//       history.replaceState(null, null, elAttr);
//     }

//     return false;
//   }
// });


// const SMOOTH_SCROLL_DURATIONN = 700;

//   function scrollToSection(sectionId) {
//     const elAttr = '#' + sectionId;
//     const offset = 50; // Anda dapat mengganti nilai offset sesuai kebutuhan

//     $('body,html').animate({
//       scrollTop: $(elAttr).offset().top - offset
//     }, SMOOTH_SCROLL_DURATIONN);

//     // Periksa apakah data-allow-hashes diatur sebagai false pada tombol yang diklik
//     const allowHashes = $(`.smooth-scroll[data-allow-hashes="false"][onclick*="${sectionId}"]`).length === 0;

//     if (allowHashes) {
//       history.replaceState(null, null, elAttr);
//     }
//   }


const SMOOTH_SCROLL_DURATION = 700;

  function scrollToSection(sectionId) {
    const elAttr = '#' + sectionId;
    
    // Ambil nilai offset dari tombol yang bersangkutan
    const offset = $(`.smooth-scroll[onclick*="${sectionId}"]`).data('offset') || 0;

    $('body,html').animate({
      scrollTop: $(elAttr).offset().top - offset
    }, SMOOTH_SCROLL_DURATION);

    // Periksa apakah data-allow-hashes diatur sebagai false pada tombol yang diklik
    const allowHashes = $(`.smooth-scroll[data-allow-hashes="false"][onclick*="${sectionId}"]`).length === 0;

    if (allowHashes) {
      history.replaceState(null, null, elAttr);
    }
  }