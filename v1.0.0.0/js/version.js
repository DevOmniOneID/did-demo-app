(function () {
  const version = "v1.0.0.0";
  const basePath = window.location.origin + "/did-demo-app/v1.0.0.0/";

  window.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".container-wrapper");
    if (!wrapper) return;

    // ─── 버전 바 ───────────────────────
    const versionDiv = document.createElement("div");
    versionDiv.id = "version-bar";

    // 텍스트 노드: 버전명
    const versionText = document.createElement("span");
    versionText.textContent = `버전: ${version}`;
    versionDiv.appendChild(versionText);

    // 버튼: test.md 보기
    const viewButton = document.createElement("button");
    viewButton.textContent = "데모 가이드 보기";
    viewButton.style.marginLeft = "10px";
    viewButton.style.padding = "4px 10px";
    viewButton.style.fontSize = "11px";
    viewButton.style.backgroundColor = "#ed8202";
    viewButton.style.color = "#fff";
    viewButton.style.border = "none";
    viewButton.style.borderRadius = "4px";
    viewButton.style.cursor = "pointer";
    versionDiv.appendChild(viewButton);

    wrapper.appendChild(versionDiv);

    viewButton.addEventListener("click", () => {
      fetch(basePath + "demoapp_guide_ko.md")
        .then(res => {
          if (!res.ok) throw new Error("Markdown 파일을 불러올 수 없습니다.");
          return res.text();
        })
        .then(md => {
          const html = marked.parse(md);
          document.getElementById("md-content").innerHTML = html;
          document.getElementById("md-modal").style.display = "block";
        })
        .catch(err => alert(err.message));
    });

    const closeBtn = document.querySelector(".md-close-button");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        document.getElementById("md-modal").style.display = "none";
      });
    }
  });
})();
