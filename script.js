// ────────────────────────────────────────────────────────────────
// Script Name   : YouTube Post Auto Deleter
// Author        : Robin Singh
// Version       : v1.0.0
// Description   : Automatically and recursively deletes all YouTube posts
//                 from the YouTube Studio post manager, one by one.
// Note          : Use at your own risk. This script simulates UI clicks.
//                 Ensure you're on the YouTube Studio "Posts" page.
// Last Updated  : 2025-06-12
// ────────────────────────────────────────────────────────────────
setInterval(() => {
  try {
    document
      .querySelector(
        "#row-container > div.tablecell-post.floating-column.last-floating-column.cell-body.style-scope.ytcp-post-row.style-scope.ytcp-post-row > div.post-thumbnail.style-scope.ytcp-post-row > a > ytcp-post-thumbnail"
      )
      ?.click(); // find Post
  } catch (error) {}
  try {
    document.querySelector("#post-edit > ytcp-post-metadata-editor > div > div.ytPostMetadataEditorZeroZIndex > ytcp-sticky-header > div > div > ytcp-icon-button > tp-yt-iron-icon").click(); //3dots
  } catch (error) {}
  try {
    document.querySelector("#text-item-0")?.click(); //click DeleteForever after clicking 3 dots
  } catch (error) {}
  try {
    document.querySelector("#checkbox-line-height-aligner-container")?.click(); //confirmation button
  } catch (error) {}
  //-------------------------------------DELETING-FOREVER------------------------------------------
  try {
    document
      .querySelector(
        "#delete-confirm-button > ytcp-button-shape > button > yt-touch-feedback-shape > div"
      )
      ?.click();
  } catch (error) {}
}, 1000);
