// ────────────────────────────────────────────────────────────────
// Script Name   : YouTube Post Auto Deleter
// Author        : Robin Singh
// Version       : v1.0.3
// Description   : Automatically and recursively deletes all YouTube posts
//                 from the YouTube Studio post manager, one by one.
// Note          : Use at your own risk. This script simulates UI clicks.
//                 Ensure you're on the YouTube Studio "Posts" page.
// Last Updated  : 2026-11-26
// ────────────────────────────────────────────────────────────────
setInterval(() => {
  try {
    document
      .querySelector(
        "#video-list > ytcp-post-section > ytcp-post-section-content > ytcp-post-row:nth-child(2) > div > div.cell-body.tablecell-post.floating-column.last-floating-column > div.ytcpPostRowPostThumbnail > a > ytcp-post-thumbnail",
      )
      ?.click(); // Select post
    document
      .querySelector(
        "#main > div > ytcp-animatable.page.selected.style-scope.ytcp-app.style-scope.ytcp-app > ytcp-content-hub-page > div > ytcp-post-section > ytcp-post-section-content > ytcp-post-row > div > div.cell-body.tablecell-post.floating-column.last-floating-column > div.ytcpPostRowPostActionsContainer > a:nth-child(1) > ytcp-button > div > ytcp-button-shape > button > yt-touch-feedback-shape > div.ytSpecTouchFeedbackShapeFill",
      )
      .click();
  } catch (error) {}

  try {
    document
      .querySelector(
        "#main > div > ytcp-animatable.page.selected.style-scope.ytcp-app.style-scope.ytcp-app > ytcp-post-metadata-editor-section > ytcp-post-metadata-editor > div > div.ytPostMetadataEditorZeroZIndex > ytcp-sticky-header > div > div > ytcp-icon-button",
      )
      .click(); // Open 3-dot menu
  } catch (error) {}

  try {
    document.querySelector("#text-item-0").click(); // Click Delete
  } catch (error) {}

  try {
    document.querySelector("#checkbox-container").click(); // Confirm checkbox
  } catch (error) {}

  try {
    document
      .querySelector(
        "#dialog > div.footer.style-scope.ytcp-dialog > div > div > div > ytcp-button.ytcpPostDeleteDialogDeleteButton > div > ytcp-button-shape > button > yt-touch-feedback-shape > div.ytSpecTouchFeedbackShapeFill",
      )
      .click(); // Final confirm
  } catch (error) {}
}, 1000);
