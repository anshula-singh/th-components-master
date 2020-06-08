const SPINNER_TIMEOUT = 200;
const READY_CHECK_INTERVAL = 200;

class Loader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.innerHTML = `
      <style>${css}</style>
      <div role="status">
        <span class="assistive-text">Loading</span>
        <div class="spinner spinner_medium">
          <div class="spinner__dot-a"></div>
          <div class="spinner__dot-b"></div>
        </div>
      <div>
    `;
  }
  async connectedCallback() {
    let element = this.getAttribute("element");
    if (!element) return;
    let elements = Array.from(document.querySelectorAll(element));
    let checkReady = () =>
      elements.every(n => n.shadowRoot && n.shadowRoot.innerHTML);
    let setStyle = (style: object) =>
      elements.forEach(n =>
        Object.assign(
          (n as HTMLElement).style,
          {
            display: "block",
            transition: "opacity 1000ms"
          },
          style
        )
      );
    setStyle({ height: 0, opacity: 0, overflow: "hidden" });
    let spinnerTimeout = setTimeout(() => {
      this.shadowRoot!.querySelector(".spinner")!.classList.add("spinner_show");
    }, SPINNER_TIMEOUT);
    await customElements.whenDefined(element);
    if (!checkReady()) {
      await new Promise(resolve => {
        let readyInterval = setInterval(() => {
          if (!checkReady()) return;
          clearInterval(readyInterval);
          resolve();
        }, READY_CHECK_INTERVAL);
      });
    }
    clearTimeout(spinnerTimeout);
    this.remove();
    setStyle({ height: null, opacity: 1, overflow: null });
  }
}

customElements.define("th-element-loader", Loader);

const css = `
:host {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.assistive-text {
  position: absolute!important;
  margin: -1px!important;
  border: 0!important;
  padding: 0!important;
  width: 1px!important;
  height: 1px!important;
  overflow: hidden!important;
  clip: rect(0 0 0 0)!important;
  text-transform: none!important;
  white-space: nowrap!important;
}

.spinner {
  --offset: 500ms;
  --duration: 1000ms;
  position: relative;
  width: 2rem;
  height: 2rem;
  margin-top: 1rem;
  opacity: 0;
  transform-origin: 50% 50%;
  transform: translateY(50%);
  transition: opacity 100ms;
}

.spinner_show {
  opacity: 1;
}

.spinner__dot-a,
.spinner__dot-b {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform-origin: 50% 50%;
}

.spinner:before,
.spinner:after,
.spinner__dot-a:before,
.spinner__dot-b:before,
.spinner__dot-a:after,
.spinner__dot-b:after {
  content: "";
  position: absolute;
  background: #adadad;
  border-radius: 100px;
  animation-duration: var(--duration);
  animation-iteration-count: infinite;
  transform: translate3d(0, 0, 0);
  width: 0.5rem;
  height: 0.5rem;
}

.spinner:before,
.spinner__dot-a:before,
.spinner__dot-b:before {
  animation-name: dotsBounceBefore-medium;
  top: -0.25rem;
  left: -0.25rem;
}

.spinner:after,
.spinner__dot-a:after,
.spinner__dot-b:after {
  animation-name: dotsBounceAfter-medium;
  top: -0.25rem;
  right: -0.25rem;
}

.spinner__dot-a {
  transform: rotate(60deg);
}

.spinner__dot-b {
  transform: rotate(120deg);
}

.spinner:before {
  animation-delay: calc(-83.33333ms - var(--offset));
}

.spinner__dot-a:before {
  animation-delay: calc(83.33333ms - var(--offset));
}

.spinner__dot-b:before {
  animation-delay: calc(250ms - var(--offset));
}

.spinner:after {
  animation-delay: calc(416.66667ms - var(--offset));
}

.spinner__dot-a:after {
  animation-delay: calc(583.33333ms - var(--offset));
}

.spinner__dot-b:after {
  animation-delay: calc(750ms - var(--offset));
}

@keyframes dotsBounceBefore-medium {
  0% {
    transform: translate3d(0, 0, 0);
  }

  60% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  80% {
    transform: translate3d(-0.5rem, 0, 0);
    animation-timing-function: cubic-bezier(0, 1.11, 0.7, 1.43);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes dotsBounceAfter-medium {
  0% {
    transform: translate3d(0, 0, 0);
  }

  60% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  80% {
    transform: translate3d(0.5rem, 0, 0);
    animation-timing-function: cubic-bezier(0, 1.11, 0.7, 1.43);
  }

  100% {
    transform: translateX(0);
  }
}
`;
