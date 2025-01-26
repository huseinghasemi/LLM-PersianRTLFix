const persianRegex = /[\u0600-\u06FF]/;
const englishRegex = /[A-Za-z]/;

function applyTextDirection(el) {
  if (el.closest("nav") || el.hasAttribute('dir')) return;

  const text = el.textContent.trim();
  if (!text) return;

  if (persianRegex.test(text)) {
    el.setAttribute("dir", "rtl");
  } else if (englishRegex.test(text)) {
    el.setAttribute("dir", "ltr");
  }
}

function processAllElements() {
  const allElements = document.getElementsByTagName('*');
  for (let i = 0; i < allElements.length; i++) {
    applyTextDirection(allElements[i]);
  }
}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        applyTextDirection(node);
        const descendants = node.getElementsByTagName('*');
        for (const descendant of descendants) {
          applyTextDirection(descendant);
        }
      }
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

processAllElements();