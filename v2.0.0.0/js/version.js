(function () {
    const version = "v2.0.0.0";

    window.addEventListener("DOMContentLoaded", function () {
        const footer = document.createElement("div");
        footer.textContent = version;
        footer.style.backgroundColor = "#000";
        footer.style.color = "#fff";
        footer.style.textAlign = "center";
        footer.style.padding = "10px 0";
        footer.style.fontSize = "14px";

        document.body.appendChild(footer);
    });
})();
