/* ============================================================
   Studio AINE
   ページの動きは2つだけ。モバイルメニューの開閉と、作品の絞り込み。
   どちらも該当要素が無ければ何もしない作りにしてある。
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

  /* ---- 作品の絞り込み ---- */

  var filters = document.querySelectorAll(".filter");
  var works = document.querySelectorAll(".work");

  if (filters.length && works.length) {
    filters.forEach(function (button) {
      button.addEventListener("click", function () {
        var wanted = button.dataset.filter;

        filters.forEach(function (b) {
          b.setAttribute("aria-pressed", b === button ? "true" : "false");
        });

        works.forEach(function (work) {
          work.hidden = wanted !== "all" && work.dataset.category !== wanted;
        });
      });
    });
  }
})();
