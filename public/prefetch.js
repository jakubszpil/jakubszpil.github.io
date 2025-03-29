const _createElement = globalThis.document.createElement;
const _timestamp = globalThis.timestamp;

globalThis.document.createElement = (tag, options) => {
  const element = _createElement.bind(document)(tag, options);

  if (element instanceof HTMLLinkElement) {
    const setAttribute = element.setAttribute;

    element.setAttribute = (key, value) => {
      if (element.rel === "prefetch" && key === "href") {
        setAttribute.call(element, key, `${value}?timestamp=${_timestamp}`);
        return;
      }

      setAttribute.call(element, key, value);
      return;
    };
  }

  return element;
};
