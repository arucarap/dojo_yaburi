var coverClassName = '';
const hostname = new URL(window.location.href).hostname;
if(/(fp.|chintaikanrishi)-siken/.test(hostname)) {
  coverClassName = 'kaisetsu';
} else {
  coverClassName = 'ansbg';
}

const covers = document.getElementsByClassName(coverClassName);

const observer = new MutationObserver(_records => {
  for (var i = 0; i < covers.length; i++) {
    covers[i].style.filter = null;
    covers[i].style.opacity = null;
    covers[i].style.userSelect = null;
  }
});

for (var i = 0; i < covers.length; i++) {
  observer.observe(covers[i], {
    attributes: true,
    attributeFilter: ['style']
  });
}
