(function () {
    const version = "v1.0.0.0";

    window.addEventListener("DOMContentLoaded", function () {
        const versionDiv = document.createElement("div");
        versionDiv.textContent = version;
        versionDiv.id = "version-bar";

        const wrapper = document.querySelector(".container-wrapper");
        if (wrapper) {
            wrapper.appendChild(versionDiv);
        }
    });
})();