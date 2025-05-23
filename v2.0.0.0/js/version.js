(function () {
  const version = "v2.0.0.0";
  const basePath = window.location.origin + "/did-demo-app/v2.0.0.0/guide/";

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
        cursor: pointer;
      }
      #guide-button img {
        width: 16px;
        height: 16px;
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
        margin: 10px auto;
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

    const guideImg = document.createElement("img");
    guideImg.src = basePath + "guide_icon.png";
    guideImg.alt = "Guide";
    guideButton.appendChild(guideImg);
    versionDiv.appendChild(guideButton);

    wrapper.appendChild(versionDiv);

    const modalHTML = `
      <div id="md-modal" style="display:none;">
        <div class="md-modal-backdrop"></div>
        <div class="md-modal-content">
          <button class="md-close-button">Close ✕</button>
          <div id="md-content"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    guideButton.addEventListener("click", () => {
      const pathname = window.location.pathname;
      const pageName = pathname.substring(pathname.lastIndexOf('/') + 1);
    
      fetch(basePath + "demoapp_detail_guide.md")
      .then(res => res.text())
      .then(md => {
        const regex = new RegExp(`##\\s*${pageName}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, "i");
        const match = md.match(regex);
    
        if (!match) {
          alert("이 페이지에 대한 가이드가 없습니다.");
          return;
        }
    
        let section = match[1].trim();
        section = section.replace(/^##.*\n/, '').trim();
    
        // 마크다운을 HTML로 렌더링
        let html = marked.parse(section);
    
        // 🔧 이미지 경로 수동 치환
        html = html.replace(/<img\s+[^>]*src=["'](?!https?:\/\/)(\.\/)?images\/([^"']+)["']/gi, (match, _, filename) => {
          return match.replace(/src=["'][^"']+["']/, `src="${basePath}images/${filename}"`);
        });
    
        // 모달에 삽입
        document.getElementById("md-content").innerHTML = html;
        document.getElementById("md-modal").style.display = "block";
      })
      .catch(err => {
        console.error("Markdown 로딩 오류:", err);
        alert("데모 가이드를 불러오지 못했습니다.");
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