const root = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const navButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav");

function updateThemeLabel() {
  if (!themeButton) return;
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  themeButton.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
}

if (themeButton) {
  updateThemeLabel();
  themeButton.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateThemeLabel();
  });
}

if (navButton && navigation) {
  const navLabel = navButton.querySelector(".sr-only");

  function setNavigation(open) {
    navButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    if (navLabel) navLabel.textContent = open ? "Close navigation" : "Open navigation";
  }

  navButton.addEventListener("click", () => {
    const isOpen = navButton.getAttribute("aria-expanded") === "true";
    setNavigation(!isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigation(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navButton.getAttribute("aria-expanded") === "true") {
      setNavigation(false);
      navButton.focus();
    }
  });
}
