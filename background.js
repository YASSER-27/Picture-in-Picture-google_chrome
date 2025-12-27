chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: togglePiP
  });
});

function togglePiP() {
  const video = document.querySelector('video');
  
  if (!video) {
    alert("لم يتم العثور على أي فيديو في هذه الصفحة!");
    return;
  }

  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture()
      .catch(error => {
        alert("هذا المتصفح أو الموقع لا يدعم تقنية PiP حالياً.");
      });
  }
}