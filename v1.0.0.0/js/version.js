(function () {
    const version = "v1.0.0.0";
  
    window.addEventListener("DOMContentLoaded", function () {
      const wrapper = document.querySelector(".container-wrapper");
  
      if (wrapper) {
        const versionDiv = document.createElement("div");
        versionDiv.textContent = `버전: ${version}`;
        versionDiv.id = "version-bar";
        wrapper.appendChild(versionDiv);
  
        const button = document.createElement("button");
        button.textContent = "test.md 보기";
        button.id = "md-popup-button";
        button.style.marginTop = "10px";
        button.style.padding = "8px 16px";
        wrapper.appendChild(button);
  
        button.addEventListener("click", function () {
          fetch("did-demo-app/README.md")
            .then((response) => {
              if (!response.ok) {
                throw new Error("Markdown 파일을 불러올 수 없습니다.");
              }
              return response.text();
            })
            .then((markdown) => {
              const renderedHTML = marked.parse(markdown);
  
              const popup = window.open("", "_blank", "width=800,height=600");
              popup.document.write(`
                <html>
                  <head>
                    <title>test.md 미리보기</title>
                    <style>
                      body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        line-height: 1.6;
                      }
                      pre {
                        background: #f4f4f4;
                        padding: 10px;
                        overflow-x: auto;
                      }
                      code {
                        background: #eee;
                        padding: 2px 4px;
                      }
                    </style>
                  </head>
                  <body>
                    ${renderedHTML}
                  </body>
                </html>
              `);
              popup.document.close();
            })
            .catch((error) => {
              alert(error.message);
            });
        });
      }
    });
  })();