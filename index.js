/*!
 * tooltip-anywhere.js v0.1.0
 * Copyright 2018 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 *
 * Full details and documentation:
 *
 */

(function(root, undefined) {

  const tooltip = document.getElementById('tooltip');
  const element = document.documentElement || document.body;
  function selectText() {
    let x1;
    let y1;
    let x2;
    let y2;
    element.onmousedown = function(e) {
      x1 = e.clientX;
      y1 = e.clientY;
    };
    element.onmouseup = function(e) {
      if (window.getSelection().toString() !== '') {
        x2 = e.clientX;
        y2 = e.clientY;
        const data = element.scrollTop;
        tooltip.style.top = data > 0 ? `${data + y1 - 60}px` : `${y1 - 60}px`;
        tooltip.style.left = `${x1 + ((x2 - x1) / 2) - 60}px`;
        tooltip.style.display = 'block';
      } else {
        tooltip.style.display = 'none';
      }
    };
  };
  selectText();

}(this));