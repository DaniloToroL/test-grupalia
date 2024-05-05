export function displayMenu(event) {
  const { top, left } = event.target.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();

  const menu = document.getElementById("menu");
  const newTop = top - bodyRect.top + 30;
  const newLeft = left + 10;
  if (
    menu.style.display === "block" &&
    Math.abs(menu.style.top.replace("px", "") - newTop) < 10 &&
    Math.abs(menu.style.left.replace("px", "") - newLeft) < 10
  ) {
    menu.style.display = "none";
    return;
  }

  menu.style.top = `${newTop}px`;
  menu.style.left = `${newLeft}px`;
  menu.style.display = "block";
}
