javascript: (() => {
  function loop(n) {
    if (n == 0) return;
    setTimeout(() => {
      document.querySelector("#svPlayerId > div.stage > div.rightpoint.pointly").click();
      loop(n-1);
    }, 100);
  };
  loop(parseInt(document.querySelector('#total-slides').textContent)-2);
})();
