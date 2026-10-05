const menuIcon = document.getElementById("menuIcon");
const menuIconImg = document.getElementById("menuIconImg");
const drawerMenu = document.getElementById("drawerMenu");

// HTMLファイルから見たパス。実際のファイル名に合わせてください
const iconClosed = "js/a.png";
const iconOpen = "js/a.png";

menuIcon.addEventListener("click", () => {
  const isOpen = drawerMenu.classList.toggle("open");
  menuIcon.classList.toggle("active", isOpen);
  menuIcon.setAttribute("aria-expanded", isOpen);
  menuIconImg.src = isOpen ? iconOpen : iconClosed;
  menuIconImg.alt = isOpen ? "メニューを閉じる" : "メニューを開く";
});

// メニューの外をクリックしたら閉じる
document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !drawerMenu.contains(e.target)) {
    drawerMenu.classList.remove("open");
    menuIcon.classList.remove("active");
    menuIcon.setAttribute("aria-expanded", false);
    menuIconImg.src = iconClosed;
    menuIconImg.alt = "メニューを開く";
  }
});
