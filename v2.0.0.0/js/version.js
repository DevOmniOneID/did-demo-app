(function () {
    const version = "v2.0.0.0";

    window.addEventListener("DOMContentLoaded", function () {
        const versionDiv = document.createElement("div");
        versionDiv.textContent = version;

        versionDiv.style.backgroundColor = "#000";
        versionDiv.style.color = "#fff";
        versionDiv.style.textAlign = "center";
        versionDiv.style.padding = "6px 0";
        versionDiv.style.fontSize = "12px";

        const mobileContainer = document.querySelector(".mobile-container");
        if (mobileContainer) {
            mobileContainer.appendChild(versionDiv);
        }
    });
})();
