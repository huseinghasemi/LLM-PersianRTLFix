function applyTextDirection(el) {
  // Skip anchor tags (<a>) to avoid interfering with links
  if (el.tagName.toLowerCase() === "a") return;

    const text = el.textContent.trim();
  
    if (!text) return;
  
    if (/[\u0600-\u06FF]/.test(text)) {
      el.setAttribute('dir', 'rtl');
      el.style.textAlign = 'right'; 
    }
    else if (/[A-Za-z]/.test(text)) {
      el.setAttribute('dir', 'ltr');
      el.style.textAlign = 'left'; 
    }
  }
  
  function processAllElements() {
    document.querySelectorAll('*').forEach(applyTextDirection);
  }
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          applyTextDirection(node);
          node.querySelectorAll('*').forEach(applyTextDirection);
        }
      });
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  processAllElements();
  