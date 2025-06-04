chrome.commands.onCommand.addListener((command) => {
    if (command === 'copy-url') {
      // Get the current active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          const url = tabs[0].url;
          
          // Copy the URL to clipboard
          copyToClipboard(url);
        }
      });
    }
  });
  
  async function copyToClipboard(text) {
    try {
      // For Manifest V3, we need to inject a content script to access clipboard
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (url) => {
          // Copy to clipboard
          navigator.clipboard.writeText(url).then(() => {
            console.log('URL copied to clipboard:', url);
            
            // Create and show toast notification
            const toast = document.createElement('div');
            toast.textContent = 'URL copied to clipboard!';
            toast.style.cssText = `
              position: fixed;
              bottom: 20px;
              right: 20px;
              background-color: oklch(79.2% 0.209 151.711);
              color: black;
              padding: 12px 20px;
              border-radius: 4px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 14px;
              z-index: 999999;
              box-shadow: 0 2px 5px rgba(0,0,0,0.2);
              transition: opacity 0.3s ease-in-out;
              opacity: 0;
            `;
            
            document.body.appendChild(toast);
            
            // Fade in
            setTimeout(() => {
              toast.style.opacity = '1';
            }, 10);
            
            // Fade out and remove after 2 seconds
            setTimeout(() => {
              toast.style.opacity = '0';
              setTimeout(() => {
                toast.remove();
              }, 300);
            }, 10000);
            
          }).catch(err => {
            console.error('Failed to copy:', err);
          });
        },
        args: [text]
      });
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  }