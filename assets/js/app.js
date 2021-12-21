const navigation = document.querySelector('.navigation');

navigation.addEventListener('mouseover', onNavigationMouseover);
navigation.addEventListener('focusin', onNavigationMouseover);
navigation.addEventListener('mouseleave', onNavigationMouseleave);
navigation.addEventListener('focusout', onNavigationMouseleave);

function onNavigationMouseover(evt) {
  const link = evt.target.closest('.navigation__link');

  if (!link) {
    return;
  }

  const color = link.dataset.color;

  setPageColor(color);
}

function onNavigationMouseleave() {
  setPageColor('rgb(162, 160, 160)');
}

function setPageColor(color) {
  document.documentElement.style.setProperty('--page-bg-color', color);
}


