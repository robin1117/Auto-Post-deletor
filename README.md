# 🧹 YouTube Post Auto-Delete Script

A JavaScript automation script that recursively deletes all your YouTube Studio posts one by one using DOM manipulation.

---

## 📌 Description

This script is designed to automatically find and delete all community posts on your YouTube channel through the YouTube Studio interface. It simulates user clicks to:

1. Select a post
2. Open the 3-dot menu
3. Click the **Delete** option
4. Confirm the deletion

⚠️ **Warning**: This script performs irreversible deletion. Use it only if you're sure you want to delete all your YouTube posts.

---

## 🚀 Features

- Automatically loops through and deletes posts
- Works directly in the browser console
- Requires no third-party libraries

---

## 🔧 How to Use

1. **Open your browser** and go to:  
   [https://studio.youtube.com/](https://studio.youtube.com/)

2. Navigate to the **"Content > Posts"** section of YouTube Studio.

3. Open the **Developer Console**:
   - Chrome: `Ctrl + Shift + J` (Windows/Linux) or `Cmd + Option + J` (Mac)

4. Paste the entire script into the console and press `Enter`.

5. Let the script run. It will start deleting posts one by one every second.

---

## 📜 Script Preview

```js
setInterval(() => {
  try {
    document
      .querySelector(
        "#row-container > div.tablecell-post.floating-column.last-floating-column.cell-body.style-scope.ytcp-post-row.style-scope.ytcp-post-row > div.post-thumbnail.style-scope.ytcp-post-row > a > ytcp-post-thumbnail"
      )
      ?.click(); // Select post
  } catch (error) {}

  try {
    document.querySelector("#overflow-menu-button > tp-yt-iron-icon").click(); // Open 3-dot menu
  } catch (error) {}

  try {
    document.querySelector("#text-item-0")?.click(); // Click Delete
  } catch (error) {}

  try {
    document.querySelector("#checkbox-line-height-aligner-container")?.click(); // Confirm checkbox
  } catch (error) {}

  try {
    document
      .querySelector(
        "#delete-confirm-button > ytcp-button-shape > button > yt-touch-feedback-shape > div"
      )
      ?.click(); // Final confirm
  } catch (error) {}
}, 1000);
