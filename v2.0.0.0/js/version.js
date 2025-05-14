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
        versionDiv.style.width = "375px";
        versionDiv.style.borderBottomLeftRadius = "20px";
        versionDiv.style.borderBottomRightRadius = "20px";

        const mobileContainer = document.querySelector(".mobile-container");
        if (mobileContainer && mobileContainer.parentElement) {
            mobileContainer.parentElement.insertBefore(versionDiv, mobileContainer.nextSibling);
        }
    });
})();
