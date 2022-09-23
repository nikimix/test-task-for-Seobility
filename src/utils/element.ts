export const elMap: Map<string, HTMLElement> = new Map();

interface Conf {
  name: string,
  content?: string,
  className?: string,
  attribute?: Attribute[] | Attribute
}

interface Attribute {
  name: string,
  value: string
}

function setElement(commponentName: string, el: HTMLElement): void {
  elMap.set(commponentName, el);
}

export function makeElement<T extends HTMLElement = HTMLElement>(tagName: keyof HTMLElementTagNameMap, conf: Conf): T {
  const { name, content, className, attribute } = conf;
  const el = <T>document.createElement(tagName);

  if (className) {
    el.className = className;
  }

  if (content) {
    el.textContent = content;
  }

  if (Array.isArray(attribute)) {
    attribute.forEach(attr => el.setAttribute(`${attr.name}`, `${attr.value}`));
  } else if (attribute) {
    el.setAttribute(`${attribute.name}`, `${attribute.value}`);
  }

  setElement(name, el);
  
  return el;
}