/* Fondo con íconos flotantes (llama, flor, olas, casco, helado, lego, pollo…).
   Inyecta los símbolos SVG y los coloca en #bg. */
(function () {
  var DEFS =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<symbol id="ic-palm" viewBox="0 0 24 24">' +
    '<path d="M12 21c-.3-5 .3-8 2.3-11.4"/>' +
    '<path d="M14.3 9.6C11.8 8 8.8 8.6 6.8 11c2.2-.8 3.8-.5 5 .3"/>' +
    '<path d="M14.3 9.6c2.5-1.6 5.5-1 7.5 1.4-2.2-.8-3.9-.5-5.1.3"/>' +
    '<path d="M14.3 9.6c.4-2.6-.7-5-3.2-6.4 1 2 1 3.6.5 5.1"/>' +
    '<circle cx="14.3" cy="9.6" r=".8"/>' +
    "</symbol>" +
    '<symbol id="ic-pollo" viewBox="0 0 24 24">' +
    '<path d="M16.8 3.8a5 5 0 0 1 .3 10c-1 0-1.8.2-2.5.9"/>' +
    '<path d="M14.6 14.7 9 20"/>' +
    '<circle cx="8.3" cy="19.6" r="1.5"/><circle cx="6.9" cy="21" r="1.5"/>' +
    "</symbol>" +
    '<symbol id="ic-enojado" viewBox="0 0 24 24">' +
    '<circle cx="12" cy="12" r="9"/>' +
    '<path d="M7.8 9.3 10.6 10.6"/><path d="M16.2 9.3 13.4 10.6"/>' +
    '<circle cx="9.3" cy="12.4" r=".55"/><circle cx="14.7" cy="12.4" r=".55"/>' +
    '<path d="M8.8 16.8c1.3-1.1 5.1-1.1 6.4 0"/>' +
    "</symbol>" +
    '<symbol id="ic-lego" viewBox="0 0 24 24">' +
    '<rect x="5" y="9" width="14" height="9.2" rx="1.1"/>' +
    '<path d="M8 9V7.4a1.35 1.35 0 0 1 2.7 0V9"/>' +
    '<path d="M13.3 9V7.4a1.35 1.35 0 0 1 2.7 0V9"/>' +
    "</symbol>" +
    '<symbol id="ic-fleur" viewBox="0 0 24 24">' +
    '<path d="M12 13C10.6 9.5 10.6 6 12 3c1.4 3 1.4 6.5 0 10z"/>' +
    '<path d="M12 13c1.9-2.4 4.8-3.6 8-3.5-1.8 2.5-4.4 3.9-8 3.5z"/>' +
    '<path d="M12 13C10.1 10.6 7.2 9.4 4 9.5c1.8 2.5 4.4 3.9 8 3.5z"/>' +
    '<path d="M12 13c2.4 1.6 4.2 4.1 4.8 7.5-2.8-1.2-4.4-3.7-4.8-7.5z"/>' +
    '<path d="M12 13c-2.4 1.6-4.2 4.1-4.8 7.5 2.8-1.2 4.4-3.7 4.8-7.5z"/>' +
    '<path d="M12 13l-1.6 4.2M12 13l1.6 4.2M12 13v4.6"/>' +
    "</symbol>" +
    '<symbol id="ic-llama" viewBox="0 0 24 24">' +
    '<path d="M7 20.5v-3M10.2 20.5v-3M13.4 20.5v-3"/>' +
    '<path d="M6.6 17.5h7.3a2 2 0 0 0 2-2v-3"/>' +
    '<path d="M6.6 17.5a2.5 2.5 0 0 1 0-5H14"/>' +
    '<path d="M15.9 12.5V8c0-1.6.9-2.9 2.3-3.4"/>' +
    '<path d="M18.2 4.6c1.1-.4 2.1.3 2.1 1.4 0 .9-.6 1.5-1.3 2l-1 .7"/>' +
    '<path d="M18.1 4.5 18 2.8M19.8 4.7l.8-1.5"/>' +
    "</symbol>" +
    '<symbol id="ic-waves" viewBox="0 0 24 24">' +
    '<path d="M2 8c1.7 0 1.7 2 3.5 2S7.2 8 9 8s1.7 2 3.5 2S14.2 8 16 8s1.7 2 3.5 2S21 8 22 8"/>' +
    '<path d="M2 13c1.7 0 1.7 2 3.5 2S7.2 13 9 13s1.7 2 3.5 2S14.2 13 16 13s1.7 2 3.5 2S21 13 22 13"/>' +
    '<path d="M2 18c1.7 0 1.7 2 3.5 2S7.2 18 9 18s1.7 2 3.5 2S14.2 18 16 18s1.7 2 3.5 2S21 18 22 18"/>' +
    "</symbol>" +
    '<symbol id="ic-helado" viewBox="0 0 24 24">' +
    '<path d="M8.3 10.8 12 21l3.7-10.2"/>' +
    '<path d="M7.8 10.8a1.7 1.7 0 0 0 1.7-1 1.7 1.7 0 0 0 3 0 1.7 1.7 0 0 0 1.7 1"/>' +
    '<path d="M8.2 8.6a3.8 3.8 0 0 1 7.6 0"/><path d="M8.2 8.6h7.6"/>' +
    "</symbol>" +
    '<symbol id="ic-casco" viewBox="0 0 24 24">' +
    '<path d="M4 17h16v-.4a.7.7 0 0 0-.7-.7H4.7a.7.7 0 0 0-.7.7z"/>' +
    '<path d="M5.6 15.9v-1.4C5.6 11.2 8.5 9 12 9s6.4 2.2 6.4 5.5v1.4"/>' +
    '<path d="M12 9V6.6"/>' +
    '<path d="M9.8 9.2C9.8 7.4 10.3 6.6 12 6.6s2.2.8 2.2 2.6"/>' +
    "</symbol></defs></svg>";

  // [icono, left%, top%, tamaño, rotación, opacidad, duración, tono dorado]
  var ICONS = [
    ["llama", 5, 8, 86, -6, 0.15, 16, 0],
    ["fleur", 87, 7, 64, 10, 0.17, 19, 1],
    ["waves", 74, 18, 92, 0, 0.13, 21, 0],
    ["casco", 9, 28, 72, 6, 0.15, 18, 1],
    ["helado", 89, 38, 58, -6, 0.15, 15, 0],
    ["lego", 6, 45, 64, -8, 0.17, 20, 1],
    ["llama", 86, 58, 80, 8, 0.13, 17, 0],
    ["fleur", 7, 68, 64, 0, 0.15, 22, 1],
    ["🍗", 77, 73, 58, -6, 0.5, 16, 0],
    ["casco", 16, 85, 64, 8, 0.14, 19, 1],
    ["helado", 49, 90, 56, 0, 0.12, 18, 0],
    ["fleur", 47, 3, 54, 6, 0.13, 20, 1],
    ["enojado", 30, 60, 52, 0, 0.09, 23, 0],
    ["waves", 63, 47, 60, 0, 0.08, 17, 1],
    ["🍗", 60, 12, 50, -8, 0.5, 15, 0],
    ["palm", 24, 21, 58, -6, 0.11, 21, 1],
    ["lego", 83, 52, 62, 6, 0.17, 18, 0],
  ];
  var SVGSET = [
    "palm",
    "pollo",
    "fleur",
    "llama",
    "waves",
    "helado",
    "casco",
    "enojado",
    "lego",
  ];

  document.body.insertAdjacentHTML("afterbegin", DEFS);
  var bg = document.getElementById("bg");
  if (!bg) {
    bg = document.createElement("div");
    bg.className = "bg";
    bg.id = "bg";
    document.body.insertAdjacentElement("afterbegin", bg);
  }
  ICONS.forEach(function (spec, n) {
    var t = spec[0];
    var emoji = SVGSET.indexOf(t) === -1;
    var d = document.createElement("div");
    d.className = "ic" + (spec[7] ? " g" : "") + (emoji ? " emo" : "");
    d.style.cssText =
      "left:" +
      spec[1] +
      "%;top:" +
      spec[2] +
      "%;width:" +
      spec[3] +
      "px;height:" +
      spec[3] +
      "px;opacity:" +
      spec[5] +
      ";--r:" +
      spec[4] +
      "deg;animation-duration:" +
      spec[6] +
      "s;animation-delay:-" +
      n +
      "s" +
      (emoji ? ";font-size:" + Math.round(spec[3] * 0.9) + "px" : "");
    d.innerHTML = emoji
      ? t
      : '<svg viewBox="0 0 24 24"><use href="#ic-' + t + '"/></svg>';
    bg.appendChild(d);
  });
})();
