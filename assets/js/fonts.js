/* Fonts */
/* Modified from Zach Leaf's approach from https://github.com/zachleat/zachleat.com/blob/5369a74e3edf32e861d5b0bfdbf0177dbc3e596f/web/js/fonts-fontfaceobserver.js */
/* Fonts */
;(function(doc) {
  // IE9+
  if(!('geolocation' in navigator) ||
    sessionStorage.chambersStageOne && sessionStorage.chambersStageTwo) {
    return;
  }

  var docEl = doc.documentElement;
  var chambers_observer = new FontFaceObserver( "ChambersSansMedium", {
    weight: 500
  });

  chambers_observer.load().then(function () {
    docEl.className += " chambers-loaded";
    sessionStorage.chambersStageOne = true;

    Promise.all([
      (new FontFaceObserver( "ChambersSansBlack", {
        weight: 900
      })).load(),
      (new FontFaceObserver( "ChambersSansMediumItalic", {
        weight: 500,
        style: "italic"
      })).load(),
      (new FontFaceObserver( "ChambersSansBlackItalic", {
        weight: 900,
        style: "italic"
      })).load(),
    ]).then(function () {
      docEl.className += " chambers-b-loaded";
      sessionStorage.chambersStageTwo = true;
    });
  });

  var docEl = doc.documentElement;
  var seravek_observer = new FontFaceObserver( "SeravekWebBasic", {
    weight: 400
  });

  seravek_observer.load().then(function () {
    docEl.className += "seravek-loaded";
    sessionStorage.seravekStageOne = true;

    Promise.all([
      (new FontFaceObserver( "SeravekWebBasicBold", {
        weight: 700
      })).load(),
      (new FontFaceObserver( "SeravekWebBasicRegularItalic", {
        weight: 400,
        style: "italic"
      })).load(),
      (new FontFaceObserver( "SeravekWebBasicBoldItalic", {
        weight: 700,
        style: "italic"
      })).load(),
    ]).then(function () {
      docEl.className += " seravek-b-loaded";
      sessionStorage.seravekStageTwo = true;
    });
  });

})( document );