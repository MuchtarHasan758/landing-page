"use strict";

const sectionSatuBtn = document.querySelector("#section-satu-btn");
const sectionDuaBtn = document.querySelector("#section-dua-btn");
const sectionSatu = document.querySelector("#section-1");
const sectionDua = document.querySelector("#section-2");

sectionSatuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sectionSatu.scrollIntoView({ behavior: "smooth" });
});

sectionDuaBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sectionDua.scrollIntoView({ behavior: "smooth" });
});
