var targets = [];
const hostname = new URL(window.location.href).hostname;
if(/fp.-siken/.test(hostname)) {
  targets = document.getElementsByClassName('kaisetsu');
} else {
  targets = document.getElementsByClassName('ansbg');
}

const observer = new MutationObserver(_records => {
  for (var i = 0; i < targets.length; i++) {
    targets[i].style.filter = null;
    targets[i].style.opacity = null;
    targets[i].style.userSelect = null;
  }
});

for (var i = 0; i < targets.length; i++) {
  observer.observe(targets[i], {
    attributes: true,
    attributeFilter: ['style']
  });
}
