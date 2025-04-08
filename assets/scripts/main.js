document.addEventListener('DOMContentLoaded', function () {
  const loading = document.getElementById('loading');
  const beatsGrid = document.getElementById('beats-grid');
  const iframes = beatsGrid.getElementsByTagName('iframe');
  let loadedIframes = 0;

  function hideLoading() {
      loading.classList.add('hidden');
      beatsGrid.classList.remove('hidden');
  }

  function checkAllLoaded() {
      loadedIframes++;
      if (loadedIframes === iframes.length) {
          hideLoading();
      }
  }

  setTimeout(() => {
      if (loadedIframes === iframes.length) {
          hideLoading();
      }
  }, 1000);

  Array.from(iframes).forEach(iframe => {
      iframe.addEventListener('load', checkAllLoaded);
  });
});