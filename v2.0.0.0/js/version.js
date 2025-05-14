(function () {
    const version = "v2.0.0.0";

    window.addEventListener("DOMContentLoaded", function () {
        const footerVersion = document.createElement("div");
        footerVersion.textContent = version;

        footerVersion.style.position = "fixed";
        footerVersion.style.bottom = "0";
        footerVersion.style.left = "0";
        footerVersion.style.width = "100%";
        footerVersion.style.backgroundColor = "#000";
        footerVersion.style.color = "#fff";
        footerVersion.style.textAlign = "center";
        footerVersion.style.padding = "5px 0";
        footerVersion.style.fontSize = "12px";
        footerVersion.style.zIndex = "9999";

        document.body.appendChild(footerVersion);
    });
})();
