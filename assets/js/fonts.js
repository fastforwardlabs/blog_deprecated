/* Fonts */
/* Modified from Zach Leaf's approach from https://github.com/zachleat/zachleat.com/blob/5369a74e3edf32e861d5b0bfdbf0177dbc3e596f/web/js/fonts-fontfaceobserver.js */
/* Fonts */
;(function( doc ) {
  // IE9+
  if( !( 'geolocation' in navigator ) ||
    sessionStorage.chambersStageOne && sessionStorage.chambersStageTwo ) {
    return;
  }

  var docEl = doc.documentElement;
  var observer = new FontFaceObserver( "ChambersSans", {
    weight: 500
  });

  observer.load().then(function () {
    docEl.className += " chambers-loaded";
    sessionStorage.chambersStageOne = true;

    Promise.all([
      (new FontFaceObserver( "ChambersSansBold", {
        weight: 900
      })).load(),
      (new FontFaceObserver( "ChambersSansItalic", {
        weight: 500,
        style: "italic"
      })).load(),
      (new FontFaceObserver( "ChambersSansBoldItalic", {
        weight: 900,
        style: "italic"
      })).load(),
    ]).then(function () {
      docEl.className += " chambers-b-loaded";
      sessionStorage.chambersStageTwo = true;
    });
  });

})( document );