const toggleButton = document.getElementById("toggleMode");

// Cek localStorage saat halaman dibuka
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});
