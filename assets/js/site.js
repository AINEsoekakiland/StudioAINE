/* ============================================================
   Studio AINE
   ページの動きはモバイルメニューの開閉だけ。
   該当要素が無ければ何もしない作りにしてある。
   ============================================================ */

(function () {
  "use strict";

  /* ---- モバイルメニュー ---- */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // メニュー内のリンクを押したら閉じる
    nav.addEventListener("click", function (e) {
      if (e.target.tagName !== "A") return;
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

})();
