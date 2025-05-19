(function () {
  const version = "v1.0.0.0";
  const basePath = window.location.origin + "/did-demo-app/v1.0.0.0/guide/";

  window.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".container-wrapper");
    if (!wrapper) return;

    const style = document.createElement("style");
    style.textContent = `
      #version-bar {
        background-color: #000;
        color: #fff;
        padding: 6px 12px;
        font-size: 12px;
        width: 375px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #version-label {
        font-weight: bold;
      }

      #guide-button {
        background: none;
        border: none;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
      }

      #md-modal {
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
      }
      .md-modal-backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      .md-modal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90%;
        max-width: 600px;
        max-height: 80%;
        overflow-y: auto;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        font-family: Arial, sans-serif;
      }
      .md-close-button {
        position: absolute;
        top: 10px;
        right: 14px;
        background: #ed8202;
        color: #fff;
        border: none;
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
      }
      .md-modal-content img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 10px 0;
      }
      .md-modal-content h1, h2, h3 {
        color: #ed8202;
      }
    `;
    document.head.appendChild(style);

    const versionDiv = document.createElement("div");
    versionDiv.id = "version-bar";

    const versionText = document.createElement("span");
    versionText.id = "version-label";
    versionText.textContent = `${version}`;
    versionDiv.appendChild(versionText);

    const guideButton = document.createElement("button");
    guideButton.id = "guide-button";
    guideButton.title = "demo guide";
    guideButton.innerHTML = "❓";
    versionDiv.appendChild(guideButton);

    wrapper.appendChild(versionDiv);

    const modalHTML = `
      <div id="md-modal" style="display:none;">
        <div class="md-modal-backdrop"></div>
        <div class="md-modal-content">
          <button class="md-close-button">닫기 ✕</button>
          <div id="md-content"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    guideButton.addEventListener("click", () => {
      // fetch(basePath + "demoapp_guide_ko.md")
      //   .then(res => {
      //     if (!res.ok) throw new Error("failed to Markdown file laod");
      //     return res.text();
      //   })
      //   .then(md => {
      //     const html = marked.parse(md);
      //     document.getElementById("md-content").innerHTML = html;
      //     document.getElementById("md-modal").style.display = "block";
      //   })
      //   .catch(err => alert(err.message));
      fetch(basePath + "test.md")
        .then(res => res.text())
        .then(md => {
          const renderer = new marked.Renderer();
          renderer.image = function(href, title, text) {
            const fixedHref = href.startsWith("http")
              ? href
              : basePath + href;
            return `<img src="${fixedHref}" alt="${text}" ${title ? `title="${title}"` : ""} />`;
          };
          const html = marked.parse(md, { renderer });
          document.getElementById("md-content").innerHTML = html;
          document.getElementById("md-modal").style.display = "block";
        });
    });

    document.addEventListener("click", (e) => {
      if (
        e.target.matches(".md-close-button") ||
        e.target.matches(".md-modal-backdrop")
      ) {
        document.getElementById("md-modal").style.display = "none";
      }
    });
  });
})();
