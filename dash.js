function navigate(e, id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    e.currentTarget.classList.add('active');
}

function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById("themeBtn");
    const icon = btn.querySelector("i");
    const text = btn.querySelector("span");

    if (html.dataset.theme === "light") {
        html.dataset.theme = "dark";
        icon.setAttribute("data-lucide", "sun");
        text.innerText = "Light Mode";
    } else {
        html.dataset.theme = "light";
        icon.setAttribute("data-lucide", "moon");
        text.innerText = "Dark Mode";
    }

    lucide.createIcons();
}
