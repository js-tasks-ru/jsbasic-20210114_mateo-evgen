function toggleText() {
  let toggleButton = document.querySelector('.toggle-text-button');
  let toggledText = document.getElementById('text');
  toggleButton.onclick = function() {
    if (toggledText.hasAttribute('hidden')) {
      toggledText.removeAttribute('hidden');
    }
    else {
      toggledText.setAttribute('hidden', true);
    }
  }
}
