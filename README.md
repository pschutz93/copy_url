# Quick URL Copy Chrome Extension

A lightweight Chrome extension that copies the current tab's URL to your clipboard using Cmd+Shift+C (Mac) or Ctrl+Shift+C (Windows/Linux).

## Installation

1. Create a new folder on your computer and add the following files:
   - manifest.json
   - background.js

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the folder containing your extension files

5. The extension is now installed!

## Usage

Simply press:
- **Mac**: Cmd+Shift+C
- **Windows/Linux**: Ctrl+Shift+C

The current tab's URL will be copied to your clipboard.

## Customizing the Shortcut

If you want to change the keyboard shortcut:
1. Go to `chrome://extensions/shortcuts`
2. Find "Quick URL Copy"
3. Click the pencil icon and set your preferred shortcut

## Permissions

This extension only requests minimal permissions:
- `activeTab`: To access the current tab's URL
- `clipboardWrite`: To copy the URL to your clipboard