interface Conf {
  content?: string,
  className?: string,
  attribute?: Attribute[] | Attribute
}

interface Attribute {
  name: string,
  value: string
}

export function makeElement<T extends HTMLElement = HTMLElement>(tagName: keyof HTMLElementTagNameMap, conf: Conf): T {
  const { content, className, attribute } = conf;
  const el = <T>document.createElement(tagName);

  if (className) {
    el.className = className;
  }

  if (content) {
    el.innerHTML = content;
  }

  if (Array.isArray(attribute)) {
    attribute.forEach(attr => el.setAttribute(`${attr.name}`, `${attr.value}`));
  } else if (attribute) {
    el.setAttribute(`${attribute.name}`, `${attribute.value}`);
  }
  
  return el;
}