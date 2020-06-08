export function waitForPageSettled() {
  return new Promise(resolve => {
    let prevH: number = 0;
    let prevY = window.scrollY;
    function check() {
      let nextH = window.innerHeight + document.body.scrollHeight;
      let nextY = window.scrollY;
      let settled = nextH === prevH;
      if (settled) {
        if (nextY === prevY) resolve();
        return;
      }
      prevH = nextH;
      requestAnimationFrame(check);
    }
    requestAnimationFrame(check);
  });
}
