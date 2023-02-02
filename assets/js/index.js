const breadcrumdMenu = document.querySelector(".breadcrumd__menu");
const breadcrumdDrop = document.querySelector(".breadcrumd__drop");
const breadcrumdDropItem = document.querySelectorAll(".breadcrumd__drop-items");
const breadcrumdItemTitle = document.querySelector(".breadcrumd__item-title");
const breadcrumdMenuIcon = document.querySelector(
  ".breadcrumd__menu-icon--hide"
);
breadcrumdMenu.addEventListener("click", function () {
  breadcrumdDrop.classList.toggle("breadcrumd__drop--toggle");
  breadcrumdItemTitle.textContent = "";
  breadcrumdMenuIcon.style.display = "block";
});

breadcrumdDropItem.forEach((item) => {
  item.addEventListener("click", () => breadcrumdGetItemMenu(item.textContent));
});

function breadcrumdGetItemMenu(textContent) {
  breadcrumdDrop.classList.toggle("breadcrumd__drop--toggle");
  let text = `<i class="fa-solid fa-caret-right"></i>${textContent}`;
  breadcrumdMenuIcon.style.display = "none";
  breadcrumdItemTitle.innerHTML = text;
}
