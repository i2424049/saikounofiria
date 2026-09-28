const menuIcon = document.getElementById("menuIcon");
const menuIconImg = document.getElementById("menuIconImg");
const drawerMenu = document.getElementById("drawerMenu");

const iconClosed = "..css/image/aicon/menyu.png";
const iconOpen = "..css/image/aicon/menyu.png";

menuIcon.addEventListener("click", () => {
  const isOpen = drawerMenu.classList.toggle("open");
  menuIcon.classList.toggle("active", isOpen);
  menuIconImg.src = isOpen ? iconOpen : iconClosed;
  menuIconImg.alt = isOpen ? "メニューを閉じる" : "メニューを開く";
});

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !drawerMenu.contains(e.target)) {
    drawerMenu.classList.remove("open");
    menuIcon.classList.remove("active");
    menuIconImg.src = iconClosed;
    menuIconImg.alt = "メニューを開く";
  }
});
