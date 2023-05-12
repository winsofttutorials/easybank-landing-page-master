let activeTabs = document.getElementsByClassName("tabLinks");

// Adding MouseOver effect
function mouseOvering() {
  for (const activeTab of activeTabs) {
    activeTab.classList.remove("activeLink");
  }
  event.currentTarget.classList.add("activeLink");
}
