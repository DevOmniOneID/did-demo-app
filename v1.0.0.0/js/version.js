(function () {
  const version = "v1.0.0.0";
  const basePath = window.location.origin + "/did-demo-app/v1.0.0.0/guide/";

  window.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".container-wrapper");
    if (!wrapper) return;

    // 스타일 정의
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
        margin: 10px 0;
      }
      .md-modal-content h1, h2, h3 {
        color: #ed8202;
      }
    `;
    document.head.appendChild(style);

    // 상단 바
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

    // 모달 삽입
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
    
      fetch(basePath + "demoapp_detail_guide_ko.md")
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
    
          const renderer = new marked.Renderer();
          renderer.image = function (href, title, text) {
            href = typeof href === 'string' ? href.trim() : '';
            console.log("img path:", href);
            if (!href) return '';
    
            const isAbsolute = /^https?:\/\//i.test(href);
            if (isAbsolute) {
              return `<img src="${href}" alt="${text || ''}" ${title ? `title="${title}"` : ''} />`;
            }
    
            href = href.replace(/^(\.\/)?images\//, '');
            const fixedHref = basePath + "images/" + href;
            return `<img src="${fixedHref}" alt="${text || ''}" ${title ? `title="${title}"` : ''} />`;
          };
    
          // 📌 전역 렌더러 등록
          marked.use({ renderer });
    
          const html = marked.parse(section);  // 이제 renderer는 확실히 반영됨
          document.getElementById("md-content").innerHTML = html;
          document.getElementById("md-modal").style.display = "block";
        })
        .catch(err => {
          console.error("Markdown 로딩 오류:", err);
          alert("데모 가이드를 불러오지 못했습니다.");
        });
    });

    // 모달 닫기
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
