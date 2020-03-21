export class FakeModal {
  constructor({blocker = false} = {}) {
    this.$blocker = blocker ? new JqElement() : undefined;
  }
}

export class JqElement {
  constructor() {
    this._classes = new Set();
    this._css = {};
    this._children = [];
  }

  toggleClass(cls, toggle) {
    if (toggle) {
      this.addClass(cls);
    } else {
      this._classes.delete(cls);
    }

    return this;
  }

  addClass(cls) {
    this._classes.add(cls);
  }

  removeClass(cls) {
    this._classes.delete(cls);
  }

  hasClass(cls) {
    return this._classes.has(cls);
  }

  css(name, value) {
    if (value !== undefined) {
      this._css[name] = value;
    } else {
      return this._css[name];
    }
  }

  appendTo($parent) {
    $parent.append(this);
  }

  append($el) {
    this._children.push($el);
  }

  has($el) {
    return Boolean(this._children.find(($x) => $el === $x));
  }
}