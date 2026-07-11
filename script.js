// Size of the stage (background)
const STAGE_WIDTH = 960;
const STAGE_HEIGHT = 534;

// Butterflies: jump to a random spot on the stage when the mouse hovers
document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    const maxLeft = STAGE_WIDTH - el.offsetWidth;
    const maxTop = STAGE_HEIGHT - el.offsetHeight;

    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    el.style.left = newLeft + 'px';
    el.style.top = newTop + 'px';
  });
});

// Small creature (foo): stays inside the window area (360,190) - (850,320)
const WINDOW_LEFT = 360;
const WINDOW_TOP = 190;
const WINDOW_RIGHT = 850;
const WINDOW_BOTTOM = 320;

document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    const maxLeft = WINDOW_RIGHT - el.offsetWidth;
    const maxTop = WINDOW_BOTTOM - el.offsetHeight;

    const newLeft = WINDOW_LEFT + Math.random() * (maxLeft - WINDOW_LEFT);
    const newTop = WINDOW_TOP + Math.random() * (maxTop - WINDOW_TOP);

    el.style.left = newLeft + 'px';
    el.style.top = newTop + 'px';
  });
});
